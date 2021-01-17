import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../../../../model/Category';
import FadeIn from '../../../FadeIn/FadeIn';
import Text from '../../../LocalisationContext/Text';
import './ArrowBack.scss';

interface IArrowBackProps {
}

const ArrowBack : React.FC<IArrowBackProps> = props => {
    return(
        <Link className={`arrow-back`} to={`/posts?${Category.toQueryParam( [ Category.ALL ] )}`}>
            <FadeIn noDelay>
                <span className={`arrow-back-left`}>&#60;</span>
                <span className={`arrow-back-text`}><Text english='Back' french='Retour' /></span>
            </FadeIn>
        </Link>
    );
}

export default ArrowBack;