import React, { useState } from 'react';
import Game from '../models/Game';
import GameCell from '../models/GameCell';
import './GameComponent.scss';
import GameRow from './GameRow';

interface IGameComponentProps {
    classname : string;
    game : Game;
    setGame : (game : Game) => void;
    gameSize : number | string;
}

const GameComponent : React.FC<IGameComponentProps> = props => {
    const [originCell, setOriginCell] = useState<GameCell | null>(null);
    return (
        <div className={`game ${props.classname}`} style={{ height: props.gameSize, width: props.gameSize}}>
            {props.game.cells.map(row => <GameRow gameCells={row} game={props.game} setGame={props.setGame} originCell={originCell} setOriginCell={setOriginCell}/>)}
        </div>
    );
}

export default GameComponent;