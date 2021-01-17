import React from 'react';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import Text from '../../../LocalisationContext/Text';
import './BackToTop.scss';

const BackToTop : React.FC = props => {
    const onClickTop = () => {
        myScrollTo('top');
    }
    
    return(
        <FadeIn noDelay>
            <div className={`back-to-top`} onClick={onClickTop}>
                <span><Text english='Back to top' french='Retour en haut' /></span>
                <span className={`arrow-up`}>⌃</span>
            </div>
        </FadeIn>
    );
}

export default BackToTop;