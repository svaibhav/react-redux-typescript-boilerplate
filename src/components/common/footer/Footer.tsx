import * as React from "react";

export interface IFooterProps {
  text?: string;
}

class Footer extends React.Component<IFooterProps> {
  public render(): JSX.Element {
    return <div>{this.props.text || "===common footer here==="}</div>;
  }
}

export default Footer;
