import makeRequest from "../makeRequest";
import ContentInterfaceProps from "../../interfaces/ContentInterfaceProps";
import axios, { AxiosPromise } from "axios";

const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";

const getContent = (language: string, page: string) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "GET",
    params: {
      language,
      page
    }
  });
};

const createContent = (
  data: ContentInterfaceProps,
  language: string,
  page: string
) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "POST",
    data,
    params: { language, page }
  });
};

const updateContent = (data: any, language: string, page: string) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "PUT",
    data,
    params: { language, page }
  });
};

const createImage = (file: any, page: string): AxiosPromise => {
  var formData = new FormData();
  formData.append("image", file[0]);

  return axios.post(`${REACT_APP_API_URL}/api/content/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: page
  });
};

export { getContent, createContent, updateContent, createImage };
