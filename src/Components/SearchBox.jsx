import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { useState } from "react";

const SearchBox = () => {
    const [searchInput, setSearchInput] = useState({job: "", location: ""})
    const handleSearchInput = (e) => {
        setSearchInput({
            ...searchInput,[e.target.name]: e.target.value
        })
    }
  return (
    <div className="flex justify-around items-center p-3 md:p-8 bg-[#ffffff] dark:bg-blue-100 rounded-full shadow-xl md:shadow-2xl">
      <div className="flex items-center gap-2">
        {<AiOutlineSearch />}
        <input
          placeholder="Job Titles or Keywords"
          className="focus:outline-none dark:bg-blue-100"
          name="job"
          value={searchInput.job}
          onChange={handleSearchInput}
        />
        {searchInput.job && <button>{<AiOutlineCloseCircle />}</button>}
      </div>
      <div className="hidden md:flex items-center gap-2">
        {<IoLocationOutline />}
        <input
          placeholder="City or State or Country"
          className="focus:outline-none dark:bg-blue-100"
          name="location"
          value={searchInput.location}
          onChange={handleSearchInput}
        />
        {searchInput.location && <button>{<AiOutlineCloseCircle />}</button>}
      </div>
      <div>
        <CustomButton
          onClick={""}
          title="Search"
          containerStyles={
            "text-white py-2 md:py3 px-3 md:px-10 focus:outline-none bg-blue-600 hover:bg-blue-800 rounded-full md:rounded-md text-sm md:text-base"
          }
        />
      </div>
    </div>
  );
};

export default SearchBox;
