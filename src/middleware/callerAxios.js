import axios from "axios";

/**
 * Custom Axios Get
 * @param {string} url - your url to call
 * @param {string} headers - headers as object
 * @returns {Promise} Return promise object {data:<object>, config:<object>, status:<number>, statusText:<string>}
 */
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

/**
 * @param {string} url - your url to call
 * @param {string} headers - headers as object
 * @param {Object} data:Object - data as object
 * @returns {Promise} Object - data:Object, config:object, status:number, statusText:string
 */
export async function callerAxiosPost(url, data, headers) {
  try {
    const resp = await axios.post(`${url}`, `${data}`, {
      headers: headers,
    });

    if (resp) {
      return resp;
    }
  } catch (error) {
    return error.response;
  }
}
