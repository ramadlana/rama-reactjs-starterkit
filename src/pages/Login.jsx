import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { getAuth, signIn } from "../middleware/getAuth";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  // check if user already login
  useEffect(() => {
    async function loginCheck() {
      try {
        const isLogin = await getAuth();
        if (isLogin.status === 200) {
          setIsloading(false);
          setIsAuth(true);
        }
        if (isLogin.status !== 200) {
          setIsloading(false);
          setIsAuth(false);
        }

        if (isLogin.status === 500) {
          setIsloading(false);
          setIsAuth(false);
        }
      } catch (error) {
        setIsloading(false);
        setIsAuth(false);
      }
    }
    loginCheck();
  }, []);
  const [allinput, setallInput] = useState({
    username: "test",
    password: "test12345",
  });

  function handleInputOnChange(event) {
    let input_copy = { ...allinput };
    input_copy[`${event.target.id}`] = event.target.value;
    setallInput(input_copy);
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const check = await signIn(
        `${process.env.REACT_APP_BACKEND_SERVER}/sign/in`,
        allinput,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (check.status === 200) {
        toast.success(`${check.data.message}`);
        localStorage.setItem("x-access-token", check.data.access_token);
        navigate("/");
      }
      if (check.status === 500) {
        return toast.error(
          `${
            check.data.message
              ? check.data.message
              : "Error when connecting to database"
          }`
        );
      }
      if (check.status !== 200) {
        toast.error(`${check.data ? check.data.message : "unknown error"}`);
      }
    } catch (err) {}
  }

  //   if page is loading
  if (isLoading)
    return (
      <LoadingPage
        message={"Please wait checking your loggin status"}
      ></LoadingPage>
    );

  // if auth redirect to /
  if (!isLoading && isAuth) return <Navigate to={"/"} replace></Navigate>;
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Login
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleLogin}>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>

                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    username
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="username"
                    value={allinput.username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your username"
                    required
                    onChange={handleInputOnChange}
                  />
                </div>
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
                    value={allinput.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleInputOnChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
