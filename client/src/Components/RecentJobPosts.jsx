import { jobList } from "../data";
import JobCard from "./JobCard";

const RecentJobPosts = () => {
  return (
    <div className="lg:w-1/3 mb-10 lg:my-10">
      <h2 className="dark:text-blue-600 mb-5 text-xl font-bold">Recent Job Posts</h2>
      {jobList.slice(0, 4).map((data, index) => (
        <div className="mb-5">
          <JobCard e={data} key={index} />
        </div>
      ))}
    </div>
  );
};

export default RecentJobPosts;
