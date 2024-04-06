import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";

export default function ListBox({ selectItems, formData, setFormData }) {
  const [filter, setFilter] = useState(selectItems[0]);
  useEffect(() => {
    setFormData({ ...formData, jobType: filter });
  }, [filter]);
  return (
    <div className="w-full">
      <Listbox name="jobType" value={filter} onChange={setFilter}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default text-gray-500 border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 py-[6px] pl-3 pr-10 text-left focus:outline-none">
            <span className="block">{filter}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className=" text-gray-400"
                aria-hidden="true"
                fontSize={"1.7rem"}
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-blue-100 py-1 text-base shadow-xl focus:outline-none">
              {selectItems.map((filter, filterIdx) => (
                <Listbox.Option
                  key={filterIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 rounded-md ${
                      active
                        ? "bg-blue-200 dark:bg-blue-300 text-blue-700"
                        : "text-gray-900 bg-white dark:bg-blue-100"
                    }`
                  }
                  value={filter}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block text-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {filter}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 flex items-center">
                          <HiCheck
                            className="h-5 w-5 text-blue-700"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
