import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center gap-4 mx-4">
      <div className="flex items-center justify-center min-w-14 min-h-14 rounded-full bg-red-300">
        <IoSearchOutline className="text-white text-2xl" />
      </div>
      <input type="search" id="mySearch" name="q" placeholder="search breeds" className="w-full max-w-xl h-14 px-6 rounded-full border border-gray-300 bg-gray-100 placeholder-gray-400 focus:outline-none " />
    </div>
  );
};

export default Search;
