import React from 'react';
import Text from '../../../model/Text';
import FadeIn from '../FadeIn/FadeIn';
import SectionHeader from '../SectionHeader/SectionHeader';
import './InstagramBanner.scss';
import InstagramPhoto from './InstagramPhoto';

interface IInstagramBannerProps {}

const InstagramBanner : React.FC<IInstagramBannerProps> = props => {
    return (
        <section className={'instagram-banner'}>
            <FadeIn noDelay>
                <div className={`main-wrapper`}>
                    <SectionHeader title={new Text('Follow us', 'Suivez-nous')} subtitle={new Text('on Instagram', 'sur Instagram')} isColorWhite />
                    <div className={`insta-photos-container`}>
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CMCozpDJQdJ/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLwmOjzIR_A/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLeioPZso_1/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLMu1pYi0Si/' />
                        <InstagramPhoto caption='' photoCredits='@thisismakiworld' url='https://www.instagram.com/p/CLBwqBAC_3G/' />
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default InstagramBanner;