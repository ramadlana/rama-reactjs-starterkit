import axios from "axios";
axios.defaults.withCredentials = true;

// Get
export async function callerAxiosGet(url, headers) {
  try {
    const resp = await axios.get(`${url}`, {
      headers: headers,
    });

    if (resp) {
      return resp;
    }
  } catch (error) {
    return error.response;
  }
}

// Put
export async function callerAxiosPut(url, data, configs) {
  try {
    const resp = await axios.put(`${url}`, data, configs);

    if (resp) {
      return resp;
    }
  } catch (error) {
    return error.response;
  }
}

// Post
export async function callerAxiosPost(url, data, configs) {
  try {
    const resp = await axios.post(`${url}`, data, configs);

    if (resp) {
      return resp;
    }
  } catch (error) {
    return error.response;
  }
}
