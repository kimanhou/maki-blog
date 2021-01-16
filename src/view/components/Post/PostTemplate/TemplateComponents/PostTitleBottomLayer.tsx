import React from 'react';
import './PostTitleBottomLayer.scss';

interface IPostTitleBottomLayerProps {
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
}

const PostTitleBottomLayer : React.FC<IPostTitleBottomLayerProps> = props => {
    return(
        <div className={`post-title bottom-layer`} ref={props.titleBottomLayerRef}>
            {props.title}
        </div>
    );
}

export default PostTitleBottomLayer;