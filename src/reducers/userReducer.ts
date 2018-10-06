import initialState, { IUser } from "../store/initialState";
import { Action } from "redux";

export default function userReducer(
  userInfo: IUser = initialState.userInfo,
  action: Action
) {
  switch (action.type) {
    case "USER_AGE_INCREMENT":
      return {
        ...userInfo,
        age: userInfo.age ? userInfo.age + 1 : 1
      };
    default:
      return userInfo;
  }
}
