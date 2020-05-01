import React, { Component } from "react";

export default class SlideOnClick extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        };
    }
    render() {
        return (
            <a href={this.props.link}>
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
                    </div>
                </li>
            </a>
        );
    }
}