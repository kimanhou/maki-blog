import React from 'react';
import { myScrollTo } from '../../../../../Util';
import Text from '../../../LocalisationContext/Text';
import Button from './Button';

const BackToTop : React.FC = props => {
    const onClickTop = () => {
        myScrollTo('top');
    }
    
    return(
        <Button onClick={onClickTop} classname={`back-to-top skip-link`}>
            <span><Text english='Back to top' french='Retour en haut' /></span>
            <span className={`arrow-up`}>⌃</span>
        </Button>
    );
}

export default BackToTop;