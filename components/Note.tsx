import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineClock, HiPlus } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Note() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="container mx-auto mb-2 px-5 py-20">
      <button
        onClick={handleModalToggle}
        className="mb-4 flex items-center rounded-lg border border-gray-400 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-700 hover:bg-blue-700 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
        <HiPlus className="mr-1 h-5 w-5" />
        Show note
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
            <div className="mb-4 flex items-center justify-between rounded-t border-b pb-3 sm:mb-5">
              <h2 className="text-xl font-semibold text-gray-900">Note</h2>
              <button
                type="button"
                onClick={handleModalToggle}
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                data-modal-toggle="defaultModal">
                <MdClose className="h-6 w-6" />
                <span className="sr-only">Close note</span>
              </button>
            </div>
            {/* Modal body */}
            <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
              Raclette Blueberry Nextious Level
            </h1>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="inline-block rounded bg-indigo-100 px-2 py-1 text-sm font-medium tracking-widest text-indigo-600">
                CATEGORY
              </span>
              <span
                aria-label="time"
                role="contentinfo"
                className="flex items-center rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-800 dark:border-gray-700 dark:text-gray-400">
                <HiOutlineClock />
                <p className="ml-2">7 Sept, 23:00</p>
              </span>
            </div>
            <p className="border-b border-gray-200 p-3 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              magnam reprehenderit, inventore rem consequuntur ratione totam
              dolore expedita quo iste culpa, sunt corporis ullam officia id
              quibusdam cupiditate quod earum.
            </p>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <FaEdit className="-ml-1 mr-1 h-4 w-4" />
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                <FaRegTrashAlt className="-ml-1 mr-1.5 h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
