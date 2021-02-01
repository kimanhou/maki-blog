import React from 'react';
import Post, { IPostContentProps } from '../../../../model/Post';
import FadeIn from '../../FadeIn/FadeIn';
import Header from '../../Header/Header';
import './PostTemplate.scss';
import ArrowBack from './TemplateComponents/ArrowBack';
import BackToTop from './TemplateComponents/BackToTop';
import GoToTldr from './TemplateComponents/GoToTldr';
import NextAndPreviousPosts from './TemplateComponents/NextAndPreviousPosts/NextAndPreviousPosts';
import PostHeroImage from './TemplateComponents/PostHeroImage';
import PostTitleBottomLayer from './TemplateComponents/PostTitleBottomLayer';
import RelatedPosts from './TemplateComponents/RelatedPosts/RelatedPosts';
import Tldr from './TemplateComponents/Tldr';

interface IPostTemplateProps extends IPostContentProps {
    postId : number;
    postIdClassName : string;
    tldr : React.ReactNode;
    relatedPosts : Post[];
}

const PostTemplate : React.FC<IPostTemplateProps> = props => {
    const nextPost = Post.getNextPost(props.postId);
    const previousPost = Post.getPreviousPost(props.postId);

    return (
        <div className={`post ${props.postIdClassName}`}>
            <PostHeroImage title={props.title} titleTopLayerRef={props.titleTopLayerRef} />
            <div className={`main-wrapper`} id={`top`}>
                <PostTitleBottomLayer title={props.title} titleBottomLayerRef={props.titleBottomLayerRef} />
                <Header/>
                <ArrowBack/>
                <GoToTldr />
                <FadeIn noDelay>
                    <div className={`post-text`}>
                        {props.children}
                    </div>
                </FadeIn>
                <Tldr>
                    {props.tldr}    
                </Tldr>
                <RelatedPosts relatedPosts={props.relatedPosts} />
                <NextAndPreviousPosts nextPost={nextPost} previousPost={previousPost}/>
                <BackToTop />
            </div>
        </div>
    );
}

export default PostTemplate;