import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Intro.scss';

const Intro : React.FC = props => {
    return (
        <div className={`intro`}>
            <div className={`intro-picture`} ></div>
            <div className={`intro-text`}>
                <p><Text english='We talk about web design, coding and stuff.' french="On parle de conception web, de code et autre." /></p>
                <p><Text english='We believe in minimalist designs, clean code and constant improvement.' french="On aime les concepts minimalistes et le code propre." /></p>
            </div>
        </div>
    );
}

export default Intro;