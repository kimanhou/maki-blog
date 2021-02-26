import React from 'react';
import Text from '../../../LocalisationContext/Text';
import './VictoryScreen.scss';

interface IVictoryScreenProps {
    active : boolean;
    onClick : () => void;
}

const VictoryScreen : React.FC<IVictoryScreenProps> = props => {
    const victoryScreenActiveClassname = props.active ? 'active' : '';

    return (
        <div className={`victory-screen ${victoryScreenActiveClassname}`} onClick={props.onClick}>
            <Text english='Victory !' french='Victoire !'/>
            <div className="before"></div>
            <div className="after"></div>
        </div>
    );
}

export default VictoryScreen;