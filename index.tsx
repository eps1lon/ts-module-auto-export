import * as React from "react";

export class Component extends React.Component<{ children: React.ReactNode }> {
  render() {
    if (Math.random()) {
      return <div>{this.props.children}</div>;
    } else {
      return this.props.children;
    }
  }
}
