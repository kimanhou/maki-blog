import React from 'react';
import './PostHeroImage.scss';

interface IPostHeroImageProps {
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
}

const PostHeroImage : React.FC<IPostHeroImageProps> = props => {
    return(
        <div className={`post-hero-image`}>
            <div className={`post-title top-layer`} ref={props.titleTopLayerRef}>
                {props.title}
            </div>
        </div>
    );
}

export default PostHeroImage;