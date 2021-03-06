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

    var gapBetweenEndOfIntroAndScrollable = mobile ? 1500 : 1000;
    var markHeight = mobile ? window.innerHeight * 2.5 : window.innerHeight * 1.5;
    var thresholdBackgroundTransitionStart = kiStart + kiDistance + gapBetweenEndOfIntroAndScrollable + markHeight;
    var thresholdBackgroundTransitionStop = window.innerHeight * 0.9;

    const [fixed, setFixed] = useState(false);
    const fixedClassname = fixed ? 'fixed' : '';

    const [makiOpacity, setMakiOpacity] = useState(0);

    const [introScrollableScrollPosition, setIntroScrollableScrollPosition] = useState(0);
    const [introScrollableScrollPosition2, setIntroScrollableScrollPosition2] = useState(0);
    const [introScrollableScrollPosition3, setIntroScrollableScrollPosition3] = useState(0);
    const [introScrollableScrollPosition4, setIntroScrollableScrollPosition4] = useState(0);
    const [introScrollableScrollPosition5, setIntroScrollableScrollPosition5] = useState(0);

    const distanceBetweenMaki = useScroll(makiStart, makiDistance, [ mobile ]);
    const rkLeft = useScroll(rkStart, rkDistance, [ mobile ]);
    const rkOpacity = rkLeft / rkDistance;
    const manhRight = useScroll(rkStart, manhDistance, [ mobile ]);
    const kiRight = useScroll(kiStart, kiDistance, [ mobile ]);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const aboutIntroScrollableHeight = mobile ? 200 : 100;
    const aboutIntroScrollableInitialTop = window.innerHeight * 1.8 + 30 + (window.innerWidth / 2) - maWidth - mainMargin + 18 + 30 + manhWidth + mainMargin ;
    const aboutIntroScrollableInitialTop2 = aboutIntroScrollableInitialTop + aboutIntroScrollableHeight;
    const aboutIntroScrollableInitialTop3 = aboutIntroScrollableInitialTop2 + aboutIntroScrollableHeight;
    const aboutIntroScrollableInitialTop4 = aboutIntroScrollableInitialTop3 + aboutIntroScrollableHeight;
    const aboutIntroScrollableInitialTop5 = aboutIntroScrollableInitialTop4 + aboutIntroScrollableHeight;
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
            setIntroScrollableScrollPosition4(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop4, 0), window.innerHeight * 0.6));
            setIntroScrollableScrollPosition5(Math.min(Math.max(scrollTop + window.innerHeight - aboutIntroScrollableInitialTop5, 0), window.innerHeight * 0.6));
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
                <Text english='We are freelance web designers and developers.' 
                    french='Nous sommes designers web et développeurs auto-entrepreneurs.'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition2} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop2}>
                <Text english='We have honed our skills for years working for big companies,' 
                    french='Nous avons perfectionné nos compétences depuis des années au service de grandes entreprises,'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition3} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop3}>
                <Text english='and decided to take a break from that hectic lifestyle to travel the world and build out our own projects.' 
                    french='avant de quitter ce style de vie harassant pour parcourir le monde et construire nos propres projets.'/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition4} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop4}>
                <Text english='Since then we have launched websites, web games, learned web design, infrastructure and much more.' 
                    french="Depuis lors, nous avons lancé des sites, des jeux, appris le web design, l'infrastructure et bien plus encore."/>
            </AboutIntroScrollable>

            <AboutIntroScrollable scrollPosition={introScrollableScrollPosition5} figureHeight={window.innerHeight * 0.6} initialTop={aboutIntroScrollableInitialTop5}>
                <Text english="It's a long, ongoing but very rewarding journey and we have decided to share what we learn along the way." 
                    french="C'est un long et très enrichissant voyage et nous avons décidé de vous partager ici ce que nous apprenons en chemin."/>
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