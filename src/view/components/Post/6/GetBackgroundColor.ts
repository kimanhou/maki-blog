import getBackgroundColor from "../../../hooks/UseBackgroundColor";

const isInList = (x : number, y : number, myArray : {x : number, y : number}[]) => {
    if (myArray.find(t => t.x == x && t.y == y)) {
        return true;
    }
    return false;
}

export const getBackgroundColor4x4 = (x : number, y : number) => {
    return (getBackgroundColor(Math.min(x, y), 3));
}

export const getBackgroundColor8x8 = (x : number, y : number) : string => {
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

export const getBackgroundColor16x16Pokeball = (x : number, y : number) => {
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

export const getBackgroundColor16x16Charmander = (x : number, y : number) => {
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

export const getBackgroundColor16x16AmongUs = (x : number, y : number) => {
    const whiteCoordinates = [ { x : 7, y : 3 } ];

    const lightBlueCoordinates = [ { x : 7, y : 2 }, { x : 7, y : 4 } ];

    const darkBlueCoordinates = [ 
        { x : 7, y : 5 }, 
        { x : 8, y : 2 }, { x : 8, y : 3 }, { x : 8, y : 4 }, { x : 8, y : 5 }
    ];

    const blackCoordinates = [ 
        {x : 3, y: 4}, {x : 3, y: 5}, {x : 3, y: 6}, {x : 3, y: 7}, {x : 3, y: 8},
        {x : 4, y: 3}, {x : 4, y: 9},
        {x : 5, y: 2}, {x : 5, y: 10},
        {x : 6, y: 2}, {x : 6, y: 3}, {x : 6, y: 4}, {x : 6, y: 5}, {x : 6, y: 10}, {x : 6, y: 11}, {x : 6, y: 12},
        {x : 7, y: 1}, {x : 7, y: 6}, {x : 7, y: 10}, {x : 7, y: 13},
        {x : 8, y: 1}, {x : 8, y: 6}, {x : 8, y: 10}, {x : 8, y: 13},
        {x : 9, y: 2}, {x : 9, y: 3}, {x : 9, y: 4}, {x : 9, y: 5}, {x : 9, y: 10}, {x : 9, y: 13},
        {x : 10, y: 2}, {x : 10, y: 10}, {x : 10, y: 13},
        {x : 11, y: 2}, {x : 11, y: 10}, {x : 11, y: 13},
        {x : 12, y: 2}, {x : 12, y: 6}, {x : 12, y: 10}, {x : 12, y: 11}, {x : 12, y: 12},
        {x : 13, y: 2}, {x : 13, y: 5}, {x : 13, y: 7}, {x : 13, y: 10},
        {x : 14, y: 2}, {x : 14, y: 5}, {x : 14, y: 7}, {x : 14, y: 10}, 
        {x : 15, y: 3}, {x : 15, y: 4}, {x : 15, y: 8}, {x : 15, y: 9}
    ];

    const redCoordinates = [ 
        {x : 4, y: 4}, {x : 4, y: 5}, {x : 4, y: 6}, {x : 4, y: 7}, {x : 4, y: 8},
        {x : 5, y: 3}, {x : 5, y: 4}, {x : 5, y: 5}, {x : 5, y: 6}, {x : 5, y: 7}, {x : 5, y: 8}, {x : 5, y: 9},
        {x : 6, y: 6}, {x : 6, y: 7}, {x : 6, y: 8}, {x : 6, y: 9},
        {x : 7, y: 7}, {x : 7, y: 8}, {x : 7, y: 9}, {x : 7, y: 11}, {x : 7, y: 12},
        {x : 8, y: 7}, {x : 8, y: 8}, {x : 8, y: 9},
        {x : 9, y: 6}, {x : 9, y: 7}, {x : 9, y: 8}, {x : 9, y: 9},
        {x : 10, y: 5}, {x : 10, y: 6}, {x : 10, y: 7}
    ];

    const darkRedCoordinates = [ 
        { x : 8, y : 11 }, { x : 8, y : 12 }, 
        { x : 9, y : 11 }, { x : 9, y : 12 }, 
        { x : 10, y : 3 }, { x : 10, y : 4 }, { x : 10, y : 8 }, { x : 10, y : 9 }, { x : 10, y : 11 }, { x : 10, y : 12 }, 
        { x : 11, y : 3 }, { x : 11, y : 4 }, { x : 11, y : 5 }, { x : 11, y : 6 }, { x : 11, y : 7 }, { x : 11, y : 8 }, { x : 11, y : 9 },
        { x : 12, y : 3 }, { x : 12, y : 4 }, { x : 12, y : 5 }, { x : 12, y : 7 }, { x : 12, y : 8 }, { x : 12, y : 9 },
        { x : 13, y : 3 }, { x : 13, y : 4 }, { x : 13, y : 8 }, { x : 13, y : 9 },
        { x : 14, y : 3 }, { x : 14, y : 4 }, { x : 14, y : 8 }, { x : 14, y : 9 },
    ];

    const veryDarkRedCoordinates = [ { x : 11, y : 11 }, { x : 11, y : 12 } ];

    if (isInList(x, y, whiteCoordinates)) {
        return 'white';
    }
    if (isInList(x, y, lightBlueCoordinates)) {
        return 'rgb(58,206,255)';
    }
    if (isInList(x, y, darkBlueCoordinates)) {
        return 'rgb(0,85,255)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-off-black)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'red';
    }
    if (isInList(x, y, darkRedCoordinates)) {
        return 'rgb(207,1,1)';
    }
    if (isInList(x, y, veryDarkRedCoordinates)) {
        return 'rgb(166,1,1)';
    }
    return '';
}

export const getBackgroundColor16x16Yoshi = (x : number, y : number) => {
    const whiteCoordinates = [ 
        { x : 2, y : 5 }, { x : 2, y : 6 }, { x : 2, y : 7 }, { x : 2, y : 8 }, { x : 2, y : 9 }, { x : 2, y : 10 }, 
        { x : 3, y : 4 }, { x : 3, y : 5 }, { x : 3, y : 7 }, { x : 3, y : 8 }, { x : 3, y : 10 }, { x : 3, y : 11 }, 
        { x : 4, y : 4 }, { x : 4, y : 5 }, { x : 4, y : 7 }, { x : 4, y : 8 }, { x : 4, y : 10 }, { x : 4, y : 11 }, 
        { x : 5, y : 4 }, { x : 5, y : 11 }, 
        { x : 10, y : 1 }, { x : 10, y : 14 }, 
        { x : 11, y : 1 }, { x : 11, y : 14 }, 
    ];

    const blackCoordinates = [ 
        {x : 0, y: 5}, {x : 0, y: 6}, {x : 0, y: 9}, {x : 0, y: 10}, 
        {x : 1, y: 4}, {x : 1, y: 7}, {x : 1, y: 8}, {x : 1, y: 11}, 
        {x : 2, y: 3}, {x : 2, y: 12},
        {x : 3, y: 3}, {x : 3, y: 6}, {x : 3, y: 9}, {x : 3, y: 12},
        {x : 4, y: 3}, {x : 4, y: 6}, {x : 4, y: 9}, {x : 4, y: 12},
        {x : 5, y: 2}, {x : 5, y: 3}, {x : 5, y: 5}, {x : 5, y: 6}, {x : 5, y: 7}, {x : 5, y: 8}, {x : 5, y: 9}, {x : 5, y: 10}, {x : 5, y: 12}, {x : 5, y: 13},
        {x : 6, y: 1}, {x : 6, y: 4}, {x : 6, y: 11}, {x : 6, y: 14},
        {x : 7, y: 1}, {x : 7, y: 3}, {x : 7, y: 12}, {x : 7, y: 14},
        {x : 8, y: 0}, {x : 8, y: 2}, {x : 8, y: 6}, {x : 8, y: 9}, {x : 8, y: 13}, {x : 8, y: 15},
        {x : 9, y: 0}, {x : 9, y: 2}, {x : 9, y: 13}, {x : 9, y: 15},
        {x : 10, y: 0}, {x : 10, y: 2}, {x : 10, y: 13}, {x : 10, y: 15},
        {x : 11, y: 0}, {x : 11, y: 2}, {x : 11, y: 13}, {x : 11, y: 15},
        {x : 12, y: 1}, {x : 12, y: 2}, {x : 12, y: 13}, {x : 12, y: 14}, 
        {x : 13, y: 3}, {x : 13, y: 12}, 
        {x : 14, y: 4}, {x : 14, y: 11}, 
        {x : 15, y: 5}, {x : 15, y: 6}, {x : 15, y: 7}, {x : 15, y: 8}, {x : 15, y: 9}, {x : 15, y: 10}
    ];

    const greenCoordinates = [ 
        {x : 1, y: 5}, {x : 1, y: 6}, {x : 1, y: 9}, {x : 1, y: 10},
        {x : 2, y: 4}, {x : 2, y: 11},
        {x : 6, y: 2}, {x : 6, y: 3}, {x : 6, y: 5}, {x : 6, y: 6}, {x : 6, y: 7}, {x : 6, y: 8}, {x : 6, y: 9}, {x : 6, y: 10}, {x : 6, y: 12}, {x : 6, y: 13},
        {x : 7, y: 2}, {x : 7, y: 4}, {x : 7, y: 5}, {x : 7, y: 6}, {x : 7, y: 7}, {x : 7, y: 8}, {x : 7, y: 9}, {x : 7, y: 10}, {x : 7, y: 11}, {x : 7, y: 13},
        {x : 8, y: 1}, {x : 8, y: 3}, {x : 8, y: 4}, {x : 8, y: 5}, {x : 8, y: 7}, {x : 8, y: 8}, {x : 8, y: 10}, {x : 8, y: 11}, {x : 8, y: 12}, {x : 8, y: 14},
        {x : 9, y: 1}, {x : 9, y: 3}, {x : 9, y: 4}, {x : 9, y: 5}, {x : 9, y: 7}, {x : 9, y: 8}, {x : 9, y: 10}, {x : 9, y: 11}, {x : 9, y: 12}, {x : 9, y: 14},
        {x : 10, y: 3}, {x : 10, y: 4}, {x : 10, y: 5}, {x : 10, y: 6}, {x : 10, y: 7}, {x : 10, y: 8}, {x : 10, y: 9}, {x : 10, y: 10}, {x : 10, y: 11}, {x : 10, y: 12},
        {x : 11, y: 3}, {x : 11, y: 4}, {x : 11, y: 5}, {x : 11, y: 6}, {x : 11, y: 7}, {x : 11, y: 8}, {x : 11, y: 9}, {x : 11, y: 10}, {x : 11, y: 11}, {x : 11, y: 12},
        {x : 12, y: 3}, {x : 12, y: 4}, {x : 12, y: 5}, {x : 12, y: 6}, {x : 12, y: 7}, {x : 12, y: 8}, {x : 12, y: 9}, {x : 12, y: 10}, {x : 12, y: 11}, {x : 12, y: 12},
        {x : 13, y: 4}, {x : 13, y: 5}, {x : 13, y: 6}, {x : 13, y: 7}, {x : 13, y: 8}, {x : 13, y: 9}, {x : 13, y: 10}, {x : 13, y: 11},
        {x : 14, y: 5}, {x : 14, y: 6}, {x : 14, y: 7}, {x : 14, y: 8}, {x : 14, y: 9}, {x : 14, y: 10},
    ];

    if (isInList(x, y, whiteCoordinates)) {
        return 'white';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-off-black)';
    }
    if (isInList(x, y, greenCoordinates)) {
        return 'rgb(177,191,77)';
    }
    return '';
}

export const getBackgroundColor32x32 = (x : number, y : number) => {
    const darkYellowCoordinates = [
        { x : 18, y : 17 }, { x : 18, y : 18 }, { x : 18, y : 19 }, { x : 18, y : 20 }, { x : 18, y : 21 },
        { x : 19, y : 18 }, { x : 19, y : 19 }, { x : 19, y : 20 }
    ];

    const redCoordinates = [ 
        { x : 10, y : 11 }, { x : 10, y : 12 }, { x : 10, y : 26 }, { x : 10, y : 27 },
        { x : 11, y : 10 }, { x : 11, y : 11 }, { x : 11, y : 12 }, { x : 11, y : 13 }, { x : 11, y : 25 }, { x : 11, y : 26 }, { x : 11, y : 27 }, { x : 11, y : 28 },
        { x : 12, y : 10 }, { x : 12, y : 11 }, { x : 12, y : 12 }, { x : 12, y : 13 }, { x : 12, y : 25 }, { x : 12, y : 26 }, { x : 12, y : 27 }, { x : 12, y : 28 }, { x : 12, y : 18 }, { x : 12, y : 19 }, { x : 12, y : 20 },
        { x : 13, y : 11 }, { x : 13, y : 12 }, { x : 13, y : 26 }, { x : 13, y : 27 }, { x : 13, y : 18 }, { x : 13, y : 19 }, { x : 13, y : 20 },
    ];

    const blackCoordinates = [ 
        {x : 0, y: 16}, {x : 0, y: 17}, {x : 0, y: 18}, {x : 0, y: 19}, {x : 0, y: 20}, {x : 0, y: 21}, {x : 0, y: 22}, 
        {x : 1, y: 13}, {x : 1, y: 14}, {x : 1, y: 15}, {x : 1, y: 23}, {x : 1, y: 24}, {x : 1, y: 25},
        {x : 2, y: 8}, {x : 2, y: 9}, {x : 2, y: 10}, {x : 2, y: 11}, {x : 2, y: 12}, {x : 2, y: 26}, {x : 2, y: 27}, {x : 2, y: 28}, {x : 2, y: 29}, {x : 2, y: 30},
        {x : 3, y: 6}, {x : 3, y: 7}, {x : 3, y: 31},
        {x : 4, y: 4}, {x : 4, y: 5}, 
        {x : 5, y: 3}, {x : 5, y: 9}, {x : 5, y: 29}, 
        {x : 6, y: 2}, {x : 6, y: 3}, {x : 6, y: 9}, {x : 6, y: 14}, {x : 6, y: 15}, {x : 6, y: 23}, {x : 6, y: 24}, {x : 6, y: 29},
        {x : 7, y: 1}, {x : 7, y: 2}, {x : 7, y: 3}, {x : 7, y: 4}, {x : 7, y: 7}, {x : 7, y: 8}, {x : 7, y: 12}, {x : 7, y: 13}, {x : 7, y: 19}, {x : 7, y: 25}, {x : 7, y: 26}, {x : 7, y: 30}, {x : 7, y: 31},
        {x : 8, y: 0}, {x : 8, y: 1}, {x : 8, y: 2}, {x : 8, y: 3}, {x : 8, y: 4}, {x : 8, y: 5}, {x : 8, y: 6}, {x : 8, y: 8}, {x : 8, y: 30},
        {x : 9, y: 8}, {x : 9, y: 18}, {x : 9, y: 19}, {x : 9, y: 20}, {x : 9, y: 30},
        {x : 10, y: 7}, {x : 10, y: 17}, {x : 10, y: 18}, {x : 10, y: 19}, {x : 10, y: 20}, {x : 10, y: 21}, {x : 10, y: 31},
        {x : 11, y: 0}, {x : 11, y: 1}, {x : 11, y: 2}, {x : 11, y: 7}, {x : 11, y: 17}, {x : 11, y: 18}, {x : 11, y: 19}, {x : 11, y: 20}, {x : 11, y: 21}, {x : 11, y: 31},
        {x : 12, y: 3}, {x : 12, y: 4}, {x : 12, y: 5}, {x : 12, y: 7}, {x : 12, y: 17}, {x : 12, y: 21}, {x : 12, y: 31}, 
        {x : 13, y: 6}, {x : 13, y: 7}, {x : 13, y: 17}, {x : 13, y: 21}, {x : 13, y: 22}, {x : 13, y: 23}, {x : 13, y: 31}, 
        {x : 14, y: 7}, {x : 14, y: 18}, {x : 14, y: 19}, {x : 14, y: 20}, {x : 14, y: 21}, {x : 14, y: 24}, {x : 14, y: 31}, 
        {x : 15, y: 8}, {x : 15, y: 21}, {x : 15, y: 25}, {x : 15, y: 30}, 
        {x : 16, y: 8}, {x : 16, y: 22}, {x : 16, y: 30}, 
        {x : 17, y: 8}, {x : 17, y: 9}, {x : 17, y: 23}, {x : 17, y: 27}, {x : 17, y: 28}, {x : 17, y: 29}, {x : 17, y: 30}, 
        {x : 18, y: 0}, {x : 18, y: 1}, {x : 18, y: 2}, {x : 18, y: 8}, {x : 18, y: 14}, {x : 18, y: 23}, {x : 18, y: 27}, {x : 18, y: 30}, 
    ];

    const yellowCoordinates = [
        { x : 1, y : 2 },
        { x : 2, y : 3 }, { x : 2, y : 4 }, { x : 2, y : 5 }, { x : 2, y : 6 },
        { x : 3, y : 3 }, { x : 3, y : 5 }, { x : 3, y : 6 },
        { x : 4, y : 4 }, { x : 4, y : 5 }, { x : 4, y : 6 },
        { x : 5, y : 3 },
        { x : 6, y : 2 }, { x : 6, y : 4 }, { x : 6, y : 6 },
        { x : 7, y : 2 }
    ];

    if (isInList(x, y, darkYellowCoordinates)) {
        return 'rgb(253,152,39)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'red';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-off-black)';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    return '';
}