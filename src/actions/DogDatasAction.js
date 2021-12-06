import axios from "axios";
import {
  API_DOG_LIST,
  API_DOG_PICTURES,
  API_DOG_SUB_LIST,
} from "../utils/constant";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_DOGS_IMAGE = "GET_DOGS_IMAGE";
export const GET_DOG_LISTS = "GET_DOG_LISTS";
export const GET_DOG_SUB_LISTS = "GET_DOG_SUB_LISTS";

export const getDogImages = (data) => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DOGS_IMAGE);
    axios({
      method: "get",
      url: `${API_DOG_PICTURES}${data}/images`,
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
            response.data ? response.data.message : []
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

export const getDogSubLists = (data) => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, GET_DOG_SUB_LISTS);

    axios({
      method: "get",
      url: `${API_DOG_SUB_LIST}${data}/list`,
    })
      .then((response) => {
        if (response.status !== 200) {
          // ERROR

          dispatchError(dispatch, GET_DOG_SUB_LISTS, response);
        } else {
          // BERHASIL
          dispatchSuccess(
            dispatch,
            GET_DOG_SUB_LISTS,
            response.data ? response.data.message : []
          );
        }
      })

      .catch((error) => {
        // ERROR
        dispatchError(dispatch, GET_DOG_SUB_LISTS, error);

        alert(error);
      });
  };
};
