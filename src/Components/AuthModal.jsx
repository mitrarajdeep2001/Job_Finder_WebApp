import React, { useState } from "react";
import { useImperativeDisableScroll } from "../CustomHooks/useImperativeDisableScroll";
import { setAuthModal } from "../Redux-Toolkit/Slices/auth";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";

const AuthModal = () => {
  useImperativeDisableScroll({ element: document.body, disabled: true });
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const handleTab = () => {
    if (tab === 0) {
      setTab(1);
    } else {
      setTab(0);
    }
  };
  const location = useLocation(); //To get the current location
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="overlay">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {!isSignup ? "Signin to your account" : "Create Account"}
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => {
                dispatch(setAuthModal(false));
                navigate(location);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div1 className="flex">
            <button
              className={`py-2 m-2 border dark:border-blue-400 rounded-md cursor-pointer dark:text-white ${
                tab === 0 &&
                "bg-blue-400 text-blue-900 dark:text-blue-900 font-semibold"
              } w-1/2 flex justify-center`}
              onClick={handleTab}
            >
              Job Seeker Account
            </button>
            <button
              className={`py-2 m-2 border dark:border-blue-400 rounded-md cursor-pointer dark:text-white ${
                tab === 1 &&
                "bg-blue-400 text-blue-900 dark:text-blue-900 font-semibold"
              } w-1/2 flex justify-center`}
              onClick={handleTab}
            >
              Company Account
            </button>
          </div1>
          {!isSignup ? (
            <Login tab={tab} setIsSignup={setIsSignup} />
          ) : (
            <Signup tab={tab} setIsSignup={setIsSignup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
