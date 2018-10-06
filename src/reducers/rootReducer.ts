import { combineReducers, Reducer, AnyAction } from "redux";
import aboutCounter from "./aboutReducer";
import homeCounter from "./homeReducer";
import userInfo from "./userReducer";

const rootReducer: Reducer<{}, AnyAction> = combineReducers({
  homeCounter,
  aboutCounter,
  userInfo
});

export default rootReducer;
