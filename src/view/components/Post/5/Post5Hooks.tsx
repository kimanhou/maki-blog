import React from 'react';
import { useState } from 'react';

export const useDemoExample1ControlColumns = () : [ number, () => void, () => void ] => {
    const [columnNumber, setColumnNumber] = useState(3);
    const addColumn = () => {
        if (columnNumber < 10){
            setColumnNumber(columnNumber + 1);
        }
    }

    const removeColumn = () => {
        if (columnNumber > 0){
            setColumnNumber(columnNumber - 1);
        }
    }
    return [columnNumber, addColumn, removeColumn];
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
const getColor = (rgb : string) => {
    const green = rgb.split(',')[1];
    if (parseInt(green) > 149) {
        return 'var(--color-off-black)';
    }
    else {
        return 'var(--color-white)';
    }
}
export const getRandomHeight = () => {
    const min = Math.ceil(80);
    const max = Math.floor(400);
    return Math.floor(Math.random() * (max - min) + min);
}
const example1RenderOneColumn = (index : number, columnNumber : number, heights : number[]) => {
    const backgroundColor = getBackgroundColor(index, columnNumber - 1);
    const color = getColor(backgroundColor);
    const height = heights[index];
    return (
        <div className={`example-1-column`} style={{ backgroundColor: backgroundColor, color: color, height: height }}>
            {index + 1}
        </div>
    );
}

export const example1RenderColumns = (columnNumber : number, heights : number[]) => {
    if (columnNumber > 0) {
        var foo = Array.from(Array(columnNumber).keys());
        return foo.map(t => example1RenderOneColumn(t, columnNumber, heights));
    }
}

export const useDemoFlexDirection = () : [string, () => void] => {
    const [flexDirection, setFlexDirection] = useState('row');
    const onClickDemoFlexColumn = () => {
        if (flexDirection == 'row') {
            setFlexDirection('column');
        }
        else {
            setFlexDirection('row');
        }
    }
    return [flexDirection, onClickDemoFlexColumn];
}

export const useDemoFlex = () : [string, () => void] => {
    const [flex1, setFlex1] = useState('unset');
    const onClickFlex1 = () => {
        if (flex1 == '1') {
            setFlex1('unset');
        }
        else {
            setFlex1('1');
        }
    }
    return [flex1, onClickFlex1];
}

export const useDemoAlignItems = () : [string, () => void, () => void, () => void] => {
    const [alignItems, setAlignItems] = useState('unset');
    const onClickDemoAlignItemsStart = () => {
        if (alignItems == 'flex-start') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('flex-start');
        }
    }

    const onClickDemoAlignItemsCenter = () => {
        if (alignItems == 'center') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('center');
        }
    }

    const onClickDemoAlignItemsEnd = () => {
        if (alignItems == 'flex-end') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('flex-end');
        }
    }
    return [alignItems, onClickDemoAlignItemsStart, onClickDemoAlignItemsCenter, onClickDemoAlignItemsEnd ];
}