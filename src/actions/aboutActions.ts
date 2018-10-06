import { Dispatch } from "redux";

export function incrementAboutCount() {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: "ABOUT_INCREMENT"
    });
  };
}
