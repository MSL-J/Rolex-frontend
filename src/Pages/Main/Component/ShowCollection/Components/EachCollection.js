import React, { Component } from "react";
import "./EachCollection.scss";

export default class EachCollection extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }
  render() {
    return (
      <a href={this.props.link} idx={this.props.idx}>
        <li
          onMouseEnter={() => {
            this.setState({ hover: true });
          }}
          onMouseLeave={() => {
            this.setState({ hover: false });
          }}
        >
          <div
            className={
              this.state.hover ? "collectionPicHover" : "collectionPic"
            }
            style={{ backgroundImage: `url(${this.props.pic})` }}
          ></div>
          <div
            className={
              this.state.hover ? "collectionTitleHover" : "collectionTitle"
            }
          >
            <span>{this.props.name}</span>
            <span>{this.props.detail}</span>
            <span>자세히 보기</span>
          </div>
        </li>
      </a>
    );
  }
}
