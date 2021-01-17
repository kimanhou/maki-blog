import React from 'react';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import Text from '../../../LocalisationContext/Text';
import './GoToTldr.scss';

const GoToTldr : React.FC = props => {
    const onClickTldr = () => {
        myScrollTo('tldr');
    }
    
    return(
        <FadeIn noDelay>
            <div className={`go-to-tldr`} onClick={onClickTldr}>
                <span><Text english='Go to TL;DR' french='Aller au TL;PL' /></span>
                <span className={`arrow-down`}>⌄</span>
            </div>
        </FadeIn>
    );
}

export default GoToTldr;