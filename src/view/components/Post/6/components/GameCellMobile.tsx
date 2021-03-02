import React, { useState } from 'react';
import './GameCellMobile.scss';

interface IGameCellMobileProps {
    background : string;
    onClick : () => void;
    isOriginCell : boolean;
}

const GameCellMobile : React.FC<IGameCellMobileProps> = props => {
    const selectedClassname = props.isOriginCell ? 'selected' : '';
    const onClick = () => {
        props.onClick();
    }

    return (
        <div className={`game-cell-mobile ${selectedClassname}`} 
            style={{ backgroundColor: props.background }} 
            onClick={onClick}>
            
        </div>
    );
}

export default GameCellMobile;