import React, { Component } from "react";
import Scrollbar from "react-scrollbars-custom";
import NavCollection from "./NavCollection";
import "./CollectionDisplay.scss";

export default class CollectionDisplay extends Component {
  constructor() {
    super();
    this.state = {
      collectionData: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://localhost:3000/data/CollectionData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "res.CollectionData가 이렇게 생겼어요 : ",
          res.CollectionData
        );
        this.setState({ collectionData: res.CollectionData });
      });
  };

  render() {
    let CollectionList = this.state.collectionData.map((collection) => {
      return (
        <NavCollection
          pic={collection.pic_url}
          name={collection.name}
          detail={collection.detail}
          link={collection.link}
        />
      );
    });
    return (
      <div className="CollectionDisplay">
        <div className="collectionTxtNSwipe">
          <div className="collectionSwipe">
            <div className="collections">
              <Scrollbar noDefaultStyles>{CollectionList}</Scrollbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
