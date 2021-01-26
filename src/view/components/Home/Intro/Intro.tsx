import React, { useEffect, useState } from 'react';
import Text from '../../LocalisationContext/Text';
import './Intro.scss';

const Intro : React.FC = props => {
    const [active, setActive] = useState(false);
    const activeClassName = active ? 'active' : '';

    useEffect(() => {
        const onScroll = () => {
            setActive(true);
            window.removeEventListener('scroll', onScroll);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`intro ${activeClassName}`}>
            <p><Text english='We talk about web design, coding and stuff.' french="On parle de conception web, de code et autre." /></p>
            <p><Text english='We believe in minimalist designs, clean code and constant improvement.' french="On aime les concepts minimalistes et le code propre." /></p>
        </div>
    );
}

export default Intro;