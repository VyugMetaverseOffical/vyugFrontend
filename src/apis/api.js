import axios from "axios";
import { API_URL } from "./url";

export const baseURL = API_URL + "api/";

const createApiInstance = () => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

const protectedApiGet = async (path, params) => {
  try {
    const api = createApiInstance();
    const resp = await api.get(path, { params });
    return resp.data;
  } catch (error) {
    console.error("Error in protected GET request:", error);
    throw error;
  }
};

const protectedApiPost = async (path, data) => {
  try {
    const api = createApiInstance();
    const resp = await api.post(path, data);
    return resp.data;
  } catch (error) {
    console.error("Error in protected POST request:", error);
    throw error;
  }
};

const protectedApiGetAdmin = async (path, params) => {
  try {
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    });
    const resp = await api.get(path, { params });
    return resp.data;
  } catch (error) {
    console.error("Error in protected GET request:", error);
    throw error;
  }
};

const protectedApiPostAdmin = async (path, data) => {
  try {
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin_token"),
      },
    });
    const resp = await api.post(path, data);
    return resp.data;
  } catch (error) {
    console.error("Error in protected POST request:", error);
    throw error;
  }
};

const protectedApiGetYoutubeAdmin = async (path, params) => {
  try {
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("youtubeAdmin_token"),
      },
    });
    const resp = await api.get(path, { params });
    return resp.data;
  } catch (error) {
    console.error("Error in protected GET request:", error);
    throw error;
  }
};

const protectedApiPostYoutubeAdmin = async (path, data) => {
  try {
    const api = axios.create({
      baseURL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("youtubeAdmin_token"),
      },
    });
    const resp = await api.post(path, data);
    return resp.data;
  } catch (error) {
    console.error("Error in protected POST request:", error);
    throw error;
  }
};

export { protectedApiGet, protectedApiPost, protectedApiGetAdmin, protectedApiPostAdmin,protectedApiGetYoutubeAdmin,protectedApiPostYoutubeAdmin };
