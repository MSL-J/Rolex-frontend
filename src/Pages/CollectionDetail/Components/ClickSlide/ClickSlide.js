import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import SlideOnClick from "./SlideOnClick";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import * as Scroll from 'react-scroll';
import "./ClickSlide.scss";

export default class ClickSlide extends Component {
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
        fetch("http://localhost:3000/data/ClickSlide.json")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ collectionData: res.CollectionData });
            });
    };

    render() {
        let CollectionList = this.state.collectionData.map((collection) => {
            return (
                <SlideOnClick
                    pic={collection.pic_url}
                    name={collection.name}
                    detail={collection.detail}
                    link={collection.link}
                />
            );
        });
        return (
            <div className="ClickSlide">
                <div className="collectionTxtNSwipe">
                    <div className="collectionSwipe">
                        <div className="collections">
                            <Scrollbar noDefaultStyles>{CollectionList}</Scrollbar>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
