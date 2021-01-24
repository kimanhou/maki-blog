import React from 'react';
import { myScrollTo } from '../../../../../Util';
import FadeIn from '../../../FadeIn/FadeIn';
import './Button.scss';

interface IButtonProps {
    onClick : () => void;
    classname : string;
}

const Button : React.FC<IButtonProps> = props => {
    return(
        <FadeIn noDelay>
            <div className={`button ${props.classname}`} onClick={props.onClick}>
                <div className={`button-yellow`} />
                <div className={`button-border`} />
                <div className={`button-container`}>
                    {props.children}
                </div>
            </div>
        </FadeIn>
    );
}

export default Button;