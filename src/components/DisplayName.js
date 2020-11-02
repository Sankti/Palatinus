import React, { Component } from 'react';
import { data } from '../data';

export default class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.voivodeship = props.voivodeship;
    }

    render() {
        const voivodeship = this.voivodeship;
        if (voivodeship === "LowerSilesian") {
            return <h1>{data.voivodeships.names.LowerSilesian}</h1>;
        } else if (voivodeship === "KuyavianPomeranian") {
            return <h1>{data.voivodeships.names.KuyavianPomeranian}</h1>;
        } else if (voivodeship === "Lublin") {
            return <h1>{data.voivodeships.names.Lublin}</h1>;
        } else if (voivodeship === "Lubusz") {
            return <h1>{data.voivodeships.names.Lubusz}</h1>;
        } else if (voivodeship === "Lodz") {
            return <h1>{data.voivodeships.names.Lodz}</h1>;
        } else if (voivodeship === "LesserPoland") {
            return <h1>{data.voivodeships.names.LesserPoland}</h1>;
        } else if (voivodeship === "Masovian") {
            return <h1>{data.voivodeships.names.Masovian}</h1>;
        } else if (voivodeship === "Opole") {
            return <h1>{data.voivodeships.names.Opole}</h1>;
        } else if (voivodeship === "Subcarpathian") {
            return <h1>{data.voivodeships.names.Subcarpathian}</h1>;
        } else if (voivodeship === "Podlaskie") {
            return <h1>{data.voivodeships.names.Podlaskie}</h1>;
        } else if (voivodeship === "Pomeranian") {
            return <h1>{data.voivodeships.names.Pomeranian}</h1>;
        } else if (voivodeship === "Silesian") {
            return <h1>{data.voivodeships.names.Silesian}</h1>;
        } else if (voivodeship === "HolyCross") {
            return <h1>{data.voivodeships.names.HolyCross}</h1>;
        } else if (voivodeship === "WarmianMasurian") {
            return <h1>{data.voivodeships.names.WarmianMasurian}</h1>;
        } else if (voivodeship === "GreaterPoland") {
            return <h1>{data.voivodeships.names.GreaterPoland}</h1>;
        } else if (voivodeship === "WestPomeranian") {
            return <h1>{data.voivodeships.names.WestPomeranian}</h1>;
        } else if (voivodeship === "Poland") {
            return <h1>{data.welcome.right.line0}</h1>;
        }
    }
}