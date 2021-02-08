import React from 'react';
import './HomeImage.scss';

const HomeImage : React.FC = props => {
    const introBg = require(`../../../images/home-background.png`);

    return (
        <div className={`home-image`}>
            <img src={introBg} />
        </div>
    );
}

export default HomeImage;