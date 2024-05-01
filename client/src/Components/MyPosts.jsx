import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobsContainer from "./JobsContainer";
import Pagination from "@mui/material/Pagination";
import { jwtDecode } from "jwt-decode";

const MyPosts = () => {
  const [jobData, setJobData] = useState({
    currentPage: 0,
    posts: [],
    totalPages: 0,
    totalPosts: 0,
  });

  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
      getData(decoded.userId);
    }
  }, [jobData.currentPage]); // Trigger getData when currentPage changes

  const getData = async (userId) => {
    const { data, status } = await axios.get(
      `http://localhost:3000/post/getPosts/${userId}?page=${jobData.currentPage}`
    );
    if (status === 200) {
      setJobData({ ...jobData, ...data });
    }
  };

  const handlePageChange = (event, page) => {
    setJobData({ ...jobData, currentPage: page });
  };

  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto p-5 h-auto">
        <h2 className="text-3xl font-bold ml-[14.4rem] dark:text-white">
          My Posts
        </h2>
        <JobsContainer
          currentPage={jobData.currentPage}
          totalJobs={jobData.totalPosts}
          jobs={jobData.posts}
        />
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
    </div>
  );
};

export default MyPosts;
