import { axiosInstance } from "./axiosInstance";

// add a new thing
export const AddThing = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/things/add-thing", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all things
export const GetThings = async (filters) => {
  try {
    const response = await axiosInstance.post(
      "/api/things/get-things",
      filters
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// edit a thing
export const EditThing = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/things/edit-thing/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get a thing by id
export const GetThingById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/things/get-thing-by-id/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// delete a thing
export const DeleteThing = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/api/things/delete-thing/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// upload thing image
export const UploadThingImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/things/upload-image-to-thing",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// update thing status
export const UpdateThingStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `/api/things/update-thing-status/${id}`,
      { status }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// // place a new bid
// export const PlaceNewBid = async (payload) => {
//   try {
//     const response = await axiosInstance.post(
//       "/api/bids/place-new-bid",
//       payload
//     );
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// };

// // get all bids
// export const GetAllBids = async (filters) => {
//   try {
//     const response = await axiosInstance.post(
//       "/api/bids/get-all-bids",
//       filters
//     );
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// };
