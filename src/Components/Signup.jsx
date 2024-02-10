import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/config";
import { useDispatch } from "react-redux";

const Signup = ({ tab, setIsSignup }) => {
  const [jobSeekerFormData, setJobSeekerFormData] = useState({});
  const [companyFormData, setCompanyFormData] = useState({});
  const dispatch = useDispatch();
  function handleJobSeekerFormData(event) {
    setJobSeekerFormData({
      ...jobSeekerFormData,
      [event.target.name]: event.target.value,
    });
  }
  function handleCompanyFormData(event) {
    setCompanyFormData({
      ...companyFormData,
      [event.target.name]: event.target.value,
    });
  }
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  function handleSignup(event) {
    event.preventDefault();
    if (event.target.name === "jobSeekerSignup") {
      if (jobSeekerFormData.password !== jobSeekerFormData.confirmPassword) {
        setJobSeekerFormData({
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      createUserWithEmailAndPassword(
        jobSeekerFormData.email,
        jobSeekerFormData.password
      );
      setJobSeekerFormData({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      });
      // setIsSignup(false);
    } else {
      if (companyFormData.password !== companyFormData.confirmPassword) {
        setCompanyFormData({
          email: "",
          companyName: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      console.log("test-company");
      createUserWithEmailAndPassword(
        companyFormData.email,
        companyFormData.password
      );
      setCompanyFormData({
        email: "",
        companyName: "",
        password: "",
        confirmPassword: "",
      });
      // setIsSignup(false);
    }
  }

  useEffect(() => {
    if (user) {
      console.log(user);
      dispatch(setAuthModal(false));
    } else {
      console.log(error);
    }
  }, [user, error]);
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center py-5">
  //       <span className="loader"></span>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* Job seeker form data */}
      {tab === 0 && (
        <div className="p-4 md:p-5">
          <form
            className="space-y-4"
            onSubmit={handleSignup}
            name="jobSeekerSignup"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                onChange={handleJobSeekerFormData}
                value={jobSeekerFormData.email}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Rajdeep"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={jobSeekerFormData.firstName}
                  onChange={handleJobSeekerFormData}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Mitra"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={jobSeekerFormData.lastName}
                  onChange={handleJobSeekerFormData}
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={jobSeekerFormData.password}
                  onChange={handleJobSeekerFormData}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={jobSeekerFormData.confirmPassword}
                  onChange={handleJobSeekerFormData}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? <div className="absolute top-[50%] left-[50%] scale-x-[-50%] scale-y-[-50%]"><span className="loader"></span></div> : "Signup"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-700 hover:underline dark:text-blue-500 uppercase text-[0.8rem]"
              >
                Signin
              </button>
            </div>
          </form>
        </div>
      )}
      {tab === 1 && (
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                value={companyFormData.email}
                onChange={handleCompanyFormData}
                required
              />
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="XYZ Ltd."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={companyFormData.companyName}
                onChange={handleCompanyFormData}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={companyFormData.password}
                  onChange={handleCompanyFormData}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={companyFormData.confirmPassword}
                  onChange={handleCompanyFormData}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Signup
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-700 hover:underline dark:text-blue-500 uppercase text-[0.8rem]"
              >
                Signin
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
