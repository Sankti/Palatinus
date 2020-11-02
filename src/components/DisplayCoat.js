import React, { Component } from 'react';
import { data } from '../data';

export default class DisplayCoat extends Component {
    constructor(props) {
        super(props);
        this.voivodeship = props.voivodeship;
    }

    render() {
        const voivodeship = this.voivodeship;
        if (voivodeship === "LowerSilesian") {
            return <img className="coat" src={data.img.coatLowerSilesian} alt="" />;
        } else if (voivodeship === "KuyavianPomeranian") {
            return <img className="coat" src={data.img.coatKuyavianPomeranian} alt="" />;
        } else if (voivodeship === "Lublin") {
            return <img className="coat" src={data.img.coatLublin} alt="" />;
        } else if (voivodeship === "Lubusz") {
            return <img className="coat" src={data.img.coatLubusz} alt="" />;
        } else if (voivodeship === "Lodz") {
            return <img className="coat" src={data.img.coatLodz} alt="" />;
        } else if (voivodeship === "LesserPoland") {
            return <img className="coat" src={data.img.coatLesserPoland} alt="" />;
        } else if (voivodeship === "Masovian") {
            return <img className="coat" src={data.img.coatMasovian} alt="" />;
        } else if (voivodeship === "Opole") {
            return <img className="coat" src={data.img.coatOpole} alt="" />;
        } else if (voivodeship === "Subcarpathian") {
            return <img className="coat" src={data.img.coatSubcarpathian} alt="" />;
        } else if (voivodeship === "Podlaskie") {
            return <img className="coat" src={data.img.coatPodlaskie} alt="" />;
        } else if (voivodeship === "Pomeranian") {
            return <img className="coat" src={data.img.coatPomeranian} alt="" />;
        } else if (voivodeship === "Silesian") {
            return <img className="coat" src={data.img.coatSilesian} alt="" />;
        } else if (voivodeship === "HolyCross") {
            return <img className="coat" src={data.img.coatHolyCross} alt="" />;
        } else if (voivodeship === "WarmianMasurian") {
            return <img className="coat" src={data.img.coatWarmianMasurian} alt="" />;
        } else if (voivodeship === "GreaterPoland") {
            return <img className="coat" src={data.img.coatGreaterPoland} alt="" />;
        } else if (voivodeship === "WestPomeranian") {
            return <img className="coat" src={data.img.coatWestPomeranian} alt="" />;
        } else if (voivodeship === "Poland") {
            return <img className="coat" src={data.img.coatPoland} alt="" />;
        }
    }
}