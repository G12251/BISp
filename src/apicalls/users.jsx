import { axiosInstance } from "./index";

// Register a new user
export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Login a user
export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("http://localhost:5000/api/users/login", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
