import React from 'react';
import MakiLogo from '../MakiLogo/MakiLogo';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            <div className={`main-wrapper`}>
                <div className={`header-logo`}>
                    <MakiLogo />
                    <div className={`header-logo-subtitle`}>
                        <span className={`mark`}>Mark</span>
                        <span className={`plus`}>+</span>
                        <span className={`kim-anh`}>Kim Anh</span>
                    </div>
                </div>
                <Navigation />
            </div>
        </div>
    );
}

export default Header;