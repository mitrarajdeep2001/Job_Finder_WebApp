import React from "react";

const Pagination = () => {
  return (
    <nav className="container mx-auto py-5">
      <ul className="flex items-center justify-center h-10 text-base">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-[#ffffff] hover:bg-gray-100 dark:bg-[#1d4fd826] hover:dark:bg-slate-900 border border-r-0 border-gray-300 dark:border-blue-600 rounded-l-md text-black dark:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight bg-[#ffffff] hover:bg-gray-100 dark:bg-[#1d4fd826] hover:dark:bg-slate-900 border border-gray-300 dark:border-blue-600 text-black dark:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight bg-[#ffffff] hover:bg-gray-100 dark:bg-[#1d4fd826] hover:dark:bg-slate-900 border border-l-0 border-gray-300 dark:border-blue-600 rounded-r-md text-black dark:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
