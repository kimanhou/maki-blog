import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn/FadeIn';
import MakiLogo from '../MakiLogo/MakiLogo';
import MakiLogoWithNames from '../MakiLogo/MakiLogoWithNames';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <MakiLogoWithNames />
                    <Navigation />
                </div>
            </FadeIn>
        </div>
    );
}

export default Header;