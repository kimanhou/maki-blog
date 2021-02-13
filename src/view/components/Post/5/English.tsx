import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 5;
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
                    postIdClassName={`five`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>
                <b>Flexbox</b> is a layout method for easily laying out items in rows or columns. 
                Items flex to fill additional space and shrink to fit into smaller spaces.
                This is my personal cheat sheet on flexbox.
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

            <Cross/><span className={`step-title`}>Useful links</span>
            <p>
                <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank'>Mozilla's documentation</a>
            </p>
            
        </PostTemplate>
    );
}

export default English;