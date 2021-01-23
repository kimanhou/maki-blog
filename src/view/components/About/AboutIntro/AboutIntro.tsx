import React, { useEffect, useState } from 'react';
import './AboutIntro.scss';

const AboutIntro : React.FC = props => {
    const [offset, setOffset] = useState('50%');

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            var maxOffset = window.innerWidth / 2 - window.innerHeight * 3 / 10 - 70; // half width - figure width - main-margin
            var finalOffset = Math.min(scrollTop, maxOffset);
            setOffset(`calc(50% + ${finalOffset}px)`);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`about-intro`}>
            <div className={`figure-left`} style={{ right: offset }}></div>
            <div className={`figure-right`} style={{ left: offset }}></div>
        </div>
    );
}

export default AboutIntro;