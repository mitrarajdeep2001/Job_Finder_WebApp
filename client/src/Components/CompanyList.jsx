import React, { useState } from "react";
import ListBox from "./Listbox";
import noImgAvailable from "../assets/no-image-available.jpeg";
import moment from "moment";

const CompanyList = ({ jobList }) => {
  const getUniqueCompanies = () => {
    const uniqueCompanies = new Set();
    jobList.forEach((job) => {
      uniqueCompanies.add(job.companyName);
    });
    return Array.from(uniqueCompanies);
  };

  const uniqueCompanies = getUniqueCompanies();
  const sortFilters = ["A-Z", "Z-A"];
  const [filter, setFilter] = useState(sortFilters[0]);

  const filteredCompanies = uniqueCompanies
    .filter((company) => {
      if (filter === "A-Z") {
        return company;
      } else if (filter === "Z-A") {
        return company;
      }
      return true; // Default case, no specific filter applied
    })
    .sort((a, b) => {
      if (filter === "A-Z") {
        return a.localeCompare(b); // Sort alphabetically A-Z
      } else if (filter === "Z-A") {
        return b.localeCompare(a); // Sort alphabetically Z-A
      }
    });

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-0">
        <p className="font-medium dark:text-white">
          Showing <span className="font-bold">{uniqueCompanies.length}</span>{" "}
          companies
        </p>
        <ListBox
          filter={filter}
          setFilter={setFilter}
          selectItems={sortFilters}
        />
      </div>
      <div className="py-5">
        {filteredCompanies.map((company, index) => {
          // Filter jobs for the current company
          const companyJobs = jobList.filter(
            (job) => job.companyName === company
          );
          return (
            <div key={index} className="pb-10">
              <h2 className="font-bold text-xl text-red-600 mb-3">{company}</h2>
              {companyJobs.map((job, jobIndex) => (
                <div
                  key={jobIndex}
                  className="flex justify-between items-center p-3 mb-5 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img
                        src={job.companyLogo || noImgAvailable}
                        alt="company_logo"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <p className="font-medium">{job.jobTitle}</p>
                  </div>
                  <div className="line-clamp-3 font-medium">{job.location}</div>
                  <div className="flex flex-col items-center">
                    <p className="font-medium text-slate-400">Posted on</p>
                    <p className="font-bold text-blue-700">
                      {moment(job.createdAt).format("MMM Do YY")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyList;
