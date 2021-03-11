import React from 'react';
import ComplimentModel from '../model/Compliment';
import './Compliment.scss';

interface IComplimentProps {
    compliment : ComplimentModel;
    onClick : () => void;
}

const Compliment : React.FC<IComplimentProps> = props => {
    return (
        <div className={`compliment`} onClick={props.onClick}>
            {props.compliment.title}
        </div>
    );
}

export default Compliment;