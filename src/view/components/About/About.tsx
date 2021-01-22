import React from 'react';
import Text from '../../../model/Text';
import Header from '../Header/Header';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import AboutIntro from './AboutIntro/AboutIntro';

const About : React.FC = props => {
    return (
        <div className={`about`}>
            <Header/>
            <SectionHeader title={new Text('About', 'À propos')} subtitle={new Text('us', 'de nous')} />
            <AboutIntro/>
        </div>
    );
}

export default About;