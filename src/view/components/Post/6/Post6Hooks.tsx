import React from 'react';

const renderGameCell = () => {
    return <div className={`game-cell`}></div>;
}

const renderGameCell4x4 = (gameRow : number, gameCellNumber : number) => {
    return <div className={`game-cell`} style={{ backgroundColor: getBackgroundColor4x4(gameRow, gameCellNumber)}}></div>;
}

const renderGameRow4x4 = (gameRow : number, numberOfCells : number) => {
    var foo = Array.from(Array(numberOfCells).keys());
    return <div className={`game-row`}>
        {foo.map(t => renderGameCell4x4(gameRow, t))}
    </div>
}

const renderGameRows4x4 = (numberOfRows : number, numberOfCellsPerRow : number) => {
    var foo = Array.from(Array(numberOfRows).keys());
    return foo.map(t => renderGameRow4x4(t, numberOfCellsPerRow))
}

const renderGameRow = (numberOfCells : number) => {
    var foo = Array.from(Array(numberOfCells).keys());
    return <div className={`game-row`}>
        {foo.map(t => renderGameCell())}
    </div>
}

export const renderGameRows = (numberOfRows : number, numberOfCellsPerRow : number) => {
    if (numberOfRows == 4 && numberOfCellsPerRow == 4) {
        return renderGameRows4x4(numberOfRows, numberOfCellsPerRow);
    }
    var foo = Array.from(Array(numberOfRows).keys());
    return foo.map(t => renderGameRow(numberOfCellsPerRow))
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
