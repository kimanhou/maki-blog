import React, { useState } from 'react';
import Text from '../../../../model/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import SectionHeader from '../../SectionHeader/SectionHeader';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import './KimAnh.scss';

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
            <SectionHeader title={new Text('Meet Kim Anh', 'à la rencontre')} subtitle={new Text('front-end developer', 'de Kim Anh')} />
            <div className={`about-kim-anh-container`}>
                <div className={`about-kim-anh-left ${onActiveLeftClassname}`}>
                    <ScreenDetector className={`screen-detector-about-kim-anh-left`} onActive={onActiveLeft} onUnactive={onUnactiveLeft}/> 
                    <div className={`about-kim-anh-corner`}></div>
                    <div className={`about-kim-anh-text`}>
                        <UnderlinedTitle line1={new Text('Front-end', 'Développeur')} line2={new Text('developer', 'front-end')}/>
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
                <div className={`about-kim-anh-right ${onActiveRightClassname}`}>
                    <ScreenDetector className={`screen-detector-about-kim-anh-right`} onActive={onActiveRight} onUnactive={onUnactiveRight}/> 
                    <div className={`about-kim-anh-photo`}></div>
                    <div className={`about-kim-anh-image-cover`}></div>
                </div>             
            </div>
        </div>
    );
}

export default KimAnh;