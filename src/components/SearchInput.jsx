import { useState } from "react";
import SearchIcon from "../assets/icons/search.svg";
import { useSearchProvider } from "../contexts/SearchContext";
import useDebounce from "../hooks/useDebounce";

export default function SearchInput() {
  const [isActive, setIsActive] = useState(false);
  const { setSearchValue, searchRef } = useSearchProvider();

  const doSearch = useDebounce((value) => {
    return setSearchValue(value);
  }, 500);
  const handleChange = (e) => {
    doSearch(e.target.value);
  };
  return (
    <div
      className={
        "flex items-center rounded-full space-x-3 lg:space-x-8 p-1 px-2 relative "
      }
    >
      <input
        onChange={handleChange}
        type="text"
        ref={searchRef}
        placeholder="search by keywords ..."
        className={`pl-3 font-thin outline-dotted outline-green-600 outline-2  text-black absolute p-1 right-2 duration-300 ${
          !isActive
            ? "w-0 opacity-0 -z-10"
            : "w-[46rem] xl:w-96  h-8 text-lg rounded-full  backdrop-blur-sm "
        }`}
      />
      <button
        onClick={() => {
          setIsActive(!isActive), searchRef.current.focus();
        }}
      >
        <img
          src={SearchIcon}
          className={`duration-500 ${
            isActive
              ? "rotate-[360deg] outline-double  outline-4 outline-green-600  bg-[#00d991]"
              : "outline-2 outline-dotted bg-white"
          } p-1 rounded-full z-50 size-8 shadow-black  hover:scale-105 `}
        />
      </button>
    </div>
  );
}
