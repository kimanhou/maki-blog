import React from 'react';
import './AboutIntro.scss';

const AboutIntro : React.FC = props => {
    return (
        <div className={`about-intro`}>
            <div className={`figure-left`}></div>
            <div className={`figure-right`}></div>
        </div>
    );
}

export default AboutIntro;