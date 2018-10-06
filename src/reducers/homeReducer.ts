import initialState from "../store/initialState";
import { Action } from "redux";

export default function homeReducer(
  homeCounter: number = initialState.homeCounter,
  action: Action
) {
  switch (action.type) {
    case "HOME_INCREMENT":
      return homeCounter + 1;
    default:
      return homeCounter;
  }
}
