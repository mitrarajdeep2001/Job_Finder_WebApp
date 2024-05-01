import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setKeyword,
  setLocation,
  clearSearch,
} from "../Redux-Toolkit/Slices/search";

const SearchBox = () => {
  const searchInput = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    const { name, value } = e.target;
    if (name === "keyword") {
      dispatch(setKeyword(value));
    } else if (name === "location") {
      dispatch(setLocation(value));
    }
  };

  return (
    <div className="flex justify-around items-center p-3 md:p-8 bg-[#ffffff] dark:bg-blue-100 rounded-full shadow-xl md:shadow-2xl">
      <div className="flex items-center gap-2">
        <AiOutlineSearch />
        <input
          placeholder="Job Title or Company"
          className="focus:outline-none dark:bg-blue-100"
          name="keyword"
          value={searchInput.keyword}
          onChange={handleSearchInput}
        />
        {searchInput.keyword && (
          <button onClick={() => dispatch(clearSearch())}>
            <AiOutlineCloseCircle />
          </button>
        )}
      </div>
      <div className="hidden md:flex items-center gap-2">
        <IoLocationOutline />
        <input
          placeholder="City or State or Country"
          className="focus:outline-none dark:bg-blue-100"
          name="location"
          value={searchInput.location}
          onChange={handleSearchInput}
        />
        {searchInput.location && (
          <button onClick={() => dispatch(clearSearch())}>
            <AiOutlineCloseCircle />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
