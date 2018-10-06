import { Dispatch } from "redux";

export function incrementHomeCount() {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: "HOME_INCREMENT"
    });
  };
}
