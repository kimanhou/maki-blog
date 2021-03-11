import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import { compliment1, compliment2, compliment3, compliment4, compliment5, compliment6, compliment7, compliment8, emptyCompliment } from './ComplimentsFrench';
import Compliment from './components/Compliment';
import ComplimentDetails from './components/ComplimentDetails';
import ComplimentModel from './model/Compliment';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 8;
    const tldr = <></>;

    const [ compliment, setCompliment ] = useState(emptyCompliment);
    const [ complimentDetailsActive, setComplimentDetailsActive ] = useState(false);


    const onClickCompliment = (compliment : ComplimentModel) => {
        setCompliment(compliment);
        setComplimentDetailsActive(true);
    }

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
                <Compliment compliment={compliment1} onClick={() => onClickCompliment(compliment1)}/>
                <Compliment compliment={compliment2} onClick={() => onClickCompliment(compliment2)}/>
                <Compliment compliment={compliment3} onClick={() => onClickCompliment(compliment3)}/>
                <Compliment compliment={compliment4} onClick={() => onClickCompliment(compliment4)}/>
                <Compliment compliment={compliment5} onClick={() => onClickCompliment(compliment5)}/>
                <Compliment compliment={compliment6} onClick={() => onClickCompliment(compliment6)}/>
                <Compliment compliment={compliment7} onClick={() => onClickCompliment(compliment7)}/>
                <Compliment compliment={compliment8} onClick={() => onClickCompliment(compliment8)}/>
            </section>

            <ComplimentDetails compliment={compliment} active={complimentDetailsActive} onClick={() => setComplimentDetailsActive(false)}/>
            
        </PostTemplate>
    );
}

export default French;