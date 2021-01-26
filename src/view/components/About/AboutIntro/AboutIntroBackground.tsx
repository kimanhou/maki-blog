import React, { useEffect, useState } from 'react';
import './AboutIntroBackground.scss';

const AboutIntroBackground : React.FC = props => {
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
        <div className={`about-intro-background ${activeClassName}`}>
        </div>
    );
}

export default AboutIntroBackground;