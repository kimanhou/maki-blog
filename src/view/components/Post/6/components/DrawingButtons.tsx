import React from 'react';
import './DrawingButtons.scss';

interface IDrawingButtonsProps {
    height : number | string;
    size : number;
    selectedSize : number;
}

const DrawingButtons : React.FC<IDrawingButtonsProps> = props => {
    const activeClassname = props.selectedSize == props.size ? 'active' : '';
    return (
        <div className={`drawing-buttons ${activeClassname}`} style={{ height: props.height }}>
            {props.children}
        </div>
    );
}

export default DrawingButtons;