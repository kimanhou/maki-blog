import React from 'react';
import { getBackgroundColor16x16AmongUs, getBackgroundColor16x16Charmander, getBackgroundColor16x16Pokeball, getBackgroundColor16x16Yoshi, getBackgroundColor32x32, getBackgroundColor4x4, getBackgroundColor8x8 } from './GetBackgroundColor';
import Game, { Drawing } from './models/Game';
import GameCell from './models/GameCell';

const renderGameCell = (gameCell : GameCell) => {
    return <div className={`game-cell`} style={{ backgroundColor: gameCell.backgroundColor }}></div>;
}

const renderGameRow = (gameCells : GameCell[]) => {
    return (
        <div className={`game-row`}>
            {gameCells.map(t => renderGameCell(t))}
        </div>
    );
}

export const renderGame = (game : Game) => {
    return (
        <>
            {game.cells.map(row => renderGameRow(row))}
        </>
    );
}

export const getBackgroundColorFunction = (drawing : Drawing) : ((x : number, y : number) => string) => {
    switch (drawing) {
        case Drawing.FOUR :
            return getBackgroundColor4x4;
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
            return getBackgroundColor32x32;
        default:
            return getBackgroundColor4x4;
    }
}

export const getSize = (drawing : Drawing) => {
    switch (drawing) {
        case Drawing.FOUR:
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