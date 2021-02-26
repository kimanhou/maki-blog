import React from 'react';
import Game from '../models/Game';
import GameCellModel from '../models/GameCell';
import GameCell from './GameCell';
import './GameRow.scss';

interface IGameRowProps {
    gameCells : GameCellModel[];
    game : Game;
    setGame : (game : Game) => void;
    originCell : GameCellModel | null;
    setOriginCell : (originCell : GameCellModel | null) => void;
}

const GameRow : React.FC<IGameRowProps> = props => {
    return (
        <div className={`game-row`}>
            {props.gameCells.map(t => <GameCell gameCell={t} game={props.game} setGame={props.setGame} originCell={props.originCell} setOriginCell={props.setOriginCell}/>)}
        </div>
    );
}

export default GameRow;