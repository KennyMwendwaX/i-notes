import { FaSearch, FaBars } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full bg-gray-200 px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap font-mono text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
              iNotes
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="mr-4 rounded-lg p-2.5 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              <BsMoonStarsFill className="h-6 w-6" />

              <span className="sr-only">Toggle dark mode</span>
            </button>

            {/* Mobile view Icons */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="mr-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden">
              <FaSearch />
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <FaBars />
            </button>
          </div>
          {/* Search bar */}
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search">
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-300">
                <FaSearch />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-500 bg-gray-50 p-2 pl-10 text-sm text-gray-800 focus:border-blue-600 focus:outline-none dark:bg-gray-600 dark:text-gray-200 dark:focus:border-indigo-600"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
