import React from 'react';
import Text from '../../../../LocalisationContext/Text';
import './PhotoCredits.scss';

interface IPhotoCreditsProps {
    name : string;
    url : string;
    website : string;
}

const PhotoCredits : React.FC<IPhotoCreditsProps> = props => {
    return (
        <div className={`photo-credits`}>
            <a href={props.url} target='_blank' rel="noopener">
                <i><Text english="Photo by" french="Photo de"/> {props.name} <Text english="on" french="sur"/> {props.website}</i>
            </a>
        </div>
    );
}

export default PhotoCredits;