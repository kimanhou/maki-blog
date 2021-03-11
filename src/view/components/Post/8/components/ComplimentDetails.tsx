import React from 'react';
import Compliment from '../model/Compliment';
import './ComplimentDetails.scss';

interface IComplimentDetailsProps {
    compliment : Compliment
    active : boolean;
    onClick : () => void;
}

const ComplimentDetails : React.FC<IComplimentDetailsProps> = props => {
    const activeClassname = props.active ? 'active' : '';

    return (
        <section className={`compliment-details ${activeClassname}`} onClick={props.onClick}>
            <div className={`compliment-details-content`}>
                <h2 className={`compliment-details-title`}>
                    {props.compliment.title}
                </h2>
                {props.compliment.text}
                <p className={`compliment-details-hastag`}>
                    #goodvibesonly
                </p>
            </div>
        </section>
    );
}

export default ComplimentDetails;