import React, { Component } from "react";
import "./GridChange.scss";

class GridChange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="GridChange">
        <div className="DivCheck" onClick={this.props.toggle}>
          <div className={this.props.checkbox ? "checkBox02" : "checkBox01"} />
        </div>
      </div>
    );
  }
}

export default GridChange;
