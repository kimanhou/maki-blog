import React from 'react';
import { isMobile } from '../../../../hooks/UseMediaQuery';
import Game from '../models/Game';
import GameCellModel from '../models/GameCell';
import GameCellDesktop from './GameCellDesktop';
import GameCellMobile from './GameCellMobile';

interface IGameCellProps {
    gameCell : GameCellModel;
    game : Game;
    setGame : (game : Game) => void;
    originCell : GameCellModel | null;
    setOriginCell : (originCell : GameCellModel | null) => void;
}

const GameCell : React.FC<IGameCellProps> = props => {
    const onDragStart = () => {
        props.setOriginCell(props.gameCell);
    }

    const onDrop = () => {
        if (props.originCell != null) {
            props.setGame(props.game.switchCells(props.originCell, props.gameCell));
            props.setOriginCell(null);
        }
    }

    const isOriginCell = props.originCell != null && props.gameCell == props.originCell;
    const onClickMobile = () => {
        if (props.originCell != null) {
            props.setGame(props.game.switchCells(props.originCell, props.gameCell));
            props.setOriginCell(null);
        }
        else {
            props.setOriginCell(props.gameCell);
        }
    }

    const mobile = isMobile();
    if (mobile) {
        return <GameCellMobile background={props.gameCell.backgroundColor} onClick={onClickMobile} isOriginCell={isOriginCell}/>;
    }
    else {
        return <GameCellDesktop onDrop={onDrop} onDragStart={onDragStart} background={props.gameCell.backgroundColor}/>;
    }
}

export default GameCell;