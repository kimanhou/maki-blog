import React from 'react';
import './GameCellDesktop.scss';

interface IGameCellDesktopProps {
    onDrop : () => void;
    onDragStart : () => void;
    background : string;
}

const GameCellDesktop : React.FC<IGameCellDesktopProps> = props => {
    return (
        <div className={`game-cell`} onDrop={props.onDrop} onDragOver={e => e.preventDefault()}>
            <div className={`game-cell-inside`} draggable onDragStart={props.onDragStart} style={{ backgroundColor: props.background }} ></div>
        </div>
    );
}

export default GameCellDesktop;