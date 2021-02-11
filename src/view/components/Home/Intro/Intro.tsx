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
                french="Nous pensons que les designs simples sont les plus puissants," />
                <br></br>
                <Text english="that coding is fun" 
                    french="que coder est une passion" />
                <br></br>
                <Text english="and that there is a balance between innovations and standards." 
                    french="et qu'il y a un juste milieu entre innovations et standards." />
            </p>
            
            <p><Text english='On this blog, we talk about web design, coding and plenty of other things.' 
                french="Sur ce blog, nous parlons de design web, de code et bien d'autres." /></p>
        </div>
    );
}

export default Intro;