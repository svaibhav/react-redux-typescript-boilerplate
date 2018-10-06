export interface IUser {
  name: string;
  access: string;
  email: string;
  age?: number;
}

export interface IInitialState {
  userInfo: IUser;
  aboutCounter: number;
  homeCounter: number;
}

const initialState: IInitialState = {
  userInfo: {
    name: "Swapnil Vaibhav",
    access: "admin",
    email: "swapnil.vaibhav@microsoft.com"
  },
  aboutCounter: 0,
  homeCounter: 0
};

export default initialState;
