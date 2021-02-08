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
                            <BigCharacter character={new TextModel('G', 'B')} />
                            <p>reetings!
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus molestie lorem ac malesuada. 
                            Etiam in faucibus mi. Ut tincidunt luctus efficitur. Donec semper sapien quam, at cursus odio ornare ut. 
                            Mauris ac scelerisque velit, vel tempor magna. Duis non libero at massa mattis sodales. 
                            Praesent nec sapien finibus, accumsan orci vitae, aliquet velit. 
                            Donec semper iaculis turpis, vestibulum congue quam varius eu. 
                            Aenean dui nisl, laoreet at tellus ac, placerat maximus nulla. 
                            Nunc tristique tortor eu arcu volutpat, nec cursus nulla aliquet. 
                            Proin sodales, neque nec sollicitudin laoreet, ex nibh tempor nibh, ac viverra massa diam vel enim. 
                            Fusce vitae ex imperdiet, scelerisque purus faucibus, rhoncus metus. Aenean eget commodo lorem, ac congue mauris. 
                            Praesent venenatis, urna accumsan posuere rutrum, nisl nibh iaculis dolor, eu cursus felis ante eu lorem. 
                            Proin sagittis massa nec arcu rutrum vulputate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mark;