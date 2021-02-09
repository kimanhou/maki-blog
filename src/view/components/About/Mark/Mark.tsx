import React, { useState } from 'react';
import TextModel from '../../../../model/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './Mark.scss';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import BigCharacter from '../BigCharacter/BigCharacter';
import Text from '../../LocalisationContext/Text';

interface IMarkProps {
}

const Mark : React.FC<IMarkProps> = props => {
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
        <div className={`about-mark`} id={`mark`}>
            <SectionHeader title={new TextModel('Meet Mark', 'Portrait')} subtitle={new TextModel('', 'de Mark')} isColorWhite/>
            <div className={`about-mark-container`}>
                <div className={`about-mark-left ${onActiveLeftClassname}`}>
                    <ScreenDetector className={`screen-detector-about-mark-left`} onActive={onActiveLeft} onUnactive={onUnactiveLeft}/>
                    <div className={`about-mark-photo`}>
                        <div className={`about-mark-photo-signature`}>
                            <Text english='Drawing by Magali Pham' french='Dessin de Magali Pham' />
                        </div>
                    </div>
                    <div className={`about-mark-image-cover`}></div>
                </div>
                <div className={`about-mark-right ${onActiveRightClassname}`}>
                    <ScreenDetector className={`screen-detector-about-mark-right`} onActive={onActiveRight} onUnactive={onUnactiveRight}/>
                    <div className={`about-mark-corner`}></div>
                    <div className={`about-mark-text`}>
                        <UnderlinedTitle line1={new TextModel('Web developer', 'Développeur')} line2={new TextModel('and designer', 'et designer')} colorWhite/>
                        <div className={`about-mark-text-body`}>
                            <BigCharacter character={new TextModel('G', 'S')} />
                            <p>
                                <Text english="reetings!  I am a full-stack dev with a few years of experience. 
                                    I am passionate about building and bringing my ideas to life. 
                                    I am an entrepreneur at heart and I always have a project in the works. 
                                    Whether it's a new kind of app or a simple web game, I am always committed at 200%."
                                    french="alut ! Je suis un dev full-stack avec quelques année d'expérience sous le coude. 
                                    Ma passion à moi, c'est de construire et donner vie à mes idées. 
                                    Je suis entrepreneur dans l'âme et j'ai toujours un projet en court de dévelopement. 
                                    Que ce soit une appli d'un nouveau genre ou un simple jeu web qui me tient a coeur, je me donne toujours à 200%."/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mark;