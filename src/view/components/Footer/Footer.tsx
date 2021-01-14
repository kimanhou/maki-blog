import React from 'react';
import MakiLogo from '../MakiLogo/MakiLogo';
import './Footer.scss';
import FooterSocial from './FooterSocial';

interface IFooterProps {}

const Footer : React.FC<IFooterProps> = props => {
    return (
        <div className={`footer`}>
            <div className={`main-wrapper`}>
                <div className={`footer-left`}>
                    Copyright © 2021 Maki
                </div>
                <div className={`footer-logo`}>
                    <MakiLogo />
                </div>
                <div className={`footer-right`}>
                    <FooterSocial classname={`mail`} link={`mailto:mark.kimanh@gmail.com`}/>
                    <FooterSocial classname={`instagram`} link={`https://www.instagram.com/thisismakiworld/`}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;