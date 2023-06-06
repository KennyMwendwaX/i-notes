import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { BsSave } from "react-icons/bs";

interface FormValues {
  id: string;
  title: string;
  category: string;
  content: string;
}

type EditNoteProps = {
  note: FormValues;
  showEditModal: boolean;
  setShowEditModal: Dispatch<SetStateAction<boolean>>;
  fetchNotes: () => void;
};

export default function EditNote({
  note,
  fetchNotes,
  showEditModal,
  setShowEditModal,
}: EditNoteProps) {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    // Pre-populate the form fields when the note prop changes
    setValue("title", note.title);
    setValue("category", note.category);
    setValue("content", note.content);
  }, [note, setValue]);

  const handleEditModalToggle = () => {
    setShowEditModal(!showEditModal);
  };

  async function onSubmit(values: FormValues) {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const res = await fetch(`api/update/${note.id}`, options);

    if (res.status === 200) {
      fetchNotes(); // Trigger refetch of notes
      setShowEditModal(false);
    }
  }

  return (
    <>
      {/* Modal */}
      {showEditModal && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          {/* Modal content */}
          <div className="relative w-full max-w-2xl rounded-lg bg-white p-4 shadow sm:p-5">
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Note
              </h3>
              <button
                type="button"
                onClick={handleEditModalToggle}
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                data-modal-toggle="defaultModal">
                <MdClose className="h-6 w-6" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <div className="mb-3">
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-gray-900">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                    placeholder="Type note title"
                    required
                    {...register("title")}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-medium text-gray-900">
                    Category
                  </label>
                  <select
                    id="category"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    {...register("category")}>
                    <option value="Personal">Personal</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Goals">Goals</option>
                    <option value="Education">Education</option>
                    <option value="Finance">Finance</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Recipes">Recipes</option>
                    <option value="Health and Fitness">
                      Health and Fitness
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="body"
                    className="mb-2 block text-sm font-medium text-gray-900">
                    Note Content
                  </label>
                  <textarea
                    id="content"
                    rows={8}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    placeholder="Write your note content here"
                    required
                    {...register("content")}></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <BsSave className="mr-1 h-5 w-5" />
                Add new note
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
