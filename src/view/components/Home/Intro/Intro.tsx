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
            <p>
                <Text english='We believe that simple designs are powerful,' 
                french="Nous pensons que les designs simples sont puissants," />
                <br></br>
                <Text english="that web design is a form of art" 
                    french="que le web design est une forme d'art" />
                <br></br>
                <Text english="and that anyone can find beauty in a website." 
                    french="et que chacun peut trouver une beauté dans un site web." />
            </p>
            
            <p><Text english='On this blog, we talk about web design, coding and stuff.' 
                french="Sur ce blog, nous parlons de conception web, de code et autre." /></p>
        </div>
    );
}

export default Intro;