import axios from "axios";

/**
 * headers using string or JSON
 * data use object
 */
export async function callerAxiosGet(url) {
  try {
    const resp = await axios.get(`${url}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    });

    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    return error;
  }
}

export async function callerAxiosPost(url, data, headers) {
  try {
    const resp = await axios.post(`${url}`, `${data}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    });

    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    return error;
  }
}
