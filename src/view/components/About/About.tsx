import React, { useEffect, useState } from 'react';
import TextModel from '../../../model/Text';
import { isMobile } from '../../hooks/UseMediaQuery';
import useScroll from '../../hooks/UseScroll';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../LocalisationContext/Text';
import BackToTop from '../Post/PostTemplate/TemplateComponents/BackToTop';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutIntroBackground from './AboutIntro/AboutIntroBackground';
import AboutMaki from './AboutIntro/AboutMaki';
import Scroll from './AboutIntro/Scroll';
import AboutIntroScrollable from './AboutIntroScollable/AboutIntroScrollable';
import KimAnh from './KimAnh/KimAnh';
import Mark from './Mark/Mark';

const About : React.FC = props => {
    const mobile = isMobile();
    const mainMargin = mobile ? 10 : 70;
    const maWidth = mobile ? 59 : 89;
    const manhWidth = mobile ? 126 : 188;
    const footerHeight = mobile ? 220 : 150;

    var fixedStart = window.innerHeight * 0.6; // --size-about-intro-text-initial-top (120vh) - figure height (60vh)
    
    var makiStart = fixedStart + 30;
    var makiDistance = (window.innerWidth / 2) - maWidth - mainMargin + 18; // No idea where 18 comes from

    var rkStart = makiStart + makiDistance + 30;
    var rkDistance = maWidth; 

    var manhDistance = manhWidth + mainMargin;

    var kiStart = rkStart + mainMargin;
    var kiDistance = manhWidth; 

    var gapBetweenEndOfIntroAndScrollable = 1000;
    var markHeight = mobile ? window.innerHeight * 2.5 : window.innerHeight * 1.5;
    var thresholdBackgroundTransitionStart = kiStart + kiDistance + gapBetweenEndOfIntroAndScrollable + markHeight;
    var thresholdBackgroundTransitionStop = window.innerHeight * 0.9;

    const [fixed, setFixed] = useState(false);
    const fixedClassname = fixed ? 'fixed' : '';

    const [makiOpacity, setMakiOpacity] = useState(0);

    const [introScrollableScrollPosition, setIntroScrollableScrollPosition] = useState(0);
    const [introScrollableScrollPosition2, setIntroScrollableScrollPosition2] = useState(0);
    const [introScrollableScrollPosition3, setIntroScrollableScrollPosition3] = useState(0);

    const distanceBetweenMaki = useScroll(makiStart, makiDistance, [ mobile ]);
    const rkLeft = useScroll(rkStart, rkDistance, [ mobile ]);
    const rkOpacity = rkLeft / rkDistance;
    const manhRight = useScroll(rkStart, manhDistance, [ mobile ]);
    const kiRight = useScroll(kiStart, kiDistance, [ mobile ]);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const aboutIntroScrollableHeight = 150;
    const aboutIntroScrollableInitialTop = window.innerHeight * 1.8 + 30 + (window.innerWidth / 2) - maWidth - mainMargin + 18 + 30 + manhWidth + mainMargin ;
    const aboutIntroScrollableInitialTop2 = aboutIntroScrollableInitialTop + aboutIntroScrollableHeight;
    const aboutIntroScrollableInitialTop3 = aboutIntroScrollableInitialTop2 + aboutIntroScrollableHeight;
    const markAndKimAnhInitialTop = aboutIntroScrollableInitialTop + gapBetweenEndOfIntroAndScrollable;

    const fixedHeight = markAndKimAnhInitialTop;
    const scrollableHeight = window.innerHeight + window.innerHeight * 0.9 + window.innerHeight + footerHeight; // Mark height + background transition height + Kim Anh height + footer height
    const aboutTotalHeight = fixedHeight + scrollableHeight;


    useEffect(() => {
        const onScroll = () => {
            var scrollTop = window.scrollY;
            
            if (scrollTop > fixedStart && !fixed) {
                setFixed(true);
            }
            else if (scrollTop <= fixedStart  && fixed) {
                setFixed(false);
            }
            
            setMakiOpacity(Math.min(scrollTop / fixedStart, 1));
            
            const backgroundTransitionScroll = Math.min(Math.max(scrollTop - thresholdBackgroundTransitionStart, 0), thresholdBackgroundTransitionStop);
            setRed((backgroundTransitionScroll * 254 / window.innerHeight * 0.9) + 47);
            setGreen((backgroundTransitionScroll * 255 / window.innerHeight * 0.9) + 79);
            setBlue((backgroundTransitionScroll * 255 / window.innerHeight * 0.9) + 79);

            setIntroScrollableScrollPosition(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop, 0), window.innerHeight * 0.6));
            setIntroScrollableScrollPosition2(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop2, 0), window.innerHeight * 0.6));
            setIntroScrollableScrollPosition3(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop3, 0), window.innerHeight * 0.6));
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ fixed, mobile ]);

    return (
        <div className={`about`} style={{ height: aboutTotalHeight }} id={`top`}>
            <div className={`about-intro-fixed`}>
                <Header/>
                <SectionHeader title={new TextModel('About us', 'À propos')} subtitle={new TextModel('', 'de nous')} />
                <AboutIntro/>
                <Scroll />
                <AboutIntroBackground />
            </div>
            <AboutMaki fixedClassname={fixedClassname} opacity={makiOpacity} 
                            middleSeparation={distanceBetweenMaki} 
                            rkLeft={rkLeft} rkOpacity={rkOpacity}
                            manhRight={manhRight} kiRight={kiRight} />
            
            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop}>
                <Text english='We are web designers and developers,' french='Nous sommes designers web et développeurs,'/>
                <br></br>
                <Text english='a bit British and a bit French.' french='un peu anglais et un peu français.'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition2} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop2}>
                <Text english='We learned by making every possible mistake,' french='Nous avons appris en commettant toutes les erreurs possibles,'/>
                <br></br>
                <Text english='but we write here what we took from it.' french='mais nous écrivons ici ce que nous en retenons.'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition3} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop3}>
                <Text english='We try inproving our skills every day,' french='Nous essayons de nous améliorer tous les jours,'/>
                <br></br>
                <Text english='and we hope to inspire you to design your own website.' french='et nous espérons vous inspirer à créer votre propre site web.'/>
            </AboutIntroScrollable>

            <div className={`about-mark-and-kim-anh`} style={{ top: markAndKimAnhInitialTop, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} >
                <Mark />
                <KimAnh />
                <BackToTop />
                <Footer noMarginTop />
            </div>
        </div>
    );
}

export default About;