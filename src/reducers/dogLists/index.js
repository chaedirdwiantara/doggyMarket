import { GET_DOG_LISTS } from "../../actions/DogDatasAction";

const initialState = {
  getDogsListLoading: false,
  getDogsListResult: false,
  getDogsListError: false,
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
    default:
      return state;
  }
}
