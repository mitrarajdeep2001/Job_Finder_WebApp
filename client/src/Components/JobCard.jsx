import { IoLocationOutline } from "react-icons/io5";
import noImgAvailable from "../assets/no-image-available.jpeg";

const JobCard = ({ e }) => {
  return (
    <div
      key={e.id}
      className=" bg-[#ffffff] dark:bg-blue-100 p-5 md:p-10 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center gap-5">
        <div className="w-20 h-20 rounded-full">
          <img
            src={e.companyLogo || noImgAvailable}
            alt="company_logo"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-bold">{e.jobTitle}</p>
          <p className="font-medium flex items-center gap-2">
            <IoLocationOutline />
            {e.location}
          </p>
        </div>
      </div>
      <div className="line-clamp-5 my-5 font-medium">{e.jobDescription}</div>
      <div className="flex justify-between">
        <p className="font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded-lg">
          {e.jobType}
        </p>
        <p className="text-gray-500 font-medium">Few seconds ago</p>
      </div>
    </div>
  );
};

export default JobCard;
