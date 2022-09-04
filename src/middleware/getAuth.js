import { callerAxiosGet } from "./callerAxios";

export async function getAuth() {
  try {
    const req = await callerAxiosGet(
      `${process.env.REACT_APP_BACKEND_SERVER}/dashboard`,
      {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("x-access-token"),
      }
    );
    return req;
  } catch (error) {
    return false;
  }
}
