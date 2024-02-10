import { useState } from "react";

const Login = ({ tab, setIsSignup }) => {
  const [jobSeekerFormData, setJobSeekerFormData] = useState({});
  const [companyFormData, setCompanyFormData] = useState({});
  const [toggleRememberMe, setToggleRememberMe] = useState({
    jobSeeker: false,
    company: false,
  });
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
  function handleToggleRememberMe(event) {
    setToggleRememberMe({
      ...toggleRememberMe,
      [event.target.name]: !toggleRememberMe[event.target.name],
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    console.log(jobSeekerFormData, toggleRememberMe);
  }
  return (
    <>
      {tab === 0 && (
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleJobSeekerFormData}
                value={jobSeekerFormData.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleJobSeekerFormData}
                value={jobSeekerFormData.password}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    name="jobSeeker"
                    value={toggleRememberMe.jobSeeker}
                    onClick={handleToggleRememberMe}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
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
              Signin
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-700 hover:underline dark:text-blue-500 uppercase text-[0.8rem]"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      )}
      {tab === 1 && (
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleCompanyFormData}
                value={companyFormData.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleCompanyFormData}
                value={companyFormData.password}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    name="company"
                    value={toggleRememberMe.company}
                    onClick={handleToggleRememberMe}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
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
              Signin
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-700 hover:underline dark:text-blue-500 uppercase text-[0.8rem]"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
