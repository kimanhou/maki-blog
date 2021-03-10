import React from 'react';
import './Compliment.scss';

interface IComplimentProps {
    sentence : string;
}

const Compliment : React.FC<IComplimentProps> = props => {
    return (
        <div className={`compliment`}>
            {props.sentence}
        </div>
    );
}

export default Compliment;