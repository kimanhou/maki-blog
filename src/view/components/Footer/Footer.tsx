import React from 'react';
import FadeIn from '../FadeIn/FadeIn';
import Text from '../LocalisationContext/Text';
import MakiLogo from '../MakiLogo/MakiLogo';
import MakiLogoWithNames from '../MakiLogo/MakiLogoWithNames';
import './Footer.scss';
import FooterSocial from './FooterSocial';
import Languages from './Languages/Languages';

interface IFooterProps {}

const Footer : React.FC<IFooterProps> = props => {
    return (
        <div className={`footer`}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <div className={`footer-left`}>
                        <Languages />
                        Copyright © 2021 Maki
                    </div>
                    <MakiLogoWithNames />
                    <div className={`footer-right`}>
                        <FooterSocial classname={`mail`} link={`mailto:mark.kimanh@gmail.com`}/>
                        <FooterSocial classname={`instagram`} link={`https://www.instagram.com/thisismakiworld/`}/>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default Footer;