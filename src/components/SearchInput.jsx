import { useState } from "react";
import SearchIcon from "../assets/icons/search.svg";
import { useSearchProvider } from "../contexts/SearchContext";
import useDebounce from "../hooks/useDebounce";

export default function SearchInput() {
  const [isActive, setIsActive] = useState(false);
  const { setSearchValue } = useSearchProvider();

  const doSearch = useDebounce((value) => {
    return setSearchValue(value);
  }, 500);
  const handleChange = (e) => {
    doSearch(e.target.value);
  };
  return (
    <div
      className={
        "flex items-center rounded-full space-x-3 lg:space-x-8 p-1 px-2 relative"
      }
    >
      <input
        onChange={handleChange}
        type="text"
        placeholder="search by keyword .."
        className={`pl-3 font-thin outline-dotted outline-green-600 outline-2 absolute p-1 right-2 duration-300 ${
          !isActive
            ? "w-0 opacity-0 -z-10"
            : "xl:w-64 sm:text-xs h-8 text-lg  w-36 rounded-full"
        }`}
      />
      <button onClick={() => setIsActive(!isActive)}>
        <img
          src={SearchIcon}
          className={`duration-500 ${
            isActive
              ? "rotate-[3600deg] outline-double  outline-4 outline-green-600 size-8 bg-green-500"
              : "outline-2 outline-dotted "
          } p-1 rounded-full z-50  shadow-black`}
        />
      </button>
    </div>
  );
}
