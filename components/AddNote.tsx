import { HiPlus } from "react-icons/hi";

export default function AddNote() {
  return (
    <>
      <button className="mb-4 flex items-center rounded-lg border border-gray-400 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-700 hover:bg-blue-700 hover:text-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
        <HiPlus className="mr-1 h-5 w-5" />
        Add Note
      </button>
    </>
  );
}
