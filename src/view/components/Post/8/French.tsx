import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import Compliment from './components/Compliment';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 8;
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
                    postIdClassName={`eight`}
                    tldr={tldr}
                    relatedPosts={[]}
                    skipToFun removeProgressionBarAndSkipToFun>
            <section className={`take-a-compliment-container`}>
                <Compliment sentence='Tu es génial / géniale'/>
                <Compliment sentence='Tu es radieux / radieuse'/>
                <Compliment sentence='Tu es incroyable'/>
                <Compliment sentence='Tu es courageux / courageuse'/>
                <Compliment sentence='Tu es unique'/>
                <Compliment sentence='Tu en vaux la peine'/>
                <Compliment sentence='Tu es une bonne personne'/>
                <Compliment sentence='Tu le mérites'/>
            </section>
            
        </PostTemplate>
    );
}

export default French;