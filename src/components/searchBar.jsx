/* eslint-disable react/prop-types */

import { useDebouncedCallback } from "use-debounce";

export function SearchBar({ onSearch }) {

  const debounced = useDebouncedCallback(

    (value) => {
      onSearch(value);
    },

    1000
  );

  return (
    <>
      <input
        className="border focus:outline-none h-12 md:w-80 lg:w-[600px] rounded-2xl text-black text-center my-8 focus:border-purple-700"
        type="text"
        onChange={(e) => debounced(e.target.value)}
        placeholder="Search Here..."
      />
    </>
  );
}
