import { GET_DOG_LISTS, GET_DOG_SUB_LISTS } from "../../actions/DogDatasAction";

const initialState = {
  getDogsListLoading: false,
  getDogsListResult: false,
  getDogsListError: false,

  getDogsSubListLoading: false,
  getDogsSubListResult: false,
  getDogsSubListError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOG_LISTS:
      return {
        ...state,
        getDogsListLoading: action.payload.loading,
        getDogsListResult: action.payload.data,
        getDogsListError: action.payload.errorMessage,
      };

    case GET_DOG_SUB_LISTS:
      return {
        ...state,
        getDogsSubListLoading: action.payload.loading,
        getDogsSubListResult: action.payload.data,
        getDogsSubListError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
