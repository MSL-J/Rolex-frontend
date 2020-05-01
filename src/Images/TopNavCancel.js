import React, { Component } from "react";

export default class TopNavCancel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLike = (id) => {
    localStorage.getItem("token")
      ? fetch("http://10.58.5.93:8000/user/like", {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            product_id: id,
          }),
        })
      : alert("로그인 바랍니다");
  };
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="15px"
        viewBox="0 0 329.26933 329"
        width="15px"
        className="cancel"
        onClick={() => this.handleLike(this.props.id)}
      >
        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
    );
  }
}
