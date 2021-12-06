import { combineReducers } from "redux";
import DogListsReducer from "./dogLists";
import DogImagesReducer from "./dogImages";

const rootReducer = combineReducers({
  DogListsReducer,
  DogImagesReducer,
});

export default rootReducer;
