import React, { useContext } from 'react';
import Local from '../../LocalisationContext/Local';
import { LocalValueContext, SetLocalContext } from '../../LocalisationContext/LocalContext';
import Text from '../../LocalisationContext/Text';
import './Languages.scss';

interface ILanguagesProps {
}

const Languages : React.FC<ILanguagesProps> = props => {
    var currentLanguage = useContext(LocalValueContext);
    var setLocalisation = useContext(SetLocalContext);

    const setLanguageTo = (localisation : Local) => {
      setLocalisation(localisation);
    }

    const onClick = () => {
        if (currentLanguage.getShortName() == 'EN') {
            setLanguageTo(Local.FR);
        }
        else {
            setLanguageTo(Local.EN);
        }
    }

    const imageEn = require(`../../../../images/uk-flag.png`);
    const imageFr = require(`../../../../images/french-flag.png`);
    
    return (
        <div className={`languages`} onClick={onClick}>
            <div className={`languages-title`}>
                <Text english="Language" french="Langue"/>
            </div>
            
            {currentLanguage.getShortName() == 'EN' && <img src={imageEn} />}
            {currentLanguage.getShortName() == 'FR' && <img src={imageFr} />}
        </div>
    );
}

export default Languages;