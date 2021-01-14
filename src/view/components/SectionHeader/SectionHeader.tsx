import React, { useContext } from 'react';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import Text from '../LocalisationContext/Text';
import './SectionHeader.scss';

interface ISectionHeaderProps {
    englishTitle : string;
    frenchTitle : string;
    englishSubtitle : string;
    frenchSubtitle : string;
}

const SectionHeader : React.FunctionComponent<ISectionHeaderProps> = props => {
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

    return (
        <div className={`section-header`}>
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
        </div>
    )
}
export default SectionHeader;