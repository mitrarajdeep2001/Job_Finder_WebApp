import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import JobsContainer from "./JobsContainer";
import Pagination from "@mui/material/Pagination";

const MyPosts = () => {
  const [jobData, setJobData] = useState({
    currentPage: 0,
    posts: [],
    totalPages: 0,
    totalPosts: 0,
  });
  const user_id = useSelector((state) => state.user._id);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, status } = await axios.get(
      `http://localhost:3000/post/getPosts/${user_id}`
    );
    if (status === 200) {
      // console.log(data);
      setJobData({ ...jobData, ...data });
    }
  };
  console.log(jobData);
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto p-5 h-auto">
        <h2 className="text-3xl font-bold ml-[14.4rem] dark:text-white">
          My Posts
        </h2>
        <JobsContainer jobs={jobData.posts} />
        <div className="flex justify-center">
          <Pagination count={jobData.totalPages} variant="outlined" shape="rounded" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
