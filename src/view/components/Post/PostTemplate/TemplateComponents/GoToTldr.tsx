import React from 'react';
import { myScrollToWithOffset } from '../../../../../Util';
import Text from '../../../LocalisationContext/Text';
import Button from './Button';

const GoToTldr : React.FC = props => {
    const onClickTldr = () => {
        myScrollToWithOffset('tldr', -190);
    }
    
    return(
        <Button onClick={onClickTldr} classname={`go-to-tldr skip-link`}>
            <span><Text english='Go to TL;DR' french='Aller au TL;PL' /></span>
            <span className={`arrow-down`}>⌄</span>
        </Button>
    );
}

export default GoToTldr;