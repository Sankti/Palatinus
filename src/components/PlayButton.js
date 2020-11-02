import React, { Component } from "react";
import { data } from "../data";

export default class PlayButton extends Component {
    pushButton = () => {
        console.log("Wduszono Przycisk.");
    }

    render() {
        return (
            <a href="https://sankti.github.io/opole/index.html">
                <div className="button-round" onClick={this.pushButton}>
                    {data.welcome.left.button}
                </div>
            </a>
        );
    }
}