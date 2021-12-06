import axios from "axios";
import { API_DOG_LIST, API_DOG_PICTURES, API_TIMEOUT } from "../utils/constant";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_DOGS_IMAGE = "GET_DOGS_IMAGE";
export const GET_DOG_LISTS = "GET_DOG_LISTS";

export const getDogImages = () => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DOGS_IMAGE);

    fetch(API_DOG_PICTURES)
      .then((response) => response.json())
      .then((json) => {
        // BERHASIL
        dispatchSuccess(dispatch, GET_DOGS_IMAGE, json.message);
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

    fetch(API_DOG_LIST)
      .then((response) => response.json())
      .then((json) => {
        // BERHASIL
        dispatchSuccess(dispatch, GET_DOG_LISTS, json.message);
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, GET_DOG_LISTS, error);

        alert(error);
      });
  };
};
