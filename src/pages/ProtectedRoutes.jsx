import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import { getAuth } from "../middleware/getAuth";

function ProtectedRoutes() {
  const [isLoading, setIsloading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [errObj, setErrObj] = useState();
  //   Login check before render
  useEffect(() => {
    async function loginCheck() {
      try {
        const login_check = await getAuth();
        if (login_check.status === 200) {
          setIsloading(false);
          setIsAuth(true);
        }
        if (login_check.status !== 200) {
          setErrObj(login_check);
          setIsloading(false);
          setIsAuth(false);
        }
      } catch (error) {
        setIsloading(false);
        setIsAuth(false);
      }
    }
    // call login check
    loginCheck();
  }, []);

  //   render loading page
  if (isLoading)
    return (
      <LoadingPage
        message={"Please wait, Loading your requesting page"}
      ></LoadingPage>
    );
  // if not loading and is authenticated Render child component
  if (!isLoading && isAuth) return <Outlet></Outlet>;
  //   if not loading and no authenticated render error page with error message from login check
  if (!isLoading && !isAuth) return <ErrorPage error={errObj}></ErrorPage>;
  //   render error page as fallback
  return <ErrorPage error={"Something error"}></ErrorPage>;
}

export default ProtectedRoutes;
