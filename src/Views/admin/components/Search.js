import React from 'react'

const Search = ({ placeholder, value, onChangeHandler }) => {
    
  return (
    <div className="relative mr-6 mt-2 mb-4 flex flex-row items-center bg-white shadow px-3 rounded-md w-full">
      <input
        type="search"
        className="bg-purple-white w-full   border-0 px-3 py-3 focus:outline-none "
        placeholder={`Search by ${placeholder}`}
        value={value}
        onChange={onChangeHandler}
      />

      <svg
        className="w-6 h-6 stroke-current text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default Search
