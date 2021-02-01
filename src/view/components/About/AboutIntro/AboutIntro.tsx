import React, { useEffect, useState } from 'react';
import { myScrollTo } from '../../../../Util';
import { isMobile } from '../../../hooks/UseMediaQuery';
import './AboutIntro.scss';

const AboutIntro : React.FC = props => {
    const mobile = isMobile();
    const [offset, setOffset] = useState('calc(50% - 40px)');

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            var maxOffset = window.innerWidth / 2 - window.innerHeight * 3 / 10 - 70 + 10; // half width - figure width - main-margin + 10 first pixels where figures don't move
            
            if ( scrollTop >= 0 && scrollTop <= 10)
            {
                setOffset('calc(50% - 40px)');
            }
            else if (scrollTop > 10) {
                if (mobile) {
                    if (scrollTop > 10 && scrollTop <= 90) {
                        setOffset(`calc(50% + ${scrollTop - 50}px)`);
                    }
                    else {
                        setOffset(`calc(50% + 40px)`);
                    }
                }
                else {
                    if (scrollTop > 10 && scrollTop <= (maxOffset)) {
                        setOffset(`calc(50% + ${scrollTop - 50}px)`);
                    }
                    else {
                        setOffset(`calc(50% + ${maxOffset}px)`);
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ mobile ]);

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