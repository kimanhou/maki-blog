import React, { useState } from 'react';
import { isMobile } from '../../../hooks/UseMediaQuery';
import GameCellDesktop from './components/GameCellDesktop';
import GameCellMobile from './components/GameCellMobile';
import { getBackgroundColor16x16AmongUs, getBackgroundColor16x16Charmander, getBackgroundColor16x16Pokeball, getBackgroundColor16x16Yoshi, getBackgroundColor32x32Pikachu, getBackgroundColor4x4, getBackgroundColor4x4Pacman, getBackgroundColor4x4SouthPark, getBackgroundColor4x4Tarzan, getBackgroundColor8x8Ghost, getBackgroundColor8x8Kirby, getBackgroundColor8x8Pikachu, getBackgroundColor8x8SpaceInvader } from './GetBackgroundColor';
import Game, { Drawing } from './models/Game';
import GameCell from './models/GameCell';

const renderGameCell = (gameCell : GameCell, game : Game, setGame : (game : Game) => void, originCell : GameCell | null, setOriginCell : (originCell : GameCell | null) => void) => {
    const onDragStart = () => {
        setOriginCell(gameCell);
    }

    const onDrop = () => {
        if (originCell != null) {
            setGame(game.switchCells(originCell, gameCell));
            setOriginCell(null);
        }
    }

    const isOriginCell = originCell != null && gameCell == originCell;
    const onClickMobile = () => {
        if (originCell != null) {
            setGame(game.switchCells(originCell, gameCell));
            setOriginCell(null);
        }
        else {
            setOriginCell(gameCell);
        }
    }

    // const mobile = isMobile();
    // if (mobile) {
    //     return <GameCellMobile background={gameCell.backgroundColor} onClick={onClickMobile} isOriginCell={isOriginCell}/>;
    // }
    // else {
    //     return <GameCellDesktop onDrop={onDrop} onDragStart={onDragStart} background={gameCell.backgroundColor}/>;
    // }
    return <GameCellDesktop onDrop={onDrop} onDragStart={onDragStart} background={gameCell.backgroundColor}/>;
}

const renderGameRow = (gameCells : GameCell[], game : Game, setGame : (game : Game) => void, originCell : GameCell | null, setOriginCell : (originCell : GameCell | null) => void) => {
    return (
        <div className={`game-row`}>
            {gameCells.map(t => renderGameCell(t, game, setGame, originCell, setOriginCell))}
        </div>
    );
}

export const renderGame = (game : Game, setGame : (game : Game) => void) => {
    const [originCell, setOriginCell] = useState<GameCell | null>(null);
    return (
        <>
            {game.cells.map(row => renderGameRow(row, game, setGame, originCell, setOriginCell))}
        </>
    );
}

export const getBackgroundColorFunction = (drawing : Drawing) : ((x : number, y : number) => string) => {
    switch (drawing) {
        case Drawing.FOUR :
            return getBackgroundColor4x4;
        case Drawing.FOUR_PACMAN :
            return getBackgroundColor4x4Pacman;
        case Drawing.FOUR_SOUTH_PARK :
            return getBackgroundColor4x4SouthPark;
        case Drawing.FOUR_TARZAN :
            return getBackgroundColor4x4Tarzan;
        case Drawing.EIGHT_PIKACHU :
            return getBackgroundColor8x8Pikachu;
        case Drawing.EIGHT_KIRBY :
            return getBackgroundColor8x8Kirby;
        case Drawing.EIGHT_SPACE_INVADER :
            return getBackgroundColor8x8SpaceInvader;
        case Drawing.EIGHT_GHOST :
            return getBackgroundColor8x8Ghost;
        case Drawing.SIXTEEN_POKEBALL :
            return getBackgroundColor16x16Pokeball;
        case Drawing.SIXTEEN_CHARMANDER :
            return getBackgroundColor16x16Charmander;
        case Drawing.SIXTEEN_AMONG_US :
            return getBackgroundColor16x16AmongUs;
        case Drawing.SIXTEEN_YOSHI :
            return getBackgroundColor16x16Yoshi;
        case Drawing.THIRTYTWO_PIKACHU :
            return getBackgroundColor32x32Pikachu;
        default:
            return getBackgroundColor4x4;
    }
}

export const getSize = (drawing : Drawing) => {
    switch (drawing) {
        case Drawing.FOUR:
        case Drawing.FOUR_PACMAN:
        case Drawing.FOUR_SOUTH_PARK:
        case Drawing.FOUR_TARZAN:
            return 4;
        case Drawing.EIGHT_PIKACHU:
        case Drawing.EIGHT_KIRBY:
        case Drawing.EIGHT_SPACE_INVADER:
        case Drawing.EIGHT_GHOST:
            return 8;
        case Drawing.SIXTEEN_POKEBALL:
        case Drawing.SIXTEEN_CHARMANDER:
        case Drawing.SIXTEEN_AMONG_US:
        case Drawing.SIXTEEN_YOSHI:
            return 16;
        case Drawing.THIRTYTWO_PIKACHU:
            return 32;
        default:
            return 4;
    }
}