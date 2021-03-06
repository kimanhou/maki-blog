import React from 'react';
import './AboutMaki.scss'

interface IAboutIntroTextProps {
    fixedClassname : string;
    opacity : number;
    middleSeparation : number;
    rkLeft : number;
    rkOpacity : number;
    manhRight : number;
    kiRight : number;
}

const AboutIntroText : React.FC<IAboutIntroTextProps> = props => {
 
    return (
        <div className={`about-maki ${props.fixedClassname}`} style={{ opacity: props.opacity }}>
            <div className={`about-maki-ma`} style={{ marginRight: `${props.middleSeparation}px` }}>
                <div className={`ma`}>
                    ma
                </div>
                <div className={`rk`} style={{ left: `${props.rkLeft}px`, opacity: props.rkOpacity }}>
                    rk
                </div>
            </div>
            <div className={`about-maki-ki`} style={{ marginLeft: `${props.middleSeparation}px` }}>
                <div className={`ki`} style={{ right: `${props.kiRight}px` }}>
                    ki
                </div>
                <div className={`manh`} style={{ right: `${props.manhRight}px`, opacity: props.manhRight === 0 ? 0 : 1}}>
                    m anh
                </div>
            </div>
        </div>
    );
}

export default AboutIntroText;