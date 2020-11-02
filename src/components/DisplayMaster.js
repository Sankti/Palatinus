import React, { Component } from 'react';
import DisplayName from './DisplayName';
import DisplayCoat from './DisplayCoat';
import DisplayInfo from './DisplayInfo';
import DisplayLink from './DisplayLink';

export default class DisplayMaster extends Component {
    constructor(props) {
        super(props);
        this.voivodeship = props.voivodeship;
    }

    render() {
        let voivodeship = this.voivodeship;
        return (
            <>
                <DisplayName voivodeship={voivodeship} />
                <DisplayCoat voivodeship={voivodeship} />
                <DisplayInfo voivodeship={voivodeship} />
                <DisplayLink voivodeship={voivodeship} />
            </>
        );
    };
}