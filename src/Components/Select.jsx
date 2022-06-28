import {Fragment} from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineCheck, HiOutlineSelector } from 'react-icons/hi';

const Select = ({
    options,
    selectedOption,
    handelChange,
    // key,
  }) => {

    return (
      <Listbox
        as="div"
        value={selectedOption}
        onChange={(e) => {
          handelChange(e);
        }}
      >
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button className="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left  transition ease-in-out duration-150">
                  <span className="block truncate">{selectedOption}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                    <HiOutlineSelector />
                  </span>
                </Listbox.Button>
              </span>
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg mb-11">
                {/* bottom-0 will open the select menu up & mb-11 will put the dropup above the select option */}
                <Transition
                  show={open}
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform opacity-100"
                  leaveTo="transform opacity-0"
                >
                  <Listbox.Options
                    static
                    className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {options?.map((option) => {
                      return (
                        <Listbox.Option
                          as={Fragment}
                          key={option.name}
                          value={option}
                        >
                          {({ active, selected }) => {
                            return (
                              <li
                                className={`${
                                  active
                                    ? "text-white bg-indigo-600"
                                    : "text-gray-900"
                                } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                              >
                                <div className="flex items-center">
                                  <span
                                    className={`${
                                      selected ? "font-semibold" : "font-normal"
                                    } flex items-center truncate`}
                                  >
                                    {option.name}
                                  </span>
                                  {selected && (
                                    <span
                                      className={`${
                                        active ? "text-white" : "text-indigo-600"
                                      } absolute inset-y-0 right-0 flex items-center mr-3 pl-1.5`}
                                    >
                                      <HiOutlineCheck />
                                    </span>
                                  )}
                                </div>
                              </li>
                            );
                          }}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          </>
        )}
      </Listbox>
    );
  };
  
  export default Select;