import React, { useState } from "react";
import ListBox2 from "./Listbox2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { notifyError, notifySuccess } from "../Toast";
import { useNavigate } from "react-router-dom";
import UploadImg from "./Upload";

const JobPostForm = () => {
  const jobType = ["Select-job-type", "Full-Time", "Part-Time", "Contract"];
  const user_id = useSelector((state) => state.user._id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data, status } = await axios.post(
        `http://localhost:3000/post/create`,
        { ...formData, user_id }
      );
      console.log(data, status);
      if (status === 201) {
        setFormData({
          ...formData,
          jobTitle: "",
          jobType: "",
          jobDesc: "",
          jobResp: "",
          salary: "",
          location: "",
          noOfVacancy: "",
          yearOfExp: "",
        });
        notifySuccess("Job posted successfully");
        navigate("/my-posts");
      }
    } catch (error) {
      console.log(error);
      notifyError(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-[#ffffff] dark:bg-blue-100 p-5 md:p-10 rounded-md my-10 w-full lg:max-h-[800px] lg:w-2/3"
      data-aos="zoom-in"
    >
      <h2 className="text-slate-500 text-3xl font-medium mb-5">Job Post</h2>
      <div className="py-2">
        <UploadImg formData={formData} setFormData={setFormData} />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          id="floating_title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Job Title (Eg. Software Engineer)
        </label>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative w-full mb-5 group">
          <ListBox2
            formData={formData}
            setFormData={setFormData}
            selectItems={jobType}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            id="floating_salary"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_salary"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Salary (in INR)
          </label>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="noOfVacancy"
            value={formData.noOfVacancy}
            onChange={handleChange}
            id="floating_vacancies"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_vacancies"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            No of Vacancies (Eg. 3)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="yearOfExp"
            value={formData.yearOfExp}
            onChange={handleChange}
            id="floating_exp"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_exp"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Year of Experience (Eg. 5)
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          id="floating_location"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_location"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Job Location
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="jobDesc"
          value={formData.jobDesc}
          onChange={handleChange}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
          placeholder="Job Description"
          required
        ></textarea>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="jobResp"
          value={formData.jobResp}
          onChange={handleChange}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
          placeholder="Core Responsibilities"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full lg:w-40 text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default JobPostForm;
