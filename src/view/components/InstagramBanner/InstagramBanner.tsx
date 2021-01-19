import React from 'react';
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
                    <SectionHeader englishTitle='Follow us' englishSubtitle='on Instagram' frenchTitle='Suivez-nous' frenchSubtitle='sur Instagram' isColorWhite />
                    <div className={`insta-photos-container`}>
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/B8V2_xkpzwn/' />
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/B4nGjywJwO-/' />
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/By4sqvDJYXT/' />
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/ByFQmxoJXC3/' />
                        <InstagramPhoto caption='' photoCredits='@kimanhou' url='https://www.instagram.com/p/BxKCBtDJw3H/' />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default InstagramBanner;