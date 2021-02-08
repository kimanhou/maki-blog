import React, { useContext } from 'react';
import Text from '../../../../model/Text';
import { LocalValueContext } from '../../LocalisationContext/LocalContext';
import './BigCharacter.scss';

interface IBigCharacterProps {
    character : Text;
}

const BigCharacter : React.FC<IBigCharacterProps> = props => {
    var localisation = useContext(LocalValueContext);
    
    return (
        <div className={`big-character`}>
            {props.character.getText(localisation)}
        </div>
    );
}

export default BigCharacter;