import React from 'react';
import FadeIn from '../../../FadeIn/FadeIn';
import './Tldr.scss';

const Tldr : React.FC = props => {
    return(
        <div className={`tldr one english`} id={`tldr`}>
            <FadeIn noDelay>
                <div className={`tldr-title`}>
                    TL;DR
                </div>
                {props.children}
            </FadeIn>
        </div>
    );
}

export default Tldr;