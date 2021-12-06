import axios from "axios";
import { API_DOG_LIST, API_DOG_PICTURES, API_TIMEOUT } from "../utils/constant";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_DOGS_IMAGE = "GET_DOGS_IMAGE";
export const GET_DOG_LISTS = "GET_DOG_LISTS";

export const getDogImages = () => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DOGS_IMAGE);

    axios({
      method: "get",
      url: API_DOG_PICTURES,
      timeout: API_TIMEOUT,
    })
      .then((response) => {
        if (response.status !== 200) {
          // ERROR

          dispatchError(dispatch, GET_DOGS_IMAGE, response);
        } else {
          // BERHASIL
          dispatchSuccess(
            dispatch,
            GET_DOGS_IMAGE,
            response.data ? response.data.message : [],
            console.log(response, "response dog image")
          );
        }
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, GET_DOGS_IMAGE, error);

        alert(error);
      });
  };
};

export const getDogLists = () => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DOG_LISTS);

    axios({
      method: "get",
      url: API_DOG_LIST,
      timeout: API_TIMEOUT,
    })
      .then((response) => {
        if (response.status !== 200) {
          // ERROR

          dispatchError(dispatch, GET_DOG_LISTS, response);
        } else {
          // BERHASIL
          dispatchSuccess(
            dispatch,
            GET_DOG_LISTS,
            response.data ? response.data.message : [],
            console.log(response, "response dog list")
          );
        }
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, GET_DOG_LISTS, error);

        alert(error);
      });
  };
};
