import * as React from "react";
import { IUser, IInitialState } from "../../store/initialState";
import { connect } from "react-redux";

interface IUserInfo {
  userInfo: IUser;
}

class UserInfo extends React.Component<IUserInfo> {
  public render(): JSX.Element {
    const { userInfo } = this.props;
    return (
      <table>
        <tbody>
          {Object.keys(userInfo).map(key => {
            return (
              <tr key={key}>
                <td>
                  <strong>{key}</strong>
                </td>
                <td>{userInfo[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    userInfo: state.userInfo
  };
}

export default connect(mapStateToProps)(UserInfo);
