import axios from "axios";
import swal from "sweetalert";
import { API } from "../global";
export const getAlldress = () => async (dispatch) => {
  dispatch({ type: "GET_DRESSES_REQUEST" });
  try {
    const response = await axios.get(`${API}/api/dresses/getAlldress`);
    // console.log(response.data);
    dispatch({ type: "GET_DRESSES_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_DRESSES_FAIL", payload: err });
  }
};

export const adddress = (dress) => async (dispatch) => {
  dispatch({ type: "ADD_DRESSES_REQUEST" });
  try {
    await axios.post(`${API}/api/dresses/adddress`, { dress });
    dispatch({ type: "ADD_DRESSES_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_DRESSES_FAIL", payload: err });
  }
};

export const getdressById = (dressId) => async (dispatch) => {
  dispatch({ type: "GET_DRESSESBYID_REQUEST" });
  try {
    const response = await axios.post(`${API}/api/dresses/getdressbyid`, { dressId });
    dispatch({ type: "GET_DRESSESBYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_DRESSESBYID_FAIL", payload: err });
  }
};
export const updatedress = (updateddress) => async (dispatch) => {
  dispatch({ type: "UPDATE_DRESSESBYID_REQUEST" });
  try {
    const response = await axios.post(`${API}/api/dresses/updatedress`, {
      updateddress,
    });
    dispatch({ type: "UPDATE_DRESSESBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/dresslist";
  } catch (err) {
    dispatch({ type: "UPDATE_DRESSESBYID_FAIL", payload: err });
  }
};

export const deletedress = (dressId) => async (dispatch) => {
  try {
    await axios.post(`${API}/api/dresses/deletedress`, { dressId });
    swal("Dress Deleted Succss!", "success");
    window.location.href = "/admin/dresslist";
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing Dress");
  }
};

export const filterdress = (searchkey, category) => async (dispatch) => {
  let filterddress;
  dispatch({ type: "GET_DRESSES_REQUEST" });
  try {
    const res = await axios.get(`${API}/api/dresses/getAlldress`);
    filterddress = res.data.filter((dress) =>
      dress.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterddress = res.data.filter(
        (dress) => dress.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_DRESSES_SUCCESS", payload: filterddress });
  } catch (error) {
    dispatch({ type: "GET_DRESSES_FAIL", payload: error });
  }
};
