import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

function ProtectedRoutes() {
  const [isLoading, setIsloading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [errObj, setErrObj] = useState();
  useEffect(() => {
    async function handleLogin() {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER}/dashboard`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": localStorage.getItem("x-access-token"),
            },
          }
        );

        if (resp.data) {
          setIsloading(false);
          setIsAuth(true);
        }
      } catch (error) {
        setErrObj(error.response);
        setIsloading(false);
        setIsAuth(false);
      }
    }
    handleLogin();
  }, []);

  if (isLoading)
    return (
      <LoadingPage
        message={"Please wait, Loading your requesting page"}
      ></LoadingPage>
    );

  if (!isLoading && isAuth) return <Outlet></Outlet>;
  if (!isLoading && !isAuth) return <ErrorPage error={errObj}></ErrorPage>;
  //   if (!isLoading && !isAuth) return <Navigate to={"/login"} replace></Navigate>;
}

export default ProtectedRoutes;
