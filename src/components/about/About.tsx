import * as React from "react";
// import { Link } from "react-router-dom";

interface IAbout {}

class About extends React.Component<IAbout> {
  public render(): JSX.Element {
    return (
      <div>
        {/* <Link to="/contact">Contacttt</Link> */}
        <p>This is the about page.</p>
      </div>
    );
  }
}

export default About;
