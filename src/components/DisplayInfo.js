import React, { Component } from 'react';
import { data } from '../data';

export default class DisplayInfo extends Component {
    constructor(props) {
        super(props);
        this.voivodeship = props.voivodeship;
    }

    render() {
        const voivodeship = this.voivodeship;
        if (voivodeship === "LowerSilesian") {
            return <p>{data.voivodeships.info.LowerSilesian}</p>;
        } else if (voivodeship === "KuyavianPomeranian") {
            return <p>{data.voivodeships.info.KuyavianPomeranian}</p>;
        } else if (voivodeship === "Lublin") {
            return <p>{data.voivodeships.info.Lublin}</p>;
        } else if (voivodeship === "Lubusz") {
            return <p>{data.voivodeships.info.Lubusz}</p>;
        } else if (voivodeship === "Lodz") {
            return <p>{data.voivodeships.info.Lodz}</p>;
        } else if (voivodeship === "LesserPoland") {
            return <p>{data.voivodeships.info.LesserPoland}</p>;
        } else if (voivodeship === "Masovian") {
            return <p>{data.voivodeships.info.Masovian}</p>;
        } else if (voivodeship === "Opole") {
            return <p>{data.voivodeships.info.Opole}</p>;
        } else if (voivodeship === "Subcarpathian") {
            return <p>{data.voivodeships.info.Subcarpathian}</p>;
        } else if (voivodeship === "Podlaskie") {
            return <p>{data.voivodeships.info.Podlaskie}</p>;
        } else if (voivodeship === "Pomeranian") {
            return <p>{data.voivodeships.info.Pomeranian}</p>;
        } else if (voivodeship === "Silesian") {
            return <p>{data.voivodeships.info.Silesian}</p>;
        } else if (voivodeship === "HolyCross") {
            return <p>{data.voivodeships.info.HolyCross}</p>;
        } else if (voivodeship === "WarmianMasurian") {
            return <p>{data.voivodeships.info.WarmianMasurian}</p>;
        } else if (voivodeship === "GreaterPoland") {
            return <p>{data.voivodeships.info.GreaterPoland}</p>;
        } else if (voivodeship === "WestPomeranian") {
            return <p>{data.voivodeships.info.WestPomeranian}</p>;
        } else if (voivodeship === "Poland") {
            return <p>{data.welcome.right.line1}</p>;
        }
    }
}