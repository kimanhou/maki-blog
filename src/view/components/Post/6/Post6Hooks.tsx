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
    if (x == 0 && (y == 1 || y == 2 || y == 7 )) {
        return 'var(--color-off-black)';
    }
    if (x == 3 && (y == 4 || y == 7 )) {
        return 'black';
    }
    if (x == 4 && y == 3) {
        return 'red';
    }
    if ((x == 1 && y == 2) 
        || (x == 2 && (y == 3 || y == 4 || y == 5 || y == 6))
        || (x == 3 && (y == 3 || y == 5 || y == 6))
        || (x == 4 && (y == 4 || y == 5 || y == 6))
        || (x == 5 && y == 3)
        || (x == 6 && (y == 2 || y == 4 || y == 6))
        || (x == 7 && y == 2)) {
        return 'var(--color-yellow)';
    }
    if ((x == 1 && (y == 3 || y == 7)) 
        || (x == 2 && y == 7)
        || (x == 3 && (y == 0 || y == 1))
        || (x == 4 && (y == 0 || y == 1 || y == 7))
        || (x == 5 && (y == 4 || y == 5 || y == 6))
        || (x == 6 && (y == 3 || y == 5))
        || (x == 7 && (y == 3 || y == 6))) {
        return 'rgb(253,152,39)';
    }
    if ((x == 5 && y ==1)
        || (x == 6 && y ==1)
        || (x == 7 && (y == 4 || y == 5))) {
        return 'rgb(197,109,26)';
    }
    return '';
}

const getBackgroundColor16x16 = (x : number, y : number) => {
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
            return getBackgroundColor16x16;
        case 32:
            return getBackgroundColor32x32;
        default:
            return getBackgroundColor4x4;
    }
}

