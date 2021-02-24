import React from 'react';
import { Drawing } from '../models/Game';
import './DrawingButton.scss';

interface IDrawingButtonProps {
    drawing : Drawing
    className : string;
    selectedDrawing : Drawing;
    onClick : () => void;
}

const DrawingButton : React.FC<IDrawingButtonProps> = props => {
    const isUnselected = props.selectedDrawing != props.drawing ? 'unselected' : '';
    return(
        <div onClick={props.onClick} className={`icon-button ${props.className} ${isUnselected}`}/>
    );
}

export default DrawingButton;