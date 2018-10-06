import initialState from "../store/initialState";
import { Action } from "redux";

export default function aboutReducer(
  aboutCounter: number = initialState.aboutCounter,
  action: Action
) {
  switch (action.type) {
    case "ABOUT_INCREMENT":
      return aboutCounter + 2;
    default:
      return aboutCounter;
  }
}
