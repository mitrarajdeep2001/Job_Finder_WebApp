import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FilterBox = () => {
  const [filterDropdown, setFiterDropdown] = useState({
    jobType: false,
    experience: false,
  });
  return (
    <div className="hidden lg:block bg-[#ffffff] dark:bg-blue-100 p-8 rounded shadow-md h-[500px]">
      <h2 className="text-gray-600 font-medium">Filter Search</h2>
      <div>
        <button
          type="button"
          className="flex items-center gap-3 w-full my-2 text-base text-900 transition duration-75 rounded-lg font-medium"
          onClick={() =>
            setFiterDropdown({
              ...filterDropdown,
              jobType: !filterDropdown.jobType,
            })
          }
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5H4z"></path>
          </svg>
          <span className="text-left whitespace-nowrap">Job Type</span>
          {filterDropdown.jobType ? (
            <IoIosArrowUp fontWeight={"bold"} fontSize={"1.3rem"} />
          ) : (
            <IoIosArrowDown fontWeight={"bold"} fontSize={"1.3rem"} />
          )}
        </button>
        <ul
          id="dropdown-example"
          className={`${filterDropdown.jobType && "hidden"} py-2`}
        >
          {["Full-Time", "Part-Time", "Contract"].map(
            (type, index) => (
              <li key={index} class="flex items-center mb-4">
                <input
                  id={index}
                  type="checkbox"
                  value="fulltime"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  htmlFor={index}
                  className="ms-2 text-sm text-gray-900 transition duration-75"
                >
                  {type}
                </label>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="flex items-center gap-3 w-full my-2 text-base text-900 transition duration-75 rounded-lg font-medium"
          onClick={() =>
            setFiterDropdown({
              ...filterDropdown,
              experience: !filterDropdown.experience,
            })
          }
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
          </svg>
          <span className="text-left whitespace-nowrap">Category</span>
          {filterDropdown.experience ? (
            <IoIosArrowUp fontWeight={"bold"} fontSize={"1.3rem"} />
          ) : (
            <IoIosArrowDown fontWeight={"bold"} fontSize={"1.3rem"} />
          )}
        </button>
        <ul
          id="dropdown-example"
          className={`${filterDropdown.experience && "hidden"} py-2`}
        >
          {["Under 1 Year", "1 - 2 Year", "2 - 6 Year", "Over 6 Year"].map(
            (type, index) => (
              <li key={index} class="flex items-center mb-4">
                <input
                  id={index}
                  type="checkbox"
                  value="fulltime"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  htmlFor={index}
                  className="ms-2 text-sm text-gray-900 transition duration-75"
                >
                  {type}
                </label>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
