import React from 'react';
import { Link } from 'react-router-dom';
import MakiLogo from '../MakiLogo/MakiLogo';
import MakiLogoWithNames from '../MakiLogo/MakiLogoWithNames';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            <div className={`main-wrapper`}>
                {/* <Link className={`header-logo`} to='/'>
                    <MakiLogo />
                    <div className={`header-logo-subtitle`}>
                        <span className={`mark`}>Mark</span>
                        <span className={`plus`}>+</span>
                        <span className={`kim-anh`}>Kim Anh</span>
                    </div>
                </Link> */}
                <MakiLogoWithNames />
                <Navigation />
            </div>
        </div>
    );
}

export default Header;