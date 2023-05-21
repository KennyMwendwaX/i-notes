export default function Note() {
  return (
    <>
      <div className="relative h-full overflow-hidden rounded-lg border border-gray-400 bg-gray-100 bg-opacity-75 px-8 pb-16 pt-10 text-center">
        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
          CATEGORY
        </h2>
        <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
          Raclette Blueberry Nextious Level
        </h1>
        <p className="mb-3 leading-relaxed">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <a className="inline-flex items-center text-indigo-500">
          Read More
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none">
          <span className="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
            <svg
              className="mr-1 h-4 w-4"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span className="inline-flex items-center text-sm leading-none text-gray-400">
            <svg
              className="mr-1 h-4 w-4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </>
  );
}
