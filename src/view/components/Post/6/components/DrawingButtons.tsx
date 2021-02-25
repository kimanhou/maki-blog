import React from 'react';
import { isMobile } from '../../../../hooks/UseMediaQuery';
import './DrawingButtons.scss';

interface IDrawingButtonsProps {
    height : number | string;
    size : number;
    selectedSize : number;
}

const DrawingButtons : React.FC<IDrawingButtonsProps> = props => {
    const isActive = props.selectedSize == props.size;
    const activeClassname = isActive ? 'active' : '';
    const mobile = isMobile();
    const getHeight = () => {
        if (mobile) {
            if (isActive) {
                return '100px';
            }
            else {
                return 'unset';
            }
        }
        return props.height;
    }
    return (
        <div className={`drawing-buttons ${activeClassname}`} style={{ height: getHeight() }}>
            {props.children}
        </div>
    );
}

export default DrawingButtons;