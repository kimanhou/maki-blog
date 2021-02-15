import React from 'react';
import { useState } from 'react';

export const useDemoExample1ControlColumns = (columnNumberMax : number) : [ number, () => void, () => void ] => {
    const [columnNumber, setColumnNumber] = useState(3);
    const addColumn = () => {
        if (columnNumber < columnNumberMax){
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
export const getRandomHeight = (isMobile : boolean) => {
    const min = Math.ceil(80);
    const max = isMobile ? Math.floor(200) : Math.floor(400);
    return Math.floor(Math.random() * (max - min) + min);
}
const example1RenderOneColumn = (index : number, columnNumber : number, heights : number[], classname : string) => {
    const backgroundColor = getBackgroundColor(index, columnNumber - 1);
    const color = getColor(backgroundColor);
    const height = heights[index];
    return (
        <div className={classname} style={{ backgroundColor: backgroundColor, color: color, height: height }}>
            {index + 1}
        </div>
    );
}

export const example1RenderColumns = (columnNumber : number, heights : number[]) => {
    if (columnNumber > 0) {
        var foo = Array.from(Array(columnNumber).keys());
        return foo.map(t => example1RenderOneColumn(t, columnNumber, heights, `example-1-column`));
    }
}


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien varius justo interdum malesuada. Nulla blandit nunc lacus. Phasellus mi sapien, vestibulum sit amet turpis vitae, malesuada tincidunt quam. Phasellus at scelerisque sapien. Integer id augue a enim pharetra bibendum sed non ipsum. Vivamus justo nisi, tincidunt sit amet placerat sit amet, dignissim id urna. Curabitur eget diam nec nisi luctus volutpat. Morbi aliquam sollicitudin sem, vel tristique ex placerat nec. Sed eu magna sit amet dolor interdum hendrerit ut ut quam. Aliquam neque libero, mattis eu ipsum tincidunt, maximus fringilla tortor. Nam semper feugiat dictum. Nullam euismod felis id feugiat faucibus.';
const lorempIpsumSplit = loremIpsum.split('. ');
const loremIpsumNumberOfSentencesMax = lorempIpsumSplit.length;

export const getRandomNumberOfSentences = (isMobile : boolean) => {
    const min = Math.ceil(1);
    const max = isMobile ? Math.floor(5) : Math.floor(loremIpsumNumberOfSentencesMax);
    return Math.floor(Math.random() * (max - min) + min);
}

const getText = (numberOfSentences : number) => {
    return lorempIpsumSplit.slice(0, numberOfSentences).join('. ');
}

const example2RenderOneColumn = (index : number, columnNumber : number, classname : string, sentences : number[]) => {
    const backgroundColor = getBackgroundColor(index, columnNumber - 1);
    const color = getColor(backgroundColor);
    const text = getText(sentences[index]);
    return (
        <div className={classname} style={{ backgroundColor: backgroundColor, color: color}}>
            <span className={`number`}>{index + 1}</span><br></br>
            {text}
        </div>
    );
}

export const example2RenderColumns = (columnNumber : number, sentences : number[]) => {
    if (columnNumber > 0) {
        var foo = Array.from(Array(columnNumber).keys());
        return foo.map(t => example2RenderOneColumn(t, columnNumber, `example-2-column`, sentences));
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