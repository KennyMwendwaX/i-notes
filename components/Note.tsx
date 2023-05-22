import { HiArrowRight, HiOutlineEye } from "react-icons/hi";
import { BiComment } from "react-icons/bi";

export default function Note() {
  return (
    <>
      <div className="p-4 lg:w-1/4">
        <div className="relative h-full overflow-hidden rounded-lg border border-gray-400 bg-gray-100 bg-opacity-75 px-8 pb-12 pt-8 text-center">
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
          <a className="inline-flex cursor-pointer items-center text-indigo-500 hover:underline">
            Read More
            <HiArrowRight className="ml-2 h-4 w-4" />
          </a>
          <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none">
            <span className="mr-3 inline-flex items-center border-r-2 border-gray-400 py-1 pr-3 text-sm leading-none text-gray-500">
              <HiOutlineEye className="mr-1 h-5 w-5" />
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-500">
              <BiComment className="mr-1 h-4 w-4" />6
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
