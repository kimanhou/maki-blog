import React, { useEffect, useState } from 'react';
import Text from '../../../model/Text';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutIntroText from './AboutIntro/AboutIntroText';
import BackgroundTransition from './BackgroundTransition/BackgroundTransition';
import KimAnh from './KimAnh/KimAnh';
import Mark from './Mark/Mark';

const About : React.FC = props => {
    const [fixed, setFixed] = useState(false);
    const fixedClassname = fixed ? 'fixed' : '';

    const [textOpacity, setTextOpacity] = useState(0);

    const [distanceBetweenMaki, setDistanceBetweenMaki] = useState(0);
    const [rkLeft, setRkLeft] = useState(0);
    const [rkOpacity, setRkOpacity] = useState(0);
    const [manhRight, setManhRight] = useState(0);
    const [kiRight, setKiRight] = useState(0);

    const [backgroundTransitionScroll, setBackgroundTransitionScroll] = useState(0);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const aboutScrollableInitialTop = window.innerHeight * 1.8 + 30 + (window.innerWidth / 2) - 150 - 70 + 30 + 30 + 314 + 70 + 500;

    const fixedHeight = aboutScrollableInitialTop;
    const scrollableHeight = window.innerHeight + window.innerHeight * 0.9 + window.innerHeight + 150;
    const abouTotalHeight = fixedHeight + scrollableHeight;

    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            var threshold = window.innerHeight * 0.8; // 120vh - figure height
            
            var thresholdMakiBeginSeparation = threshold + 30;
            var thresholdMakiStopSeparation = (window.innerWidth / 2) - 150 - 70 + 30; // should be 313px at 1007px screen width
            
            var thresholdRkStartMoving = thresholdMakiBeginSeparation + thresholdMakiStopSeparation + 30;
            var thresholdRfStopMoving = 148;

            var thresholdManhStopMoving = 314 + 70;

            var thresholdKiStartMoving = thresholdRkStartMoving + 70;
            var thresholdKiStopMoving = 314; // width manh

            var thresholdBackgroundTransitionStart = thresholdKiStartMoving + thresholdKiStopMoving + 500 + window.innerHeight;
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
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ fixed, backgroundTransitionScroll ]);

    return (
        <div className={`about`} style={{ height: abouTotalHeight }}>
            <div className={`about-intro-fixed`}>
                <Header/>
                <SectionHeader title={new Text('About', 'À propos')} subtitle={new Text('us', 'de nous')} />
                <AboutIntro/>
            </div>
            <AboutIntroText fixedClassname={fixedClassname} opacity={textOpacity} 
                            middleSeparation={distanceBetweenMaki} 
                            rkLeft={rkLeft} rkOpacity={rkOpacity}
                            manhRight={manhRight} kiRight={kiRight} />
            
            <div className={`about-scrollable`} style={{ top: aboutScrollableInitialTop, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} >
                <Mark />
                <BackgroundTransition  scrollTop={backgroundTransitionScroll} scrollMax={window.innerHeight * 0.9}/>
                <KimAnh />
                <Footer noMarginTop />
            </div>
        </div>
    );
}

export default About;