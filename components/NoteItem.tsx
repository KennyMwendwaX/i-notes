import { HiArrowRight, HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { BiComment } from "react-icons/bi";

export default function NoteItem() {
  return (
    <>
      <div className="p-4 lg:w-1/4">
        <div className="relative h-full overflow-hidden rounded-lg border border-gray-400 bg-gray-100 bg-opacity-75 px-8 pb-10 pt-8">
          <h2 className="title-font mb-1text-sm font-medium tracking-widest text-gray-500">
            CATEGORY
          </h2>
          <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
            Raclette Blueberry Nextious Level
          </h1>
          <p className="mb-3 font-thin leading-relaxed text-gray-500">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="inline-flex cursor-pointer items-center text-indigo-500 hover:underline">
            Read More
            <HiArrowRight className="ml-2 h-4 w-4" />
          </div>
          <span className="mr-2 mt-2 inline-flex items-center rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400">
            <HiOutlineClock className="mr-1 h-4 w-4" />3 days ago
          </span>
        </div>
      </div>
    </>
  );
}
