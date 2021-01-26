import React, { useContext, useState } from 'react';
import Text from '../../../../model/Text';
import { LocalValueContext } from '../../LocalisationContext/LocalContext';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import './UnderlinedTitle.scss';

interface IUnderlinedTitleProps {
    line1 : Text;
    line2 : Text;
    colorWhite ?: boolean;
}

const UnderlinedTitle : React.FC<IUnderlinedTitleProps> = props => {
    const colorWhiteClassname = props.colorWhite ? 'white' : '';
    var localisation = useContext(LocalValueContext);
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }

    return (
        <div className={`underlined-title ${onActiveClassname} ${colorWhiteClassname}`}>
            <div className={`underlined-title-line-1`}>
                {props.line1.getText(localisation)}
                <div className={`underlined-title-underline-1`}></div>
            </div>
            <div className={`underlined-title-line-2`}>
                {props.line2.getText(localisation)}
                <div className={`underlined-title-underline-2`}></div>
            </div>
            <ScreenDetector onActive={onActive} onUnactive={onUnactive} />
        </div>
    );
}

export default UnderlinedTitle;