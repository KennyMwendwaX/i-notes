import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { HiEmojiHappy, HiPlus } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { TbBlockquote } from "react-icons/tb";
import {
  FaBold,
  FaCode,
  FaHeading,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
} from "react-icons/fa";

type FormValues = {
  title: string;
  category: string;
  content: string;
};

type AddNoteProps = {
  fetchNotes: () => void;
};

export default function AddNote({ fetchNotes }: AddNoteProps) {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  async function onSubmit(values: FormValues) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const res = await fetch("http://localhost:3000/api/register", options);

    if (res.status === 201) {
      setShowModal(false);
      fetchNotes(); // Trigger refetch of notes
    }
  }

  return (
    <>
      <button
        onClick={handleModalToggle}
        className="mb-4 flex items-center rounded-lg border border-gray-400 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
        <HiPlus className="mr-1 h-5 w-5" />
        Add Note
      </button>

      {/* Modal */}
      {showModal && (
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
                Add Note
              </h3>
              <button
                type="button"
                onClick={handleModalToggle}
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
                  <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                    <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                      <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                        <div className="flex items-center space-x-1 sm:pr-4">
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaHeading className="h-4 w-4" />
                            <span className="sr-only">Add Heading</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaBold className="h-4 w-4" />
                            <span className="sr-only">Add Bold</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaItalic className="h-4 w-4" />
                            <span className="sr-only">Add Italic</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <TbBlockquote className="h-5 w-5" />
                            <span className="sr-only">Add Blockquote</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaCode className="h-4 w-4" />
                            <span className="sr-only">Add Code</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaLink className="h-4 w-4" />
                            <span className="sr-only">Add Link</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaListUl className="h-4 w-4" />
                            <span className="sr-only">Add Bulleted List</span>
                          </button>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <FaListOl className="h-4 w-4" />
                            <span className="sr-only">Add Numbered List</span>
                          </button>
                          <button
                            type="button"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <HiEmojiHappy className="h-5 w-5" />
                            <span className="sr-only">Add emoji</span>
                          </button>
                        </div>
                      </div>
                      <button className="flex items-center rounded-lg border border-gray-400 bg-transparent px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
                        Preview
                      </button>
                    </div>
                    <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                      <textarea
                        id="content"
                        rows={8}
                        className="block w-full border-0 bg-white px-0 text-sm text-gray-800 outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write your note content here"
                        required
                        {...register("content")}></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <HiPlus className="mr-1 h-5 w-5" />
                Add new note
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
