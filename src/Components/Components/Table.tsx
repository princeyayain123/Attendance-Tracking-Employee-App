import { useState } from "react";
import DropDown from "./DropDown";
import FilterEmployees from "../CustomHooks/FilterEmployees";

const Table = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 7 days");

  const [isOpen, setIsOpen] = useState(false);

  const filters = ["Last day", "Last 7 days", "Last 30 days", "Last month", "Last year"];

  const { filteredEmployees, handleFilter } = FilterEmployees();

  return (
    <div className="w-full p-4 shadow-xl">
      <div className="relative ">
        <div className="flex flex-col sm:flex-row w-full justify-between gap-2">
          <button onClick={() => setIsOpen(!isOpen)} className="my-4 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700" type="button">
            <DropDown />
            {selectedFilter}
            <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div className="relative my-4 sm:w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input type="text" onChange={handleFilter} id="table-search" className="block w-full py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" role="menu">
              {filters.map((filter, index) => (
                <li key={index}>
                  <label className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                    <input
                      type="radio"
                      name="filter-radio"
                      checked={selectedFilter === filter}
                      onChange={() => {
                        setSelectedFilter(filter);
                        setIsOpen(false);
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{filter}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full border border-gray-300 rounded-lg">
          {/* Header */}
          <div className="grid grid-cols-4 bg-gray-200 font-semibold text-gray-700 p-2 border-b border-gray-300">
            <div>Name</div>
            <div>Time In</div>
            <div>Time Out</div>
            <div>Status</div>
          </div>

          {filteredEmployees.map((employee, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-4 p-2 border-b border-gray-200">
                  <div>{employee.name}</div>
                  <div>{employee.timein}</div>
                  <div>{employee.timeout}</div>
                  <div className="text-green-600 font-medium">{employee.status}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
