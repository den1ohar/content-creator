import axios, { AxiosPromise } from "axios";

const makeRequest = ({
  url,
  method,
  params,
  data,
  headers
}: any): AxiosPromise => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  });
};

export default makeRequest;
