import axios, { AxiosRequestConfig, Method } from 'axios';

const apiUrl: string = import.meta.env.VITE_API_URL;

const reqConfig: AxiosRequestConfig = {
  headers: {},
};

/**
 * Generic request handler
 * @param {string} path Request path
 * @param {Method} method Request method (get, post, delete, put, etc.)
 * @param {object} data Form data
 * @param {boolean} auth Whether authentication is required
 * @param {object} params Request parameters
 * @param {object} headers Request headers
 * @return {Promise<any>}
 */
export const request = async (
  path: string,
  method: Method,
  data: object = {},
  params: object = {},
  headers: object = {}
): Promise<any> => {
  

  reqConfig.params = params;
  reqConfig.headers = { ...reqConfig.headers, ...headers };

  try {
    if (['get', 'delete'].includes(method)) {
      const response = await axios[method](`${apiUrl}${path}`, reqConfig);
      return response.data;
    } else {
      const response = await axios[method](`${apiUrl}${path}`, data, reqConfig);
      return response.data;
    }
  } catch (err: any) {
    throw {
      ...err.response.data,
    };
  }
};
