import React, { useEffect, useState } from 'react';
import Text from '../../LocalisationContext/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import './Scroll.scss';

interface IScrollProps {

}

const Scroll : React.FC<IScrollProps> = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            if (scrollTop == 0) {
                setActive(false);
            }
            if (scrollTop > 0) {
                setActive(true);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <div className={`about-intro-scroll ${activeClassName}`}>
            <span><Text english='scroll' french='faites défiler' /></span>
            <span className={`arrow-down`}>⌄</span>
        </div>
    );
}

export default Scroll;