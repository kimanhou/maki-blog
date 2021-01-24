import React, { useEffect, useState } from 'react';
import TextModel from '../../../model/Text';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutIntroText from './AboutIntro/AboutIntroText';
import AboutIntroScrollable from './AboutIntroScollable/AboutIntroScrollable';
import BackgroundTransition from './BackgroundTransition/BackgroundTransition';
import KimAnh from './KimAnh/KimAnh';
import Mark from './Mark/Mark';

const About : React.FC = props => {
    const [fixed, setFixed] = useState(false);
    const fixedClassname = fixed ? 'fixed' : '';

    const [textOpacity, setTextOpacity] = useState(0);

    const [introScrollableScrollPosition, setIntroScrollableScrollPosition] = useState(0);
    const [introScrollableScrollPosition2, setIntroScrollableScrollPosition2] = useState(0);

    const [distanceBetweenMaki, setDistanceBetweenMaki] = useState(0);
    const [rkLeft, setRkLeft] = useState(0);
    const [rkOpacity, setRkOpacity] = useState(0);
    const [manhRight, setManhRight] = useState(0);
    const [kiRight, setKiRight] = useState(0);

    const [backgroundTransitionScroll, setBackgroundTransitionScroll] = useState(0);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const aboutIntroScrollableInitialTop = window.innerHeight * 1.8 + 30 + (window.innerWidth / 2) - 89 - 70 + 18 + 30 + 188 + 70 ;
    const aboutIntroScrollableInitialTop2 = aboutIntroScrollableInitialTop + 144; // 144 = height of AboutIntroScollable
    const aboutScrollableInitialTop = aboutIntroScrollableInitialTop + 500;

    const fixedHeight = aboutScrollableInitialTop;
    const scrollableHeight = window.innerHeight + window.innerHeight * 0.9 + window.innerHeight + 150; // Mark height + background transition height + Kim Anh height + footer height
    const aboutTotalHeight = fixedHeight + scrollableHeight;

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            var threshold = window.innerHeight * 0.8; // 120vh - figure height
            
            var thresholdMakiBeginSeparation = threshold + 30;
            var thresholdMakiStopSeparation = (window.innerWidth / 2) - 89 - 70 + 18; // should be 313px at 1007px screen width
            
            var thresholdRkStartMoving = thresholdMakiBeginSeparation + thresholdMakiStopSeparation + 30;
            var thresholdRfStopMoving = 89; // width ma

            var thresholdManhStopMoving = 188 + 70;

            var thresholdKiStartMoving = thresholdRkStartMoving + 70;
            var thresholdKiStopMoving = 188; // width manh

            var thresholdBackgroundTransitionStart = thresholdKiStartMoving + thresholdKiStopMoving + 500 + window.innerHeight * 1.5;
            var thresholdBackgroundTransitionStop = window.innerHeight * 0.9;
            
            if (scrollTop > threshold && !fixed) {
                setFixed(true);
            }
            else if (scrollTop <= threshold  && fixed) {
                setFixed(false);
            }
            setTextOpacity(Math.min(scrollTop / threshold, 1));
            setDistanceBetweenMaki(Math.min(Math.max(scrollTop - thresholdMakiBeginSeparation, 0), thresholdMakiStopSeparation));
            
            const rkLeft = Math.min(Math.max(scrollTop - thresholdRkStartMoving, 0), thresholdRfStopMoving);
            setRkLeft(rkLeft);
            setRkOpacity(rkLeft / thresholdRfStopMoving);
            
            setManhRight(Math.min(Math.max(scrollTop - thresholdRkStartMoving, 0), thresholdManhStopMoving));
            setKiRight(Math.min(Math.max(scrollTop - thresholdKiStartMoving, 0), thresholdKiStopMoving));

            setBackgroundTransitionScroll(Math.min(Math.max(scrollTop - thresholdBackgroundTransitionStart, 0), thresholdBackgroundTransitionStop));
            setRed((backgroundTransitionScroll * 254 / window.innerHeight * 0.9) + 47);
            setGreen((backgroundTransitionScroll * 255 / window.innerHeight * 0.9) + 79);
            setBlue((backgroundTransitionScroll * 255 / window.innerHeight * 0.9) + 79);

            setIntroScrollableScrollPosition(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop, 0), window.innerHeight * 0.6));
            setIntroScrollableScrollPosition2(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop2, 0), window.innerHeight * 0.6));
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ fixed, backgroundTransitionScroll ]);

    return (
        <div className={`about`} style={{ height: aboutTotalHeight }}>
            <div className={`about-intro-fixed`}>
                <Header/>
                <SectionHeader title={new TextModel('About', 'À propos')} subtitle={new TextModel('us', 'de nous')} />
                <AboutIntro/>
            </div>
            <AboutIntroText fixedClassname={fixedClassname} opacity={textOpacity} 
                            middleSeparation={distanceBetweenMaki} 
                            rkLeft={rkLeft} rkOpacity={rkOpacity}
                            manhRight={manhRight} kiRight={kiRight} />
            
            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop}>
                <Text english='We are developers,' french='Nous sommes développeurs,'/>
                <br></br>
                <Text english='a bit British and a bit French.' french='un peu anglais et un peu français.'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition2} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop2}>
                <Text english='We are developers,' french='Nous sommes développeurs,'/>
                <br></br>
                <Text english='a bit British and a bit French.' french='un peu anglais et un peu français.'/>
            </AboutIntroScrollable>

            <div className={`about-scrollable`} style={{ top: aboutScrollableInitialTop, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} >
                <Mark />
                <BackgroundTransition/>
                <KimAnh />
                <Footer noMarginTop />
            </div>
        </div>
    );
}

export default About;