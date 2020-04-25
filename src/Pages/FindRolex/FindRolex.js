import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ShareBox from "./Components/ShareBox/ShareBox";
import FilterCenter from "./Components/FilterCenter/FilterCenter";
import ProductList from "./Components/ProductList/ProductList";
import FilterRight from "./Components/FilterRight/FilterRight";

import "./FindRolex.scss";

class FindRolex extends Component {
  render() {
    return (
      <div className="FindRolex">
        <div className="VideoBox">
          <video
            src={require("./Videos/FindRolexVideoTop.mp4")}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
          <h1 className="VideoText">롤렉스 컬렉션</h1>
        </div>
        <div className="ContentBox">
          <FilterCenter />
          <ProductList />
          <FilterRight />
        </div>
        <ShareBox />
      </div>
    );
  }
}

export default withRouter(FindRolex);
