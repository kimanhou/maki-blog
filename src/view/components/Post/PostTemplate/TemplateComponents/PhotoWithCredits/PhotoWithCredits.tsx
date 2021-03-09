import React from 'react';
import './PhotoWithCredits.scss';

interface IPhotoWithCreditsProps {
    imageUrl : string;
    text : string;
    url ?: string;
}

const PhotoWithCredits : React.FC<IPhotoWithCreditsProps> = props => {
    return (
        <div className={`photo-with-credits`}>
            <img src={props.imageUrl}/>
            <div className={`photo-with-credits-text`}>
                {props.url != undefined && 
                    <a href={props.url} target='_blank' rel="noopener">{props.text}</a>
                }
                {props.url == undefined && props.text }
            </div>
        </div>
    );
}

export default PhotoWithCredits;