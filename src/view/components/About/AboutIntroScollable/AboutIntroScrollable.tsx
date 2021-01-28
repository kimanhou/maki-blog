import React, { useEffect, useState } from 'react';
import './AboutIntroScrollable.scss';

interface IAboutIntroScrollableProps {
    scrollPosition: number;
    figureHeight: number;
    initialTop: number;
}

const AboutIntroScrollable : React.FC<IAboutIntroScrollableProps> = props => {
    const [opacity, setOpacity] = useState(0.3);

    const getOpacity = () => {
        const middle = props.figureHeight / 2;
        if (props.scrollPosition >= 0 && props.scrollPosition <= middle) {
            setOpacity((props.scrollPosition / middle) + 0.3)
        }
        else if (props.scrollPosition > middle) {
            setOpacity(1 - (props.scrollPosition - middle) / middle);
        }
    }

    useEffect(getOpacity, [ props.scrollPosition, props.figureHeight ]);

    return (
        <div className={`about-intro-scrollable`} style={{ opacity: opacity, top: `${props.initialTop}px` }}>
            {props.children}
        </div>
    );
}

export default AboutIntroScrollable;