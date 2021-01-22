import React from 'react';
import { myScrollTo } from '../../../../../Util';
import Text from '../../../LocalisationContext/Text';
import Button from './Button';

const GoToTldr : React.FC = props => {
    const onClickTldr = () => {
        myScrollTo('tldr');
    }
    
    return(
        <Button onClick={onClickTldr} classname={`go-to-tldr`}>
            <span><Text english='Go to TL;DR' french='Aller au TL;PL' /></span>
            <span className={`arrow-down`}>⌄</span>
        </Button>
    );
}

export default GoToTldr;