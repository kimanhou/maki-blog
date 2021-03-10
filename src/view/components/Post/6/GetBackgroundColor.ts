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

export const getBackgroundColor4x4Pacman = (x : number, y : number) => {
    const blackCoordinates = [ { x : 0, y : 2 }];
    const yellowCoordinates = [
        { x : 0, y : 1 }, { x : 0, y : 3 },
        { x : 1, y : 0 }, { x : 1, y : 1 }, { x : 1, y : 2 }, { x : 1, y : 3 },
        { x : 2, y : 0 }, { x : 2, y : 1 },
        { x : 3, y : 1 }, { x : 3, y : 2 }, { x : 3, y : 3 },
    ];

    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor4x4SouthPark = (x : number, y : number) => {
    const blueCoordinates = [ { x : 0, y : 2 }];
    const yellowCoordinates = [ { x : 0, y : 1 } ];
    const brownCoordinates = [ { x : 3, y : 0 }, { x : 3, y : 3 } ];
    const beigeCoordinates = [ { x : 1, y : 1 }, { x : 1, y : 2 } ];
    const redCoordinates = [ 
        { x : 1, y : 0 }, { x : 1, y : 3 },
        { x : 2, y : 0 }, { x : 2, y : 1 }, { x : 2, y : 2 }, { x : 2, y : 3 },
        { x : 3, y : 1 }, { x : 3, y : 2 },
    ];

    if (isInList(x, y, blueCoordinates)) {
        return 'rgb(33,163,182)';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    if (isInList(x, y, brownCoordinates)) {
        return 'rgb(90,62,43)';
    }
    if (isInList(x, y, beigeCoordinates)) {
        return 'rgb(249,227,186)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'red';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor4x4Tarzan = (x : number, y : number) => {
    const yellowCoordinates = [ { x : 0, y : 1 }, { x : 0, y : 2 } ];
    const brownCoordinates = [ { x : 1, y : 2 }, { x : 2, y : 1 }, { x : 2, y : 2 } ];
    const beigeCoordinates = [ 
        { x : 1, y : 0 }, { x : 1, y : 1 }, { x : 1, y : 3 },  
        { x : 2, y : 0 }, { x : 2, y : 1 }, { x : 2, y : 2 }, { x : 2, y : 3 }, 
        { x : 3, y : 1 }, { x : 3, y : 2 }
    ];

    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    if (isInList(x, y, brownCoordinates)) {
        return 'rgb(90,62,43)';
    }
    if (isInList(x, y, beigeCoordinates)) {
        return 'rgb(249,227,186)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor8x8Pikachu = (x : number, y : number) : string => {
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
        return 'var(--color-black)';
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
    return 'var(--color-white)';
}

export const getBackgroundColor8x8Kirby = (x : number, y : number) : string => {
    const blueCoordinates = [ { x : 4, y : 3 }, { x : 4, y : 5 } ];
    const blackCoordinates = [ { x : 3, y : 3 }, { x : 3, y : 5 } ];
    const pinkCoordinates = [ { x : 5, y : 2 }, { x : 5, y : 6 } ];
    const mediumPinkCoordinates = [
        { x : 3, y : 1 }, 
        { x : 4, y : 0 }, { x : 4, y : 7 },
        { x : 5, y : 0 }, { x : 5, y : 1 }, { x : 5, y : 7 },
        { x : 6, y : 2 }, { x : 6, y : 3 }
    ];
    const lightPinkCoordinates = [
        { x : 1, y : 2 }, { x : 1, y : 3 }, { x : 1, y : 4 }, { x : 1, y : 5 },
        { x : 2, y : 1 }, { x : 2, y : 2 }, { x : 2, y : 3 }, { x : 2, y : 4 }, { x : 2, y : 5 }, { x : 2, y : 6 },
        { x : 3, y : 2 }, { x : 3, y : 4 }, { x : 3, y : 6 },
        { x : 4, y : 1 }, { x : 4, y : 2 }, { x : 4, y : 4 }, { x : 4, y : 6 },
        { x : 5, y : 3 }, { x : 5, y : 4 }, { x : 5, y : 5 },
        { x : 6, y : 4 }, { x : 6, y : 5 }
    ];
    const darkPinkCoordinates = [
        { x : 6, y : 1 }, { x : 6, y : 6 },
        { x : 7, y : 1 }, { x : 7, y : 2 }, { x : 7, y : 3 }, { x : 7, y : 5 }, { x : 7, y : 6 }
    ];

    if (isInList(x, y, blueCoordinates)) {
        return 'rgb(27,39,124)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, pinkCoordinates)) {
        return 'rgb(238,100,146)';
    }
    if (isInList(x, y, mediumPinkCoordinates)) {
        return 'rgb(242,144,177)';
    }
    if (isInList(x, y, lightPinkCoordinates)) {
        return 'rgb(247,188,208)';
    }
    if (isInList(x, y, darkPinkCoordinates)) {
        return 'rgb(171,26,87)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor8x8SpaceInvader = (x : number, y : number) : string => {
    const blueCoordinates = [ 
        { x : 1, y : 2 }, { x : 1, y : 3 }, { x : 1, y : 4 },
        { x : 2, y : 1 }, { x : 2, y : 2 }, { x : 2, y : 3 }, { x : 2, y : 4 }, { x : 2, y : 5 },
        { x : 3, y : 0 }, { x : 3, y : 1 }, { x : 3, y : 4 }, 
        { x : 4, y : 0 }, { x : 4, y : 1 }, { x : 4, y : 4 }, 
        { x : 5, y : 0 }, { x : 5, y : 1 }, { x : 5, y : 2 },{ x : 5, y : 3 }, { x : 5, y : 4 }, { x : 5, y : 5 }, 
        { x : 6, y : 0 }, { x : 6, y : 1 }, { x : 6, y : 2 },{ x : 6, y : 3 }, { x : 6, y : 4 }, { x : 6, y : 5 }, 
        { x : 7, y : 0 }, { x : 7, y : 2 },{ x : 7, y : 3 }, { x : 7, y : 5 }
    ];
    const darkBlueCoordinates = [ 
        { x : 1, y : 5 }, 
        { x : 2, y : 6 },
        { x : 3, y : 7 },
        { x : 4, y : 7 },
        { x : 5, y : 6 }, { x : 5, y : 7 },
        { x : 6, y : 6 }, { x : 6, y : 7 },
        { x : 7, y : 6 }, { x : 7, y : 7 },
    ];
    const blackCoordinates = [ { x : 3, y : 2 }, { x : 3, y : 5 } ];

    if (isInList(x, y, blueCoordinates)) {
        return 'rgb(52,175,252)';
    }
    if (isInList(x, y, darkBlueCoordinates)) {
        return 'rgb(30,44,82)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor8x8Ghost = (x : number, y : number) : string => {
    const lightBrownCoordinates = [ { x : 5, y : 4 }, { x : 5, y : 5 } ];
    const brownCoordinates = [ { x : 5, y : 3 }, { x : 5, y : 6 } ];
    const darkRedCoordinates = [ 
        { x : 2, y : 1 },
        { x : 5, y : 2 },
        { x : 6, y : 1 }, { x : 6, y : 7 },
    ];
    const greyCoordinates = [ 
        { x : 0, y : 6 },
        { x : 1, y : 7 },
        { x : 2, y : 7 }, 
        { x : 3, y : 7 },
    ];
    const blackCoordinates = [ 
        { x : 1, y : 4 }, { x : 1, y : 6 }, 
        { x : 2, y : 4 }, { x : 2, y : 6 },
        { x : 7, y : 1 }, { x : 7, y : 2 }, { x : 7, y : 3 }, { x : 7, y : 5 }, { x : 7, y : 6 }, { x : 7, y : 7 },
    ];
    const beigeCoordinates = [ 
        { x : 0, y : 2 }, { x : 0, y : 3 }, { x : 0, y : 4 }, { x : 0, y : 5 },
        { x : 1, y : 2 }, { x : 1, y : 3 }, { x : 1, y : 5 },
        { x : 2, y : 2 }, { x : 2, y : 3 }, { x : 2, y : 5 },
        { x : 3, y : 2 }, { x : 3, y : 3 }, { x : 3, y : 4 }, { x : 3, y : 5 }, { x : 3, y : 6 },
        { x : 4, y : 3 }, { x : 4, y : 4 }, { x : 4, y : 5 }, { x : 4, y : 6 },
    ];
    const redCoordinates = [ 
        { x : 0, y : 1 }, { x : 0, y : 1 },
        { x : 1, y : 0 }, { x : 1, y : 1 },
        { x : 3, y : 1 }, 
        { x : 4, y : 1 }, { x : 4, y : 2 },
        { x : 5, y : 0 }, { x : 5, y : 1 }, 
        { x : 6, y : 0 }, { x : 6, y : 2 },{ x : 6, y : 3 }, { x : 6, y : 4 }, { x : 6, y : 5 }, { x : 6, y : 6 }, 
    ];

    if (isInList(x, y, lightBrownCoordinates)) {
        return 'rgb(253,162,40)';
    }
    if (isInList(x, y, brownCoordinates)) {
        return 'rgb(169,82,58)';
    }
    if (isInList(x, y, darkRedCoordinates)) {
        return 'rgb(125,39,83)';
    }
    if (isInList(x, y, greyCoordinates)) {
        return 'rgb(194,195,199)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, beigeCoordinates)) {
        return 'rgb(255,241,233)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'rgb(252,16,81)';
    }
    return 'var(--color-white)';
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
    if (isInList(x, y, greyCoordinates)) {
        return 'rgb(158,158,158)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'rgb(229,57,53)';
    }
    return 'var(--color-white)';
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
        {x : 12, y: 4}, {x : 12, y: 12}, {x : 12, y: 13},
        {x : 13, y: 4}, {x : 13, y: 5}, {x : 13, y: 11}, {x : 13, y: 12},
        {x : 14, y: 6}, {x : 14, y: 7}, {x : 14, y: 8}, {x : 14, y: 9}, {x : 14, y: 10}, {x : 14, y: 11},
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
    ];

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

    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'rgb(188,48,59)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, orangeCoordinates)) {
        return 'rgb(253,125,72)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor16x16AmongUs = (x : number, y : number) => {
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

    if (isInList(x, y, lightBlueCoordinates)) {
        return 'rgb(58,206,255)';
    }
    if (isInList(x, y, darkBlueCoordinates)) {
        return 'rgb(0,85,255)';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
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
    return 'var(--color-white)';
}

export const getBackgroundColor16x16Yoshi = (x : number, y : number) => {
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

    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, greenCoordinates)) {
        return 'rgb(177,191,77)';
    }
    return 'var(--color-white)';
}

export const getBackgroundColor32x32Pikachu = (x : number, y : number) => {
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
        {x : 19, y: 3}, {x : 19, y: 4}, {x : 19, y: 8}, {x : 19, y: 14}, {x : 19, y: 24}, {x : 19, y: 30}, 
        {x : 20, y: 1}, {x : 20, y: 2}, {x : 20, y: 7}, {x : 20, y: 8}, {x : 20, y: 14}, {x : 20, y: 24}, {x : 20, y: 30}, 
        {x : 21, y: 0}, {x : 21, y: 5}, {x : 21, y: 6}, {x : 21, y: 7}, {x : 21, y: 14}, {x : 21, y: 31}, 
        {x : 22, y: 4}, {x : 22, y: 5}, {x : 22, y: 6}, {x : 22, y: 7}, {x : 22, y: 10}, {x : 22, y: 15}, {x : 22, y: 31}, 
        {x : 23, y: 0}, {x : 23, y: 6}, {x : 23, y: 7}, {x : 23, y: 10}, {x : 23, y: 15}, {x : 23, y: 31}, 
        {x : 24, y: 1}, {x : 24, y: 2}, {x : 24, y: 7}, {x : 24, y: 11}, {x : 24, y: 15}, {x : 24, y: 31}, 
        {x : 25, y: 3}, {x : 25, y: 4}, {x : 25, y: 7}, {x : 25, y: 11}, {x : 25, y: 15}, {x : 25, y: 31}, 
        {x : 26, y: 5}, {x : 26, y: 6}, {x : 26, y: 7}, {x : 26, y: 8}, {x : 26, y: 12}, {x : 26, y: 13}, {x : 26, y: 14}, {x : 26, y: 30}, 
        {x : 27, y: 8}, {x : 27, y: 30}, 
        {x : 28, y: 9}, {x : 28, y: 29}, 
        {x : 29, y: 10}, {x : 29, y: 18}, {x : 29, y: 19}, {x : 29, y: 20}, {x : 29, y: 21}, {x : 29, y: 28}, 
        {x : 30, y: 11}, {x : 30, y: 12}, {x : 30, y: 16}, {x : 30, y: 17}, {x : 30, y: 18}, {x : 30, y: 19}, {x : 30, y: 20}, {x : 30, y: 21}, {x : 30, y: 22}, {x : 30, y: 23}, {x : 30, y: 26}, {x : 30, y: 27}, 
        {x : 31, y: 10}, {x : 31, y: 14}, {x : 31, y: 15}, {x : 31, y: 16}, {x : 31, y: 23}, {x : 31, y: 24}, {x : 31, y: 28}
    ];

    const yellowCoordinates = [
        { x : 1, y : 16 }, { x : 1, y : 17 }, { x : 1, y : 18 }, { x : 1, y : 19 }, { x : 1, y : 20 }, { x : 1, y : 21 }, { x : 1, y : 22 },
        { x : 2, y : 13 }, { x : 2, y : 14 }, { x : 2, y : 15 }, { x : 2, y : 16 }, { x : 2, y : 17 }, { x : 2, y : 18 }, { x : 2, y : 19 }, { x : 2, y : 20 }, { x : 2, y : 21 }, { x : 2, y : 22 }, { x : 2, y : 23 }, { x : 2, y : 24 }, { x : 2, y : 25 },
        { x : 3, y : 8 }, { x : 3, y : 9 }, { x : 3, y : 10 }, { x : 3, y : 11 }, { x : 3, y : 12 }, { x : 3, y : 13 }, { x : 3, y : 14 }, { x : 3, y : 15 }, { x : 3, y : 16 }, { x : 3, y : 17 }, { x : 3, y : 18 }, { x : 3, y : 19 }, { x : 3, y : 20 }, { x : 3, y : 21 }, { x : 3, y : 22 }, { x : 3, y : 23 }, { x : 3, y : 24 }, { x : 3, y : 25 }, { x : 3, y : 26 }, { x : 3, y : 27 }, { x : 3, y : 28 }, { x : 3, y : 29 }, { x : 3, y : 30 },
        { x : 4, y : 6 }, { x : 4, y : 7 }, { x : 4, y : 8 }, { x : 4, y : 9 }, { x : 4, y : 10 }, { x : 4, y : 11 }, { x : 4, y : 12 }, { x : 4, y : 13 }, { x : 4, y : 14 }, { x : 4, y : 15 }, { x : 4, y : 16 }, { x : 4, y : 17 }, { x : 4, y : 18 }, { x : 4, y : 19 }, { x : 4, y : 20 }, { x : 4, y : 21 }, { x : 4, y : 22 }, { x : 4, y : 23 }, { x : 4, y : 24 }, { x : 4, y : 25 }, { x : 4, y : 26 }, { x : 4, y : 27 }, { x : 4, y : 28 }, { x : 4, y : 29 }, { x : 4, y : 30 }, { x : 4, y : 31 },
        { x : 5, y : 4 }, { x : 5, y : 5 }, { x : 5, y : 6 }, { x : 5, y : 7 }, { x : 5, y : 8 }, { x : 5, y : 10 }, { x : 5, y : 11 }, { x : 5, y : 12 }, { x : 5, y : 13 }, { x : 5, y : 14 }, { x : 5, y : 15 }, { x : 5, y : 16 }, { x : 5, y : 17 }, { x : 5, y : 18 }, { x : 5, y : 19 }, { x : 5, y : 20 }, { x : 5, y : 21 }, { x : 5, y : 22 }, { x : 5, y : 23 }, { x : 5, y : 24 }, { x : 5, y : 25 }, { x : 5, y : 26 }, { x : 5, y : 27 }, { x : 5, y : 28 }, { x : 5, y : 30 }, { x : 5, y : 31 },
        { x : 6, y : 4 }, { x : 6, y : 5 }, { x : 6, y : 6 }, { x : 6, y : 7 }, { x : 6, y : 8 }, { x : 6, y : 10 }, { x : 6, y : 11 }, { x : 6, y : 12 }, { x : 6, y : 13 }, { x : 6, y : 16 }, { x : 6, y : 17 }, { x : 6, y : 18 }, { x : 6, y : 19 }, { x : 6, y : 20 }, { x : 6, y : 21 }, { x : 6, y : 22 }, { x : 6, y : 25 }, { x : 6, y : 26 }, { x : 6, y : 27 }, { x : 6, y : 28 }, { x : 6, y : 30 }, { x : 6, y : 31 },
        { x : 7, y : 5 }, { x : 7, y : 6 }, { x : 7, y : 9 }, { x : 7, y : 10 }, { x : 7, y : 11 }, { x : 7, y : 14 }, { x : 7, y : 15 }, { x : 7, y : 16 }, { x : 7, y : 17 }, { x : 7, y : 18 }, { x : 7, y : 20 }, { x : 7, y : 21 }, { x : 7, y : 22 }, { x : 7, y : 23 }, { x : 7, y : 24 }, { x : 7, y : 27 }, { x : 7, y : 28 }, { x : 7, y : 29 }, 
        { x : 8, y : 9 }, { x : 8, y : 10 }, { x : 8, y : 11 }, { x : 8, y : 12 }, { x : 8, y : 13 }, { x : 8, y : 14 }, { x : 8, y : 15 }, { x : 8, y : 16 }, { x : 8, y : 17 }, { x : 8, y : 18 }, { x : 8, y : 19 }, { x : 8, y : 20 }, { x : 8, y : 21 }, { x : 8, y : 22 }, { x : 8, y : 23 }, { x : 8, y : 24 }, { x : 8, y : 25 }, { x : 8, y : 26 }, { x : 8, y : 27 }, { x : 8, y : 28 }, { x : 8, y : 29 }, 
        { x : 9, y : 9 }, { x : 9, y : 10 }, { x : 9, y : 11 }, { x : 9, y : 12 }, { x : 9, y : 13 }, { x : 9, y : 14 }, { x : 9, y : 15 }, { x : 9, y : 16 }, { x : 9, y : 17 }, { x : 9, y : 21 }, { x : 9, y : 22 }, { x : 9, y : 23 }, { x : 9, y : 24 }, { x : 9, y : 25 }, { x : 9, y : 26 }, { x : 9, y : 27 }, { x : 9, y : 28 }, { x : 9, y : 29 }, 
        { x : 10, y : 8 }, { x : 10, y : 9 }, { x : 10, y : 10 }, { x : 10, y : 13 }, { x : 10, y : 14 }, { x : 10, y : 15 }, { x : 10, y : 16 }, { x : 10, y : 22 }, { x : 10, y : 23 }, { x : 10, y : 24 }, { x : 10, y : 25 }, { x : 10, y : 28 }, { x : 10, y : 29 }, { x : 10, y : 30 }, 
        { x : 11, y : 8 }, { x : 11, y : 9 }, { x : 11, y : 14 }, { x : 11, y : 15 }, { x : 11, y : 16 }, { x : 11, y : 22 }, { x : 11, y : 23 }, { x : 11, y : 24 }, { x : 11, y : 29 }, { x : 11, y : 30 }, 
        { x : 12, y : 0 }, { x : 12, y : 1 }, { x : 12, y : 2 }, { x : 12, y : 8 }, { x : 12, y : 9 }, { x : 12, y : 14 }, { x : 12, y : 15 }, { x : 12, y : 16 }, { x : 12, y : 22 }, { x : 12, y : 23 }, { x : 12, y : 24 }, { x : 12, y : 29 }, { x : 12, y : 30 }, 
        { x : 13, y : 0 }, { x : 13, y : 1 }, { x : 13, y : 2 }, { x : 13, y : 3 }, { x : 13, y : 4 }, { x : 13, y : 5 }, { x : 13, y : 8 }, { x : 13, y : 9 }, { x : 13, y : 10 }, { x : 13, y : 13 }, { x : 13, y : 14 }, { x : 13, y : 15 }, { x : 13, y : 16 }, { x : 13, y : 24 }, { x : 13, y : 25 }, { x : 13, y : 28 }, { x : 13, y : 29 }, { x : 13, y : 30 }, 
        { x : 14, y : 0 }, { x : 14, y : 1 }, { x : 14, y : 2 }, { x : 14, y : 3 }, { x : 14, y : 4 }, { x : 14, y : 5 }, { x : 14, y : 6 }, { x : 14, y : 8 }, { x : 14, y : 9 }, { x : 14, y : 10 }, { x : 14, y : 11 }, { x : 14, y : 12 }, { x : 14, y : 13 }, { x : 14, y : 14 }, { x : 14, y : 15 }, { x : 14, y : 16 }, { x : 14, y : 17 }, { x : 14, y : 22 }, { x : 14, y : 23 }, { x : 14, y : 25 }, { x : 14, y : 26 }, { x : 14, y : 27 }, { x : 14, y : 28 }, { x : 14, y : 29 }, { x : 14, y : 30 }, 
        { x : 15, y : 0 }, { x : 15, y : 1 }, { x : 15, y : 2 }, { x : 15, y : 3 }, { x : 15, y : 4 }, { x : 15, y : 5 }, { x : 15, y : 6 }, { x : 15, y : 7 }, { x : 15, y : 9 }, { x : 15, y : 10 }, { x : 15, y : 11 }, { x : 15, y : 12 }, { x : 15, y : 13 }, { x : 15, y : 14 }, { x : 15, y : 15 }, { x : 15, y : 16 }, { x : 15, y : 17 }, { x : 15, y : 18 }, { x : 15, y : 19 }, { x : 15, y : 20 }, { x : 15, y : 22 }, { x : 15, y : 23 }, { x : 15, y : 24 }, { x : 15, y : 26 }, { x : 15, y : 27 }, { x : 15, y : 28 }, { x : 15, y : 29 }, 
        { x : 16, y : 0 }, { x : 16, y : 1 }, { x : 16, y : 2 }, { x : 16, y : 3 }, { x : 16, y : 4 }, { x : 16, y : 5 }, { x : 16, y : 6 }, { x : 16, y : 7 }, { x : 16, y : 9 }, { x : 16, y : 10 }, { x : 16, y : 11 }, { x : 16, y : 12 }, { x : 16, y : 13 }, { x : 16, y : 14 }, { x : 16, y : 15 }, { x : 16, y : 16 }, { x : 16, y : 17 }, { x : 16, y : 18 }, { x : 16, y : 19 }, { x : 16, y : 20 }, { x : 16, y : 21 }, { x : 16, y : 23 }, { x : 16, y : 24 }, { x : 16, y : 25 }, { x : 16, y : 26 }, { x : 16, y : 27 }, { x : 16, y : 28 }, { x : 16, y : 29 }, 
        { x : 17, y : 0 }, { x : 17, y : 1 }, { x : 17, y : 2 }, { x : 17, y : 3 }, { x : 17, y : 4 }, { x : 17, y : 5 }, { x : 17, y : 6 }, { x : 17, y : 7 }, { x : 17, y : 10 }, { x : 17, y : 11 }, { x : 17, y : 12 }, { x : 17, y : 13 }, { x : 17, y : 14 }, { x : 17, y : 15 }, { x : 17, y : 16 }, { x : 17, y : 17 }, { x : 17, y : 18 }, { x : 17, y : 19 }, { x : 17, y : 20 }, { x : 17, y : 21 }, { x : 17, y : 22 }, { x : 17, y : 24 }, { x : 17, y : 25 }, { x : 17, y : 26 }, 
        { x : 18, y : 3 }, { x : 18, y : 4 }, { x : 18, y : 5 }, { x : 18, y : 6 }, { x : 18, y : 7 }, { x : 18, y : 9 }, { x : 18, y : 10 }, { x : 18, y : 11 }, { x : 18, y : 12 }, { x : 18, y : 13 }, { x : 18, y : 15 }, { x : 18, y : 16 }, { x : 18, y : 22 }, { x : 18, y : 24 }, { x : 18, y : 25 }, { x : 18, y : 26 }, { x : 18, y : 28 }, { x : 18, y : 29 }, 
        { x : 19, y : 5 }, { x : 19, y : 6 }, { x : 19, y : 7 }, { x : 19, y : 9 }, { x : 19, y : 10 }, { x : 19, y : 11 }, { x : 19, y : 12 }, { x : 19, y : 13 }, { x : 19, y : 15 }, { x : 19, y : 16 }, { x : 19, y : 17 }, { x : 19, y : 21 }, { x : 19, y : 22 }, { x : 19, y : 23 }, { x : 19, y : 25 }, { x : 19, y : 26 }, { x : 19, y : 27 }, { x : 19, y : 28 }, { x : 19, y : 29 }, 
        { x : 20, y : 3 }, { x : 20, y : 4 }, { x : 20, y : 5 }, { x : 20, y : 6 }, { x : 20, y : 9 }, { x : 20, y : 10 }, { x : 20, y : 11 }, { x : 20, y : 12 }, { x : 20, y : 13 }, { x : 20, y : 15 }, { x : 20, y : 16 }, { x : 20, y : 17 }, { x : 20, y : 18 }, { x : 20, y : 19 }, { x : 20, y : 20 }, { x : 20, y : 21 }, { x : 20, y : 22 }, { x : 20, y : 23 }, { x : 20, y : 25 }, { x : 20, y : 26 }, { x : 20, y : 27 }, { x : 20, y : 28 }, { x : 20, y : 29 }, 
        { x : 21, y : 1 }, { x : 21, y : 2 }, { x : 21, y : 3 }, { x : 21, y : 4 }, { x : 21, y : 8 }, { x : 21, y : 9 },  { x : 21, y : 10 }, { x : 21, y : 11 }, { x : 21, y : 12 }, { x : 21, y : 13 }, { x : 21, y : 15 }, { x : 21, y : 16 }, { x : 21, y : 17 }, { x : 21, y : 18 }, { x : 21, y : 19 }, { x : 21, y : 20 }, { x : 21, y : 21 }, { x : 21, y : 22 }, { x : 21, y : 23 }, { x : 21, y : 24 }, { x : 21, y : 25 }, { x : 21, y : 26 }, { x : 21, y : 27 }, { x : 21, y : 28 }, { x : 21, y : 29 }, { x : 21, y : 30 },
        { x : 22, y : 0 }, { x : 22, y : 1 }, { x : 22, y : 2 }, { x : 22, y : 3 }, { x : 22, y : 8 }, { x : 22, y : 9 }, { x : 22, y : 11 }, { x : 22, y : 12 }, { x : 22, y : 13 }, { x : 22, y : 14 }, { x : 22, y : 16 }, { x : 22, y : 17 }, { x : 22, y : 18 }, { x : 22, y : 19 }, { x : 22, y : 20 }, { x : 22, y : 21 }, { x : 22, y : 22 }, { x : 22, y : 23 }, { x : 22, y : 24 }, { x : 22, y : 25 }, { x : 22, y : 26 }, { x : 22, y : 27 }, { x : 22, y : 28 }, { x : 22, y : 29 }, { x : 22, y : 30 },
        { x : 23, y : 1 }, { x : 23, y : 2 }, { x : 23, y : 3 }, { x : 23, y : 4 }, { x : 23, y : 5 }, { x : 23, y : 8 }, { x : 23, y : 9 }, { x : 23, y : 11 }, { x : 23, y : 12 }, { x : 23, y : 13 }, { x : 23, y : 14 }, { x : 23, y : 16 }, { x : 23, y : 17 }, { x : 23, y : 18 }, { x : 23, y : 19 }, { x : 23, y : 20 }, { x : 23, y : 21 }, { x : 23, y : 22 }, { x : 23, y : 23 }, { x : 23, y : 24 }, { x : 23, y : 25 }, { x : 23, y : 26 }, { x : 23, y : 27 }, { x : 23, y : 28 }, { x : 23, y : 29 }, { x : 23, y : 30 },
        { x : 24, y : 3 }, { x : 24, y : 4 }, { x : 24, y : 5 }, { x : 24, y : 6 }, { x : 24, y : 8 }, { x : 24, y : 9 }, { x : 24, y : 10 }, { x : 24, y : 12 }, { x : 24, y : 13 }, { x : 24, y : 14 }, { x : 24, y : 16 }, { x : 24, y : 17 }, { x : 24, y : 18 }, { x : 24, y : 19 }, { x : 24, y : 20 }, { x : 24, y : 21 }, { x : 24, y : 22 }, { x : 24, y : 23 }, { x : 24, y : 24 }, { x : 24, y : 25 }, { x : 24, y : 26 }, { x : 24, y : 27 }, { x : 24, y : 28 }, { x : 24, y : 29 }, { x : 24, y : 30 },
        { x : 25, y : 5 }, { x : 25, y : 6 }, { x : 25, y : 8 }, { x : 25, y : 9 }, { x : 25, y : 10 }, { x : 25, y : 12 }, { x : 25, y : 13 }, { x : 25, y : 14 }, { x : 25, y : 16 }, { x : 25, y : 17 }, { x : 25, y : 18 }, { x : 25, y : 19 }, { x : 25, y : 20 }, { x : 25, y : 21 }, { x : 25, y : 22 }, { x : 25, y : 23 }, { x : 25, y : 24 }, { x : 25, y : 25 }, { x : 25, y : 26 }, { x : 25, y : 27 }, { x : 25, y : 28 }, { x : 25, y : 29 }, { x : 25, y : 30 },
        { x : 26, y : 9 }, { x : 26, y : 10 }, { x : 26, y : 11 }, { x : 26, y : 15 }, { x : 26, y : 16 }, { x : 26, y : 17 }, { x : 26, y : 18 }, { x : 26, y : 19 }, { x : 26, y : 20 }, { x : 26, y : 21 }, { x : 26, y : 22 }, { x : 26, y : 23 }, { x : 26, y : 24 }, { x : 26, y : 25 }, { x : 26, y : 26 }, { x : 26, y : 27 }, { x : 26, y : 28 }, { x : 26, y : 29 },
        { x : 27, y : 9 }, { x : 27, y : 10 }, { x : 27, y : 11 }, { x : 27, y : 12 }, { x : 27, y : 13 }, { x : 27, y : 14 }, { x : 27, y : 15 }, { x : 27, y : 16 }, { x : 27, y : 17 }, { x : 27, y : 18 }, { x : 27, y : 19 }, { x : 27, y : 20 }, { x : 27, y : 21 }, { x : 27, y : 22 }, { x : 27, y : 23 }, { x : 27, y : 24 }, { x : 27, y : 25 }, { x : 27, y : 26 }, { x : 27, y : 27 }, { x : 27, y : 28 }, { x : 27, y : 29 },
        { x : 28, y : 10 }, { x : 28, y : 11 }, { x : 28, y : 12 }, { x : 28, y : 13 }, { x : 28, y : 14 }, { x : 28, y : 15 }, { x : 28, y : 16 }, { x : 28, y : 17 }, { x : 28, y : 18 }, { x : 28, y : 19 }, { x : 28, y : 20 }, { x : 28, y : 21 }, { x : 28, y : 22 }, { x : 28, y : 23 }, { x : 28, y : 24 }, { x : 28, y : 25 }, { x : 28, y : 26 }, { x : 28, y : 27 }, { x : 28, y : 28 }, 
        { x : 29, y : 11 }, { x : 29, y : 12 }, { x : 29, y : 13 }, { x : 29, y : 14 }, { x : 29, y : 15 }, { x : 29, y : 16 }, { x : 29, y : 17 }, { x : 29, y : 22 }, { x : 29, y : 23 }, { x : 29, y : 24 }, { x : 29, y : 25 }, { x : 29, y : 26 }, { x : 29, y : 27 },
        { x : 30, y : 13 }, { x : 30, y : 14 }, { x : 30, y : 15 }, { x : 30, y : 24 }, { x : 30, y : 25 }, 
        { x : 31, y : 11 }, { x : 31, y : 12 }, { x : 31, y : 13 }, { x : 31, y : 25 }, { x : 31, y : 26 }, { x : 31, y : 27 } 
        
    ];

    if (isInList(x, y, darkYellowCoordinates)) {
        return 'rgb(253,152,39)';
    }
    if (isInList(x, y, redCoordinates)) {
        return 'red';
    }
    if (isInList(x, y, blackCoordinates)) {
        return 'var(--color-black)';
    }
    if (isInList(x, y, yellowCoordinates)) {
        return 'var(--color-yellow)';
    }
    return 'var(--color-white)';
}