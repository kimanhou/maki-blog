import React from 'react';
import getBackgroundColor from '../../../hooks/UseBackgroundColor';
import { Drawing } from './French';
import Game from './models/Game';
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

const getBackgroundColor4x4 = (x : number, y : number) => {
    return (getBackgroundColor(Math.min(x, y), 3));
}

const getBackgroundColor8x8 = (x : number, y : number) : string => {
    const redCoordinates = [ { x : 4, y : 3 } ];
    const blackCoordinates = [ { x : 3, y : 4 }, { x : 3, y : 7 } ];
    const offBlackCoordinates = [ { x : 0, y : 1 }, { x : 0, y : 2 }, { x : 0, y : 7 } ];
    const brownCoordinates = [ { x : 5, y : 1 }, { x : 6, y : 1 }, { x : 7, y : 4 }, { x : 7, y : 5 } ];
    const yellowCoordinates = [
        { x : 1, y : 2 },
        { x : 2, y : 3 }, { x : 2, y : 4 }, { x : 2, y : 5 }, { x : 2, y : 6 },
        { x : 3, y : 3 }, { x : 3, y : 5 }, { x : 3, y : 6 },
        { x : 4, y : 4 }, { x : 4, y : 5 }, { x : 4, y : 6 },
        { x : 5, y : 3 },
        { x : 6, y : 2 }, { x : 6, y : 4 }, { x : 6, y : 6 },
        { x : 7, y : 2 }
    ];
    const darkYellowCoordinates = [
        { x : 1, y : 3 }, { x : 1, y : 7 },
        { x : 2, y : 7 },
        { x : 3, y : 0 }, { x : 3, y : 1 },
        { x : 4, y : 0 }, { x : 4, y : 1 }, { x : 4, y : 7 },
        { x : 5, y : 4 }, { x : 5, y : 5 }, { x : 5, y : 6 },
        { x : 6, y : 3 }, { x : 6, y : 5 },
        { x : 7, y : 3 }, { x : 7, y : 6 }
    ];

    if (isInList(x, y, redCoordinates)) {
        return 'red';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'black';
    }
    if (isInList(x, y, offBlackCoordinates)) {
        return 'var(--color-off-black)';
    }
    if (isInList(x, y, brownCoordinates)) {
        return 'rgb(197,109,26)';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    if (isInList(x, y, darkYellowCoordinates)) {
        return 'rgb(253,152,39)';
    }
    return '';
}

const getBackgroundColor16x16Pokeball = (x : number, y : number) => {
    const blackCoordinates = [ 
        {x : 1, y: 6}, {x : 1, y: 7}, {x : 1, y: 8}, {x : 1, y: 9},
        {x : 2, y: 4}, {x : 2, y: 5}, {x : 2, y: 10}, {x : 2, y: 11},
        {x : 3, y: 3}, {x : 3, y: 12},
        {x : 4, y: 2}, {x : 4, y: 12}, {x : 4, y: 13},
        {x : 5, y: 2}, {x : 5, y: 13},
        {x : 6, y: 1}, {x : 6, y: 14},
        {x : 7, y: 1}, {x : 7, y: 2}, {x : 7, y: 3}, {x : 7, y: 8}, {x : 7, y: 9}, {x : 7, y: 10}, {x : 7, y: 14},
        {x : 8, y: 1}, {x : 8, y: 2}, {x : 8, y: 3}, {x : 8, y: 4}, {x : 8, y: 7}, {x : 8, y: 11}, {x : 8, y: 14},
        {x : 9, y: 1}, {x : 9, y: 5}, {x : 9, y: 6}, {x : 9, y: 7}, {x : 9, y: 11}, {x : 9, y: 12}, {x : 9, y: 13}, {x : 9, y: 14},
        {x : 10, y: 2}, {x : 10, y: 6}, {x : 10, y: 7}, {x : 10, y: 11}, {x : 10, y: 13},
        {x : 11, y: 2}, {x : 11, y: 8}, {x : 11, y: 9}, {x : 11, y: 10}, {x : 11, y: 13},
        {x : 12, y: 3}, {x : 12, y: 12},
        {x : 13, y: 4}, {x : 13, y: 5}, {x : 13, y: 10}, {x : 13, y: 11},
        {x : 14, y: 6}, {x : 14, y: 7}, {x : 14, y: 8}, {x : 14, y: 9}
    ];

    const whiteCoordinates = [ { x : 4, y : 5 }, { x : 5, y : 4 } ];
    const greyCoordinates = [ { x : 9, y : 2 }, { x : 11, y : 3 }, { x : 12, y : 4 }, { x : 13, y : 6 }, { x : 13, y : 7 }];
    const redCoordinates = [ 
        { x : 2, y : 6 }, { x : 2, y : 7 }, { x : 2, y : 8 }, { x : 2, y : 9 },
        { x : 3, y : 4 }, { x : 3, y : 5 }, { x : 3, y : 6 }, { x : 3, y : 7 }, { x : 3, y : 8 }, { x : 3, y : 9 }, { x : 3, y : 10 }, { x : 3, y : 11 },
        { x : 4, y : 3 }, { x : 4, y : 4 }, { x : 4, y : 6 }, { x : 4, y : 7 }, { x : 4, y : 8 }, { x : 4, y : 9 }, { x : 4, y : 10 }, { x : 4, y : 11 },
        { x : 5, y : 3 }, { x : 5, y : 5 }, { x : 5, y : 6 }, { x : 5, y : 7 }, { x : 5, y : 8 }, { x : 5, y : 9 }, { x : 5, y : 10 }, { x : 5, y : 11 }, { x : 5, y : 12 },
        { x : 6, y : 2 }, { x : 6, y : 3 }, { x : 6, y : 4 }, { x : 6, y : 5 }, { x : 6, y : 6 }, { x : 6, y : 7 }, { x : 6, y : 8 }, { x : 6, y : 9 }, { x : 6, y : 10 }, { x : 6, y : 11 }, { x : 6, y : 12 }, { x : 6, y : 13 }, { x : 6, y : 14 },
        { x : 7, y : 4 }, { x : 7, y : 5 }, { x : 7, y : 6 }, { x : 7, y : 7 }, { x : 7, y : 11 }, { x : 7, y : 12 }, { x : 7, y : 13 },
        { x : 8, y : 5 }, { x : 8, y : 6 }, { x : 8, y : 12 }, { x : 8, y : 13 }
    ];

    if (isInList(x, y, blackCoordinates)) {
        return 'black';
    }
    if (isInList(x, y, whiteCoordinates)) {
        return 'white';
    }
    if (isInList(x, y, greyCoordinates)) {
        return 'rgb(158,158,158)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'rgb(229,57,53)';
    }
    return '';
}

const getBackgroundColor16x16Charmander = (x : number, y : number) => {
    const blackCoordinates = [ 
        {x : 0, y: 1}, {x : 0, y: 6}, {x : 0, y: 14},
        {x : 1, y: 0}, {x : 1, y: 7}, {x : 1, y: 14},
        {x : 2, y: 0}, {x : 2, y: 7}, {x : 2, y: 14},
        {x : 3, y: 8}, {x : 3, y: 13},
        {x : 4, y: 4}, {x : 4, y: 8}, {x : 4, y: 13},
        {x : 5, y: 3}, {x : 5, y: 4}, {x : 5, y: 9}, {x : 5, y: 13},
        {x : 6, y: 3}, {x : 6, y: 4}, {x : 6, y: 9}, {x : 6, y: 14},
        {x : 7, y: 10}, {x : 7, y: 14},
        {x : 8, y: 0}, {x : 8, y: 1}, {x : 8, y: 11}, {x : 8, y: 13},
        {x : 9, y: 2}, {x : 9, y: 3}, {x : 9, y: 4}, {x : 9, y: 7}, {x : 9, y: 11}, {x : 9, y: 12}, {x : 9, y: 15},
        {x : 10, y: 3}, {x : 10, y: 6}, {x : 10, y: 12}, {x : 10, y: 15},
        {x : 11, y: 3}, {x : 11, y: 7}, {x : 11, y: 8}, {x : 11, y: 12}, {x : 11, y: 14},
        {x : 12, y: 2}, {x : 12, y: 4}, {x : 12, y: 12}, {x : 12, y: 13},
        {x : 13, y: 3}, {x : 13, y: 4}, {x : 13, y: 5}, {x : 13, y: 11}, {x : 13, y: 12},
        {x : 14, y: 6}, {x : 14, y: 7}, {x : 14, y: 8}, {x : 14, y: 10}, {x : 14, y: 11},
        {x : 15, y: 7}, {x : 15, y: 11}
    ];

    const orangeCoordinates = [ 
        {x : 0, y: 2}, {x : 0, y: 3}, {x : 0, y: 4}, {x : 0, y: 5},
        {x : 1, y: 1}, {x : 1, y: 2}, {x : 1, y: 3}, {x : 1, y: 4}, {x : 1, y: 5}, {x : 1, y: 6},
        {x : 2, y: 1}, {x : 2, y: 2}, {x : 2, y: 3}, {x : 2, y: 4}, {x : 2, y: 5}, {x : 2, y: 6},
        {x : 3, y: 0}, {x : 3, y: 1}, {x : 3, y: 2}, {x : 3, y: 3}, {x : 3, y: 4}, {x : 3, y: 5}, {x : 3, y: 6}, {x : 3, y: 7},
        {x : 4, y: 0}, {x : 4, y: 1}, {x : 4, y: 2}, {x : 4, y: 5}, {x : 4, y: 6}, {x : 4, y: 7}, {x : 4, y: 15},
        {x : 5, y: 0}, {x : 5, y: 1}, {x : 5, y: 2}, {x : 5, y: 5}, {x : 5, y: 6}, {x : 5, y: 7}, {x : 5, y: 8},
        {x : 6, y: 0}, {x : 6, y: 1}, {x : 6, y: 2}, {x : 6, y: 5}, {x : 6, y: 6}, {x : 6, y: 7}, {x : 6, y: 8},
        {x : 7, y: 0}, {x : 7, y: 1}, {x : 7, y: 2}, {x : 7, y: 3}, {x : 7, y: 4}, {x : 7, y: 5}, {x : 7, y: 6}, {x : 7, y: 7}, {x : 7, y: 8}, {x : 7, y: 9}, {x : 7, y: 15},
        {x : 8, y: 2}, {x : 8, y: 3}, {x : 8, y: 4}, {x : 8, y: 5}, {x : 8, y: 6}, {x : 8, y: 7}, {x : 8, y: 8}, {x : 8, y: 9}, {x : 8, y: 10}, {x : 8, y: 14}, {x : 8, y: 15},
        {x : 9, y: 5}, {x : 9, y: 6}, {x : 9, y: 8}, {x : 9, y: 9}, {x : 9, y: 10}, {x : 9, y: 13}, {x : 9, y: 14},
        {x : 10, y: 7}, {x : 10, y: 8}, {x : 10, y: 9}, {x : 10, y: 10}, {x : 10, y: 11}, {x : 10, y: 13}, {x : 10, y: 14},
        {x : 11, y: 9}, {x : 11, y: 10}, {x : 11, y: 11}, {x : 11, y: 13}, 
        {x : 12, y: 8}, {x : 12, y: 9}, {x : 12, y: 10}, {x : 12, y: 11},
        {x : 13, y: 8}, {x : 13, y: 9}, {x : 13, y: 10},
        {x : 14, y: 9},
        {x : 15, y: 9}
    ];

    const whiteCoordinates = [ { x : 4, y : 3 } ];
    const yellowCoordinates = [ 
        { x : 5, y : 15 }, 
        { x : 6, y : 15 }, 
        { x : 10, y : 4 }, { x : 10, y : 5 }, 
        { x : 11, y : 4 }, { x : 11, y : 5 }, { x : 11, y : 6 },
        { x : 12, y : 5 }, { x : 12, y : 6 }, { x : 12, y : 7 },
        { x : 13, y : 6 }, { x : 13, y : 7 },
    ];
    const redCoordinates = [ 
        { x : 0, y : 15 }, { x : 1, y : 15 }, { x : 2, y : 15 }, { x : 3, y : 15 },
        { x : 3, y : 14 }, { x : 4, y : 14 }, { x : 5, y : 14 }
    ];

    if (isInList(x, y, whiteCoordinates)) {
        return 'white';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'rgb(188,48,59)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-off-black)';
    }
    if (isInList(x, y, orangeCoordinates)) {
        return 'rgb(253,125,72)';
    }
    return '';
}

const getBackgroundColor32x32 = (x : number, y : number) => {
    return '';
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
        case Drawing.THIRTYTWO :
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
            return 16;
        case Drawing.THIRTYTWO:
            return 32;
        default:
            return 4;
    }
}

const isInList = (x : number, y : number, myArray : {x : number, y : number}[]) => {
    if (myArray.find(t => t.x == x && t.y == y)) {
        return true;
    }
    return false;
}