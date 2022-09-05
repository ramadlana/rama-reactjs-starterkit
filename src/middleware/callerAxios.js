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
 * Axios custom callers (POST)
 * @param {string} url - your url to call
 * @param {{foo: any, bar: any}} data - data as object
 * @param {{headers: objects, others: objects}} configs - configs as object
 * @returns {Promise<{data:object, config: object, status: number, statusText: string}>} Return object
 */
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
