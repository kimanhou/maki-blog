import React, { useState } from 'react';
import Text from '../../../../model/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './Mark.scss';

interface IMarkProps {
    initialTop : number;
}

const Mark : React.FC<IMarkProps> = props => {
    const image = require(`../../../../images/about/mark.jpg`);

    var [onActiveClassname, setOnActiveClassname] = useState('');
    const onActive = () => {
        setOnActiveClassname("active");
    }
    const onUnactive = () => {
        setOnActiveClassname("");
    }


    return (
        <div className={`intro-mark`} style={{ top: `${props.initialTop}px`}}>
            <SectionHeader title={new Text('Meet Mark', 'à la rencontre')} subtitle={new Text('back-end developer', 'de Mark')} isColorWhite/>
            <div className={`intro-mark-container ${onActiveClassname}`}>
                <ScreenDetector className={`screen-detector-about-mark-image`} onActive={onActive} onUnactive={onUnactive}/>
                <div className={`intro-mark-left`}>
                    <div className={`intro-mark-photo`}></div>
                    <div className={`intro-mark-image-cover`}></div>
                </div>
                <div className={`intro-mark-right`}>
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
                </div>
            </div>
        </div>
    );
}

export default Mark;