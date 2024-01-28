import React from "react";
import { jobList } from "../data";
import ListBox from "./Listbox";
import noImgAvailable from "../assets/no-image-available.jpeg";

const CompanyList = () => {
  const getUniqueCompanies = (job) => {
    // Create an object to store unique company names array
    const uniqueCompanies = {};

    // Iterate through the array(jobList) and store array of objects with unique company names
    job.forEach((obj) => {
      const companyName = obj.company;

      // If the company name is not in the uniqueCompanies object, add it
      if (!uniqueCompanies[companyName]) {
        uniqueCompanies[companyName] = [];
      }
    });
    job.forEach((obj) => {
      const companyName = obj.company;

      // If the company name is in the uniqueCompanies object, add job obj to the corresponding company name
      if (uniqueCompanies[companyName]) {
        uniqueCompanies[companyName].push(obj);
      }
    });
    return uniqueCompanies;
  };
  const uniqueCompaniesList = Object.entries(getUniqueCompanies(jobList));
  console.log(uniqueCompaniesList);
  const sortFilters = ["Newest", "Oldest", "A-Z", "Z-A"];
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-0">
        <p className="font-medium dark:text-white">
          Showing <span className="font-bold">1</span> to{" "}
          <span className="font-bold">9</span> of{" "}
          <span className="font-bold">{jobList.length}</span> jobs
        </p>
        <ListBox selectItems={sortFilters}/>
      </div>
      <div className="my-5">
        {uniqueCompaniesList.map((e, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-3 p-3 bg-[#ffffff] dark:bg-blue-100 shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full flex items-center">
                <img
                  src={e[1][0].companyLogo || noImgAvailable}
                  alt="company_logo"
                  className="rounded-full object-cover"
                />
              </div>
              <p className="font-medium">{e[0]}</p>
            </div>
            <div className="line-clamp-3 font-medium">
              {e[1].map((obj) => (
                <p>
                  {obj.location}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-blue-700">{e[1].length}</p>
              <p className="font-medium text-slate-400">Jobs Posted</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
