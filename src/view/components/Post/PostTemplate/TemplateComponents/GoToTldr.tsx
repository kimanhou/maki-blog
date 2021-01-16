import React from 'react';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import './GoToTldr.scss';

const GoToTldr : React.FC = props => {
    const onClickTldr = () => {
        myScrollTo('tldr');
    }
    
    return(
        <FadeIn noDelay>
            <div className={`go-to-tldr`} onClick={onClickTldr}>
                <span>Go to TL;DR</span>
                <span className={`arrow-down`}>⌄</span>
            </div>
        </FadeIn>
    );
}

export default GoToTldr;