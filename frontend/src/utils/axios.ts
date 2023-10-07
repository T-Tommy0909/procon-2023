import axios, { AxiosResponse } from "axios";

export const requestGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios.get<T>(url);
};

export const requestPost = async <T, U = undefined>(
  url: string,
  payload: U
): Promise<AxiosResponse<T>> => {
  return axios.post<T>(url, payload);
};
