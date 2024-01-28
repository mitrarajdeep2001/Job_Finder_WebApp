import React from "react";
import CompanyList from "../Components/CompanyList";
import Hero from "../Components/Hero"
import Pagination from "../Components/Pagination";

const Company = () => {
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <Hero />
      <CompanyList />
      <Pagination />
    </div>
  );
};

export default Company;
