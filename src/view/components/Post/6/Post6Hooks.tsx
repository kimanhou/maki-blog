import React from 'react';


const renderGameCellWithBackground = (gameRow : number, gameCellNumber : number, getBackground : (x : number, y : number) => string) => {
    return <div className={`game-cell`} style={{ backgroundColor: getBackground(gameRow, gameCellNumber)}}></div>;
}

const renderGameRow = (gameRow : number, numberOfCells : number) => {
    var foo = Array.from(Array(numberOfCells).keys());
    return <div className={`game-row`}>
        {foo.map(t => renderGameCellWithBackground(gameRow, t, getBackgroundColorFunction(numberOfCells)))}
    </div>
}

export const renderGameRows = (numberOfRows : number, numberOfCellsPerRow : number) => {
    var foo = Array.from(Array(numberOfRows).keys());
    return foo.map(t => renderGameRow(t, numberOfCellsPerRow))
}

// --color-super-light-green: rgb(204,236,236);
// --color-dark-green: rgb(47,79,79);
const calculateValueOfBackgroundColor = (from : number, to : number, distance : number, distanceTotale : number) => {
    return from + (to - from) * (distance / distanceTotale);
}

const getBackgroundColor = (distance : number, distanceTotale : number) => {
    if (distanceTotale == 0) {
        return `rgb(204,236,236)`;
    }
    return `rgb(${calculateValueOfBackgroundColor(204, 47, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(236, 79, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(236, 79, distance, distanceTotale)})`;
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
        {x : 14, y: 6}, {x : 14, y: 7}, {x : 14, y: 8}, {x : 14, y: 9},
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

const getBackgroundColor32x32 = (x : number, y : number) => {
    return '';
}

const getBackgroundColorFunction = (size : number) : ((x : number, y : number) => string) => {
    switch (size) {
        case 4:
            return getBackgroundColor4x4;
        case 8:
            return getBackgroundColor8x8;
        case 16:
            return getBackgroundColor16x16Pokeball;
        case 32:
            return getBackgroundColor32x32;
        default:
            return getBackgroundColor4x4;
    }
}

const isInList = (x : number, y : number, myArray : {x : number, y : number}[]) => {
    if (myArray.find(t => t.x == x && t.y == y)) {
        return true;
    }
    return false;
}