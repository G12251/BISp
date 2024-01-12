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
    const response = await axiosInstance.post(
      "http://localhost:5000/api/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Get current users

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/api/users/get-current-user"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

