import React, { useContext, useEffect, useRef } from 'react';
import TextModel from '../../../model/Text';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import Text from '../LocalisationContext/Text';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './SectionHeader.scss';

interface ISectionHeaderProps {
    title : TextModel;
    subtitle : TextModel;
    isColorWhite ?: boolean;
}

const SectionHeader : React.FunctionComponent<ISectionHeaderProps> = props => {
    const colorWhiteClassName = props.isColorWhite ? 'color-white' : '';

    var localisation = useContext(LocalValueContext);
    const formatTitle = (text : TextModel) => {
        return text.getText(localisation).split('').map((t, index) => {
            if (index % 2) {
                return <span className={`up`}>
                            {t}
                            <span className={`moving`}>{t}</span>
                        </span>
            }
            else {
                return <span className={`down`}>
                            {t}
                            <span className={`moving`}>{t}</span>
                        </span>
            }
        })
    }

    const ref = useRef<HTMLDivElement>(null);
    const setAnimation = () => {
        if(ref.current != null && !ref.current.classList.contains("animate")){
            ref.current.classList.add("animate");
        }
    }

    return (
        <div className={`section-header ${colorWhiteClassName}`} ref={ref}>
            <h1 className={`section-header-title`}>
                    {formatTitle(props.title)}
            </h1>
            {props.subtitle.getText(localisation) !== "" &&
                <h2 className={`section-header-subtitle`}>
                    <div className={`section-header-subtitle-text`}>
                        <Text english={props.subtitle.english} french={props.subtitle.french}/>
                    </div>
                </h2>
            }
            <ScreenDetector className={`screen-detector-section-header`} onActive={setAnimation} />
        </div>
    )
}
export default SectionHeader;