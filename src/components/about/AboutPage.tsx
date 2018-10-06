import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/aboutActions";
import { IInitialState } from "../../store/initialState";

interface IAboutProps {
  counter: number;
  actions: any;
}

interface IAboutState {
  counter: number;
}

class AboutPage extends React.Component<IAboutProps, IAboutState> {
  constructor(props: IAboutProps) {
    super(props);
    this.buttonCLicked = this.buttonCLicked.bind(this);
  }

  private buttonCLicked(): void {
    this.props.actions.incrementAboutCount();
  }

  public render(): JSX.Element {
    const { counter } = this.props;
    return (
      <div>
        <div>
          <p>This is the about page.</p>
        </div>
        <div>
          <input
            type="button"
            value={`Increment by 2 (${counter})`}
            onClick={this.buttonCLicked}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    counter: state.aboutCounter
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
)(AboutPage);
