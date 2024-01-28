import { Link } from "react-router-dom";
import { footerLinks } from "../data";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="overflow-x-hidden">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>
      <div className="bg-[#1d4ed8] -my-0.5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between gap-10 w-full p-10">
            {footerLinks.map(({ id, title, links }) => (
              <div key={id} className="px-4">
                <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                  {title}
                </h2>
                <div className="flex flex-col gap-3">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-col lg:flex-row w-full">
            <div className="px-5 pt-6 pb-8 flex flex-col lg:flex-row flex-wrap lg:items-end lg:gap-5 w-full">
              <TextInput
                label="Subscribe to our Newsletter"
                type="text"
                placeholder="Enter email"
                styles="w-full lg:w-64 rounded border border-gray-400 focus:outline-none p-2 text-gray-600"
              />
              <CustomButton
                title="Subscribe"
                containerStyles={
                  "block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>
            <span className="inline-flex my-5 lg:my-0 mx-auto lg:mt-6 px-5 w-full gap-5 justify-center lg:justify-end lg:gap-0">
              <a className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaFacebookF />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaTwitter />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FiInstagram />
              </a>

              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            &copy; 2024 Job Finder —
            <a
              href="mailto:rajdeepmitra8@gmail.com"
              className="text-[#1199e7] ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rajdeepmitra8
            </a>
          </p>

          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
            Designed by Rajdeep Mitra
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
