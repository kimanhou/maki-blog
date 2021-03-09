import React from 'react';
import PhotoCredits from './PhotoCredits/PhotoCredits';
import './PostHeroImage.scss';

interface IPostHeroImageProps {
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
    photoCreditName ?: string;
    photoCreditUrl ?: string;
    photoCreditWebsite ?: string;
}

const PostHeroImage : React.FC<IPostHeroImageProps> = props => {
    return(
        <div className={`post-hero-image`}>
            <h1 className={`post-title top-layer`} ref={props.titleTopLayerRef}>
                {props.title}
            </h1>
            {props.photoCreditName != undefined && props.photoCreditUrl != undefined && props.photoCreditWebsite != undefined &&
            <PhotoCredits name={props.photoCreditName} url={props.photoCreditUrl} website={props.photoCreditWebsite} />}
        </div>
    );
}

export default PostHeroImage;