import React from 'react';
import FadeIn from '../../../FadeIn/FadeIn';
import Text from '../../../LocalisationContext/Text';
import './Tldr.scss';

const Tldr : React.FC = props => {
    return(
        <div className={`tldr one english`} id={`tldr`}>
            <FadeIn noDelay>
                <div className={`tldr-title`}>
                    <Text english='TL;DR' french='Trop Long; Pas Lu'/>
                </div>
                {props.children}
            </FadeIn>
        </div>
    );
}

export default Tldr;