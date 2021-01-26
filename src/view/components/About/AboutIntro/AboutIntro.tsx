import React, { useEffect, useState } from 'react';
import { myScrollTo } from '../../../../Util';
import './AboutIntro.scss';

const AboutIntro : React.FC = props => {
    const [offset, setOffset] = useState('50%');

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            var maxOffset = window.innerWidth / 2 - window.innerHeight * 3 / 10 - 70; // half width - figure width - main-margin
            var finalOffset = Math.min(Math.max(scrollTop - 10, 0), maxOffset);
            setOffset(`calc(50% + ${finalOffset}px)`);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onClickMark = () => { myScrollTo('mark'); }
    const onClickKimAnh = () => { myScrollTo('kim-anh'); }

    return (
        <div className={`about-intro`}>
            <div className={`figure-left`} style={{ right: offset }} onClick={onClickMark}></div>
            <div className={`figure-right`} style={{ left: offset }} onClick={onClickKimAnh}></div>
        </div>
    );
}

export default AboutIntro;