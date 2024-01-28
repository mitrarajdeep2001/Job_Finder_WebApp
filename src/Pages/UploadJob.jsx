import React from "react";
import JobPostForm from "../Components/JobPostForm";
import RecentJobPosts from "../Components/RecentJobPosts";

const UploadJob = () => {
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10">
        <JobPostForm />
        <RecentJobPosts/>
      </div>
    </div>
  );
};

export default UploadJob;
