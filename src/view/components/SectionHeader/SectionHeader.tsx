import React, { useContext, useEffect, useRef } from 'react';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import Text from '../LocalisationContext/Text';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './SectionHeader.scss';

interface ISectionHeaderProps {
    englishTitle : string;
    frenchTitle : string;
    englishSubtitle : string;
    frenchSubtitle : string;
    isColorWhite ?: boolean;
}

const SectionHeader : React.FunctionComponent<ISectionHeaderProps> = props => {
    const colorWhiteClassName = props.isColorWhite ? 'color-white' : '';

    var localisation = useContext(LocalValueContext);
    const isEnglish = localisation == Local.EN;
    const isFrench = localisation == Local.FR;
    
    const formatTitle = (title : string) => {
        return title.split('').map((t, index) => {
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
            <div className={`section-header-title`}>
                    {isEnglish && formatTitle(props.englishTitle)}
                    {isFrench && formatTitle(props.frenchTitle)}
            </div>
            {props.englishSubtitle !== "" && props.frenchSubtitle !== "" &&
                <div className={`section-header-subtitle`}>
                    <div className={`section-header-subtitle-text`}>
                        <Text english={props.englishSubtitle} french={props.frenchSubtitle}/>
                    </div>
                </div>
            }
            <ScreenDetector className={`screen-detector-section-header`} onActive={setAnimation} />
        </div>
    )
}
export default SectionHeader;