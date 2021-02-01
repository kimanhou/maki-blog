import React, { useEffect, useState } from 'react';
import Text from '../../LocalisationContext/Text';
import './Scroll.scss';

const Scroll : React.FC = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            if (scrollTop <= 10) {
                setActive(false);
            }
            if (scrollTop > 10) {
                setActive(true);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <div className={`about-intro-scroll ${activeClassName}`}>
            <Text english='scroll' french='faites défiler' />
            <span className={`arrow-down`}>⌄</span>
        </div>
    );
}

export default Scroll;