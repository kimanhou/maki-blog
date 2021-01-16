import React from 'react';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import './BackToTop.scss';

const BackToTop : React.FC = props => {
    const onClickTop = () => {
        myScrollTo('top');
    }
    
    return(
        <FadeIn noDelay>
            <div className={`back-to-top`} onClick={onClickTop}>
                <span>Back to top</span>
                <span className={`arrow-up`}>⌃</span>
            </div>
        </FadeIn>
    );
}

export default BackToTop;