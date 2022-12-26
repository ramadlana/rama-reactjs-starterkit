import { callerAxiosGet, callerAxiosPost } from "./callerAxios";

export async function getAuth() {
  try {
    const req = await callerAxiosGet(
      `${process.env.REACT_APP_BACKEND_SERVER}/getauth`,
      {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("x-access-token"),
        // withCredentials: true,
      }
    );
    return req;
  } catch (error) {
    return false;
  }
}

/**
 sign in middleware (POST)
 * @param {string} url - your url to call
 * @param {{username: string, password: string}} data - data as object
 * @param {{headers: objects, others: objects}} configs - configs as object
 * @returns {Promise<{data:object, config: object, status: number, statusText: string}>} Return object
 */
export async function signIn(url, data, configs) {
  try {
    const req = await callerAxiosPost(url, data, configs);
    return req;
  } catch (error) {
    return false;
  }
}
