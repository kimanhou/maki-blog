import React, { useEffect, useState } from 'react';
import './InstagramPhoto.scss';

interface IInstagramPhotoProps {
    caption : string;
    photoCredits : string;
    url : string;
}

const InstagramPhoto : React.FC<IInstagramPhotoProps> = props => {
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    useEffect(() => {
        fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${props.url}&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3`)
            .then(resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(json => json["thumbnail_url"])
            .then(setThumbnailUrl)
    }, []);

    return(
        <div className={`insta-photo`} style={{ backgroundImage: `url('${thumbnailUrl}')` }}>
            <a href={props.url} target='_blank' rel="noopener">
                <div className={`insta-photo-background-hover`}></div>
                <div className='insta-photo-caption'>
                    {props.caption}
                </div>
                <div className='insta-photo-photo-credits'>
                    {props.photoCredits}
                </div>
            </a>
       </div>
    )
}

export default InstagramPhoto;