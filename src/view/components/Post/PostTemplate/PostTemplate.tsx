import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import FadeIn from '../../FadeIn/FadeIn';
import './PostTemplate.scss';
import BackToTop from './TemplateComponents/BackToTop';
import GoToTldr from './TemplateComponents/GoToTldr';
import PostHeroImage from './TemplateComponents/PostHeroImage';
import PostTitleBottomLayer from './TemplateComponents/PostTitleBottomLayer';
import Tldr from './TemplateComponents/Tldr';

interface IPostTemplateProps extends IPostContentProps {
    postIdClassName : string;
    tldr : React.ReactNode;
}

const PostTemplate : React.FC<IPostTemplateProps> = props => {
    return (
        <div className={`post ${props.postIdClassName}`}>
            <PostHeroImage title={props.title} titleTopLayerRef={props.titleTopLayerRef} />
            <div className={`main-wrapper`} id={`top`}>
                <PostTitleBottomLayer title={props.title} titleBottomLayerRef={props.titleBottomLayerRef} />
                <GoToTldr />
                <FadeIn noDelay>
                    <div className={`post-text`}>
                        {props.children}
                    </div>
                </FadeIn>
                <Tldr>
                    {props.tldr}    
                </Tldr>
                <BackToTop />
            </div>
        </div>
    );
}

export default PostTemplate;