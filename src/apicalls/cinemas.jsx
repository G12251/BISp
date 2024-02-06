import { axiosInstance } from ".";

// Add a new cinema
export const AddCinema = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/add-cinema",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all cinemas
export const GetAllCinemas = async () => {
  try {
    const response = await axiosInstance.get("http://localhost:5000/api/cinemas/get-all-cinemas");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all cinemas by owner
export const GetAllCinemasByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/get-all-cinemas-by-owner",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// update cinema
export const UpdateCinema = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/update-cinema",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// delete cinema
export const DeleteCinema = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/delete-cinema",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// add show
export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/add-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all shows
export const GetAllShowsByCinema = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/get-all-shows-by-cinema",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// delete show
export const DeleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/delete-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all cinemas for a movie
export const GetAllCinemasByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/get-all-cinemas-by-movie",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};


// get show by id
export const GetShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/cinemas/get-show-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}