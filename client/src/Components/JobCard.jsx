import { IoLocationOutline } from "react-icons/io5";
import noImgAvailable from "../assets/no-image-available.jpeg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const JobCard = ({ e }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/view-job/${e._id}`)}
      className=" bg-[#ffffff] dark:bg-blue-100 p-5 md:p-10 rounded-lg shadow-lg transform hover:scale-110 relative hover:z-30 hover:shadow-xl transition ease-out delay-150 cursor-pointer"
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
          <p className="text-xl font-bold">{e.jobTitle}</p>
          <p className="text-red-500 font-bold">{e.companyName}</p>
          <p className="font-medium flex items-center gap-2">
            <IoLocationOutline />
            {e.location}
          </p>
        </div>
      </div>
      <div className="line-clamp-5 my-5 font-medium">{e.jobDesc}</div>
      <div className="flex justify-between">
        <p className="font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded-lg">
          {e.jobType}
        </p>
        <p className="font-bold text-red-800 bg-red-200 px-2 py-1 rounded-lg">
          Exp: {e.yearOfExp}
        </p>
        <p className="font-bold text-gray-800 bg-gray-300 px-2 py-1 rounded-lg">
          {moment(e.createdAt).startOf("hour").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
