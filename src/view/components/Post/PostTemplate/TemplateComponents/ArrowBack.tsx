import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../../../../model/Category';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import './ArrowBack.scss';

interface IArrowBackProps {
    // categories : Category[];
}

const ArrowBack : React.FC<IArrowBackProps> = props => {
    return(
        <Link className={`arrow-back`} to={`/posts?${Category.toQueryParam([ Category.ALL ])}`}>
            <FadeIn noDelay>
                <span className={`arrow-back-left`}>&#60;</span>
                <span className={`arrow-back-text`}>Back</span>
            </FadeIn>
        </Link>
    );
}

export default ArrowBack;