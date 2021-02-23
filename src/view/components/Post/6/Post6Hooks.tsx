import React, { useState } from 'react';
import { getBackgroundColor16x16AmongUs, getBackgroundColor16x16Charmander, getBackgroundColor16x16Pokeball, getBackgroundColor16x16Yoshi, getBackgroundColor32x32Pikachu, getBackgroundColor4x4, getBackgroundColor4x4Pacman, getBackgroundColor4x4SouthPark, getBackgroundColor4x4Tarzan, getBackgroundColor8x8 } from './GetBackgroundColor';
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

    return <div className={`game-cell`} onDrop={onDrop} onDragOver={e => e.preventDefault()}>
                <div className={`game-cell-inside`} draggable onDragStart={onDragStart} style={{ backgroundColor: gameCell.backgroundColor }} ></div>
            </div>;
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
            return getBackgroundColor8x8;
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