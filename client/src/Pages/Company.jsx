import React, { useEffect, useState } from "react";
import CompanyList from "../Components/CompanyList";
import Hero from "../Components/Hero"
import Pagination from "../Components/Pagination";
import axios from "axios";

const Company = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData();
  }, []); // Trigger getData when currentPage changes

  const getData = async () => {
    const { data, status } = await axios.get(
      `${import.meta.env.VITE_BACKEND_API}/post/getPosts?limit=10000`
    );
    if (status === 200) {
      setData(data.posts);
    }
  };
  console.log(data);
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      {/* <Hero /> */}
      <CompanyList jobList={data} />
      {/* <Pagination /> */}
    </div>
  );
};

export default Company;
