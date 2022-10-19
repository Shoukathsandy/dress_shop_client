export const getAlldressReducer = (state = { dresss: [] }, action) => {
  switch (action.type) {
    case "GET_DRESSES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DRESSES_SUCCESS":
      return {
        dresss: action.payload,
        loading: false,
      };
    case "GET_DRESSES_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const adddressReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DRESSES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_DRESSES_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_DRESSES_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getdressByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DRESSESsBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DRESSESBYID_SUCCESS":
      return {
        dress: action.payload,
        loading: false,
      };
    case "GET_DRESSESBYID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const updatedressByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_DRESSESBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_DRESSESBYID_SUCCESS":
      return {
        updatesuccess: true,
        updateloading: false,
      };
    case "UPDATE_DRESSESBYID_FAIL":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
