import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import JobsContainer from "./JobsContainer";

const MyPosts = () => {
  const [data, setData] = useState([]);
  const user_id = useSelector((state) => state.user._id);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, status } = await axios.get(
      `http://localhost:3000/post/getPosts/${user_id}`
    );
    if (status === 200) {
      console.log(data);
      setData(data);
    }
  };
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto p-5 h-auto">
        <h2 className="text-3xl font-bold ml-[14.4rem]">My Posts</h2>
        <JobsContainer jobs={data} />
      </div>
    </div>
  );
};

export default MyPosts;
