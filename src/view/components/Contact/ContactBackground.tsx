import React, { useEffect, useState } from 'react';
import './ContactBackground.scss';

const ContactBackground : React.FC = props => {
    return (
        <div className={`contact-background`}>
            <div className={`contact-background-element one`}></div>
            <div className={`contact-background-element two`}></div>
            <div className={`contact-background-element three`}></div>
            <div className={`contact-background-element four`}></div>
            <div className={`contact-background-element five`}></div>
            <div className={`contact-background-element six`}></div>
            <div className={`contact-background-element seven`}></div>
            <div className={`contact-background-element eight`}></div>
        </div>
    );
}

export default ContactBackground;