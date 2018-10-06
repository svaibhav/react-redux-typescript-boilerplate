import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as actions from "../../actions/homeActions";
import { IInitialState } from "../../store/initialState";

interface IHomeProps {
  counter: number;
  actions: any;
}

interface IHomeState {
  counter: number;
}

class HomePage extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  private buttonClicked() {
    this.props.actions.incrementHomeCount();
  }

  public render(): JSX.Element {
    const { counter } = this.props;
    return (
      <div>
        <div>
          <p>This is the homepage</p>
        </div>
        <input
          type="button"
          onClick={this.buttonClicked}
          value={`Increment by 1 (${counter})`}
        />
      </div>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    counter: state.homeCounter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
