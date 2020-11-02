import React, { Component } from 'react';
import { data } from '../data';

export default class DisplayLink extends Component {
    constructor(props) {
        super(props);
        this.voivodeship = props.voivodeship;
    }

    render() {
        const voivodeship = this.voivodeship;
        if (voivodeship === "LowerSilesian") {
            return <a href={data.voivodeships.links.LowerSilesian}>See more on Wikipedia</a>;
        } else if (voivodeship === "KuyavianPomeranian") {
            return <a href={data.voivodeships.links.KuyavianPomeranian}>See more on Wikipedia</a>;
        } else if (voivodeship === "Lublin") {
            return <a href={data.voivodeships.links.Lublin}>See more on Wikipedia</a>;
        } else if (voivodeship === "Lubusz") {
            return <a href={data.voivodeships.links.Lubusz}>See more on Wikipedia</a>;
        } else if (voivodeship === "Lodz") {
            return <a href={data.voivodeships.links.Lodz}>See more on Wikipedia</a>;
        } else if (voivodeship === "LesserPoland") {
            return <a href={data.voivodeships.links.LesserPoland}>See more on Wikipedia</a>;
        } else if (voivodeship === "Masovian") {
            return <a href={data.voivodeships.links.Masovian}>See more on Wikipedia</a>;
        } else if (voivodeship === "Opole") {
            return <a href={data.voivodeships.links.Opole}>See more on Wikipedia</a>;
        } else if (voivodeship === "Subcarpathian") {
            return <a href={data.voivodeships.links.Subcarpathian}>See more on Wikipedia</a>;
        } else if (voivodeship === "Podlaskie") {
            return <a href={data.voivodeships.links.Podlaskie}>See more on Wikipedia</a>;
        } else if (voivodeship === "Pomeranian") {
            return <a href={data.voivodeships.links.Pomeranian}>See more on Wikipedia</a>;
        } else if (voivodeship === "Silesian") {
            return <a href={data.voivodeships.links.Silesian}>See more on Wikipedia</a>;
        } else if (voivodeship === "HolyCross") {
            return <a href={data.voivodeships.links.HolyCross}>See more on Wikipedia</a>;
        } else if (voivodeship === "WarmianMasurian") {
            return <a href={data.voivodeships.links.WarmianMasurian}>See more on Wikipedia</a>;
        } else if (voivodeship === "GreaterPoland") {
            return <a href={data.voivodeships.links.GreaterPoland}>See more on Wikipedia</a>;
        } else if (voivodeship === "WestPomeranian") {
            return <a href={data.voivodeships.links.WestPomeranian}>See more on Wikipedia</a>;
        }
    }
}