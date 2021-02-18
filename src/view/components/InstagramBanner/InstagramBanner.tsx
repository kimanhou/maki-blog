import React from 'react';
import Text from '../../../model/Text';
import FadeIn from '../FadeIn/FadeIn';
import SectionHeader from '../SectionHeader/SectionHeader';
import './InstagramBanner.scss';
import InstagramPhoto from './InstagramPhoto';

interface IInstagramBannerProps {}

const InstagramBanner : React.FC<IInstagramBannerProps> = props => {
    return (
        <div className={'instagram-banner'}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <SectionHeader title={new Text('Follow us', 'Suivez-nous')} subtitle={new Text('on Instagram', 'sur Instagram')} isColorWhite />
                    <div className={`insta-photos-container`}>
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLMu1pYi0Si/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLBwqBAC_3G/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CK_m37rszVh/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CKMKlIzs5CG/' />
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/B8V2_xkpzwn/' />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default InstagramBanner;