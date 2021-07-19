import makeRequest from "../makeRequest";
import ContentInterfaceProps from "../../interfaces/ContentInterfaceProps";

const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";

const getContent = (language: string) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "GET",
    params: {
      language
    }
  });
};

const createContent = (data: ContentInterfaceProps) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "POST",
    body: data
  });
};

const updateContent = (data: any) => {
  return makeRequest({
    url: `${REACT_APP_API_URL}/api/content`,
    method: "PUT",
    body: data
  });
};

export { getContent, createContent, updateContent };
