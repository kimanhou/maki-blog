import React from 'react';
import { Drawing } from '../models/Game';
import './DrawingButton.scss';

interface IDrawingButtonProps {
    drawing : Drawing
    className : string;
}

const DrawingButton : React.FC<IDrawingButtonProps> = props => {
    return(
        <div></div>
        // <div onClick={() => onClickSizeDrawing(props.drawing)} className={`icon-button ${props.className} ${pokeballIsUnselectedClassname}`}/>
    );
}

export default DrawingButton;