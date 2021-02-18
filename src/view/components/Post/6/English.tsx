import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 6;
    const tldr = 
    <>
        <Cross/><span></span>
        <br></br>
        <Cross/><span></span>
        <br></br>
        <Cross/><span></span>
        <br></br>
        <Cross/><span></span>
    </>;

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`six`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>
                
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>

            <p>
                
            </p>
            

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>
            <p>
                
            </p>

            {/* <PhotoWithCredits imageUrl={getImageSrc(postId, '1.jpg')} text='Photo by UX Indonesia on Unsplash' url='https://unsplash.com/photos/qC2n6RQU4Vw' /> */}

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>
            <p>
                
            </p>
            
        </PostTemplate>
    );
}

export default English;