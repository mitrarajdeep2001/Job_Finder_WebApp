import { IoLocationOutline } from "react-icons/io5";
import noImgAvailable from "../assets/no-image-available.jpeg";
import moment from "moment";

const JobCard = ({ e }) => {
  // Function to calculate how long ago a post was made
  const calculateTimeAgo = (postTimestamp) => {
    const currentTimestamp = moment(); // Current timestamp
    const postTime = moment(postTimestamp); // Post timestamp
    const duration = moment.duration(currentTimestamp.diff(postTime));

    // Calculate the difference in days, hours, or minutes
    const days = duration.asDays();
    const hours = duration.asHours();
    const minutes = duration.asMinutes();

    // Determine the appropriate time unit based on the difference
    if (days >= 1) {
      return `${Math.floor(days)} day${Math.floor(days) !== 1 ? "s" : ""} ago`;
    } else if (hours >= 1) {
      return `${Math.floor(hours)} hour${
        Math.floor(hours) !== 1 ? "s" : ""
      } ago`;
    } else {
      return `${Math.floor(minutes)} minute${
        Math.floor(minutes) !== 1 ? "s" : ""
      } ago`;
    }
  };

  // Example usage
  // const postTimestamp = '2024-04-03T16:27:38.089+00:00'; // Replace with your post timestamp
  // const timeAgo = calculateTimeAgo(postTimestamp);
  // console.log(timeAgo); // Output: "3 days ago" (or the appropriate time ago message)

  return (
    <div
      key={e.id}
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
          <p className="text-lg font-bold">{e.jobTitle}</p>
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
        <p className="text-gray-500 font-medium">
          {calculateTimeAgo(e.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
