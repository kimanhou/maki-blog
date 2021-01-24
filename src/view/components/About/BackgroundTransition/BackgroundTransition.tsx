import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import React, { useState } from 'react';
import './BackgroundTransition.scss';

interface IBackgroundTransitionProps {
    scrollTop : number;
    scrollMax : number;
}

const BackgroundTransition : React.FC<IBackgroundTransitionProps> = props => {
    // const darkGreen = rgb(47, 79, 79);
    // const white = rgb(254,255,255);

    const red= (props.scrollTop * 254 / props.scrollMax) + 47;
    const green= (props.scrollTop * 255 / props.scrollMax) + 79;
    const blue= (props.scrollTop * 255 / props.scrollMax) + 79;

    return (
        <div className={`about-background-transition`} 
        // style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
        >
        </div>
    );
}

export default BackgroundTransition;