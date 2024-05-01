import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import JobsContainer from "../Components/JobsContainer";
import { jobList } from "../data";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const [jobData, setJobData] = useState({
    currentPage: 0,
    posts: [],
    totalPages: 0,
    totalPosts: 0,
  });

  const token = useSelector((state) => state.token);
  const user = token && jwtDecode(token);
  useEffect(() => {
    getData();
  }, [jobData.currentPage]); // Trigger getData when currentPage changes

  const getData = async () => {
    const { data, status } = await axios.get(
      `http://localhost:3000/post/getPosts?page=${jobData.currentPage}`
    );
    if (status === 200) {
      setJobData({ ...jobData, ...data });
    }
  };

  const handlePageChange = (event, page) => {
    setJobData({ ...jobData, currentPage: page });
  };
console.log(user);
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <Hero jobTitles={jobData.posts} />
      <JobsContainer currentPage={jobData.currentPage} totalJobs={jobData.totalPosts} jobs={jobData.posts} />
      <div className="flex justify-center">
        <Pagination
          count={jobData.totalPages}
          page={jobData.currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Home;
