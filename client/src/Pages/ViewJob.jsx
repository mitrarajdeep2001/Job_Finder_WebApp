import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import WorkIcon from '@mui/icons-material/Work';
import moment from "moment";
import noImgAvailable from "../assets/no-image-available.jpeg";

const ViewJob = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/post/getPost/${id}`
      );
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(post);
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto p-2 h-auto">
        {
          <div className="md:w-[80%] lg:w-[60%] p-5 lg:p-10 mx-auto shadow-md bg-white dark:bg-[#dbeafe] rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">
              <div className="w-1/2">
                <img
                  src={post.companyLogo || noImgAvailable}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-4xl mb-4">{post.jobTitle}</h2>
                <h3 className="text-xl lg:text-2xl mb-4 flex items-center gap-3">
                  {" "}
                  <WorkIcon fontSize="1rem" /> {post.companyName}
                </h3>
                <h4 className="text-md lg:text-lg flex items-center gap-3">
                  {" "}
                  <PlaceIcon />
                  {post.location}
                </h4>
              </div>
            </div>
            <div className="flex justify-between mb-5">
              <p className="px-2 py-1 bg-[#1d4ed8] text-white font-bold rounded-lg">
                {post.jobType}
              </p>
              <p className="px-2 py-1 bg-[#1d4ed8] text-white font-bold rounded-lg">
                Experience: {post.yearOfExp} yrs
              </p>
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-xl mb-2">Job Description</h2>
              <p>{post.jobDesc}</p>
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-xl mb-2">About Comapny</h2>
              <p>{post.aboutCompany}</p>
            </div>
            <div className="flex justify-between">
              <p className="px-2 py-1 bg-[#1d4ed8] text-white font-bold rounded-lg">
                Vacancy: {post.noOfVacancy}
              </p>
              <p className="px-2 py-1 bg-[#1d4ed8] text-white font-bold rounded-lg">
                {moment(post.createdAt).format("MMMM Do YYYY")}
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ViewJob;
