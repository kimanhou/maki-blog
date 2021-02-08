import React, { useState } from 'react';
import TextModel from '../../../../model/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import SectionHeader from '../../SectionHeader/SectionHeader';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import BigCharacter from '../BigCharacter/BigCharacter';
import './KimAnh.scss';
import Text from '../../LocalisationContext/Text';

interface IKimAnhProps {
}

const KimAnh : React.FC<IKimAnhProps> = props => {
    var [onActiveLeftClassname, setOnActiveLeftClassname] = useState('');
    var [onActiveRightClassname, setOnActiveRightClassname] = useState('');
    
    const onActiveLeft = () => {
        setOnActiveLeftClassname("active");
    }
    const onUnactiveLeft = () => {
        setOnActiveLeftClassname("");
    }

    const onActiveRight = () => {
        setOnActiveRightClassname("active");
    }
    const onUnactiveRight = () => {
        setOnActiveRightClassname("");
    }


    return (
        <div className={`about-kim-anh`} id={`kim-anh`}>
            <SectionHeader title={new TextModel('Meet Kim Anh', 'Portrait')} subtitle={new TextModel('', 'de Kim Anh')} />
            <div className={`about-kim-anh-container`}>
                <div className={`about-kim-anh-left ${onActiveLeftClassname}`}>
                    <ScreenDetector className={`screen-detector-about-kim-anh-left`} onActive={onActiveLeft} onUnactive={onUnactiveLeft}/> 
                    <div className={`about-kim-anh-corner`}></div>
                    <div className={`about-kim-anh-text`}>
                        <UnderlinedTitle line1={new TextModel('SQL guru', 'Guru en SQL')} line2={new TextModel('and Git master', 'et maître git')}/>
                        <div className={`about-kim-anh-text-body`}>
                            <BigCharacter character={new TextModel('H', 'B')} />
                            <p>
                                <Text english='i there! I am a web designer and developer with 4 years of experience. 
                                I am a fan of clean code and pure CSS animations, sprinkled with an artistic eye.' 
                                french="onjour ! Je suis designer web et développeure avec 4 ans d'expérience. 
                                J'aime le code propre et les animations toutes en CSS, le tout saupoudré d'une vision artistique."/> <br></br>
                                <Text english='I am a tiny house enthusiast and a nomad. 
                                Pianist since childhood, I took pottery classes as a kid, before hipsters declared it was cool.
                                When I am not browsing Instagram for inspiration, I am trying new recipes of homemade lip balm.' 
                                french="Je suis une fan de tiny house et de voyages au bout du monde. 
                                Pianiste depuis l'enfance, j'ai aussi pris des cours de poterie avant que ça ne devienne cool.
                                Quand je ne suis pas en train de chercher l'inspiration sur Instagram, je teste des recettes de baume à lèvres maison." />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`about-kim-anh-right ${onActiveRightClassname}`}>
                    <ScreenDetector className={`screen-detector-about-kim-anh-right`} onActive={onActiveRight} onUnactive={onUnactiveRight}/> 
                    <div className={`about-kim-anh-photo`}>
                        <div className={`about-kim-anh-photo-signature`}>
                            <Text english='Drawing by Magali Pham' french='Dessin de Magali Pham' />
                        </div>
                    </div>
                    <div className={`about-kim-anh-image-cover`}></div>
                </div>             
            </div>
        </div>
    );
}

export default KimAnh;