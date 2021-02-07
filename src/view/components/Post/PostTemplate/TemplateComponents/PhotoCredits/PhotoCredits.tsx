import React from 'react';
import './PhotoCredits.scss';

interface IPhotoCreditsProps {
    name : string;
    url : string;
    website : string;
}

const PhotoCredits : React.FC<IPhotoCreditsProps> = props => {
    return (
        <div className={`photo-credits`}>
            <a href={props.url} target='_blank'>
                <i>Photo by {props.name} on {props.website}</i>
            </a>
        </div>
    );
}

export default PhotoCredits;