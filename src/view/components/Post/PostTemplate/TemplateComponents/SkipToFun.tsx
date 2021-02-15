import React from 'react';
import { myScrollToWithOffset } from '../../../../../Util';
import Text from '../../../LocalisationContext/Text';
import Button from './Button';
import './SkipToFun.scss';

const SkipToFun : React.FC = props => {
    const onClickFun = () => {
        myScrollToWithOffset('fun', -190);
    }
    
    return(
        <Button onClick={onClickFun} classname={`skip-to-fun`}>
            <span><Text english='Skip to the fun part' french='Aller à la partie fun' /></span>
            <span className={`arrow-down`}>⌄</span>
        </Button>
    );
}

export default SkipToFun;