import { GET_DOGS_IMAGE } from "../../actions/DogDatasAction";

const initialState = {
  getDogsImageLoading: false,
  getDogsImageResult: false,
  getDogsImageError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOGS_IMAGE:
      return {
        ...state,
        getDogsImageLoading: action.payload.loading,
        getDogsImageResult: action.payload.data,
        getDogsImageError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
