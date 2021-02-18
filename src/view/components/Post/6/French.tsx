import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { isMobile } from '../../../hooks/UseMediaQuery';
import PostTemplate from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import { renderGameRows } from './Post6Hooks';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 6;
    const tldr = <></>;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const mobile = isMobile();
    const isLandscape = windowWidth > windowHeight;
    const mainMargin = mobile ? 30 : 70;
    const gameMaxWidth = Math.min(windowHeight / 2, windowWidth - (mainMargin * 2) - 2);
    const gameSize = isLandscape ? '75vh' : gameMaxWidth;

    const [size, setSize] = useState(4);
    const [drawing16, setDrawing16] = useState('pokeball');
    const active16ClassName = size == 16 ? 'active' : '';
    const pokeballIsUnselectedClassname = drawing16 != 'pokeball' ? 'unselected' : '';
    const charmanderIsUnselectedClassname = drawing16 != 'charmander' ? 'unselected' : '';
    const getDrawing = () => {
        if (size == 16) {
            return drawing16;
        }
        return '';
    } 

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`six`}
                    tldr={tldr}
                    relatedPosts={[]}
                    skipToFun removeProgressionBarAndSkipToFun>
                        
            <div className={`flex-row button-line`}>
                <Button onClick={() => setSize(4)} classname={`size-button`} isUnselected={size != 4}>
                    4 x 4
                </Button>
                <Button onClick={() => setSize(8)} classname={`size-button`} isUnselected={size != 8}>
                    8 x 8
                </Button>
                <Button onClick={() => setSize(16)} classname={`size-button`} isUnselected={size != 16}>
                    16 x 16
                </Button>
                <Button onClick={() => setSize(32)} classname={`size-button`} isUnselected={size != 32}>
                    32 x 32
                </Button>
            </div>

            <div className={`flex-row button-line icon-16 ${active16ClassName}`}>
                <div onClick={() => setDrawing16('pokeball')} className={`icon-button pokeball ${pokeballIsUnselectedClassname}`}>
                    
                </div>
                <div onClick={() => setDrawing16('charmander')} className={`icon-button charmander ${charmanderIsUnselectedClassname}`}>
                    
                </div>
            </div>

            <div className={`game`} style={{ height: gameSize, width: gameSize}}>
                {renderGameRows(size, size, getDrawing())}
            </div>
            
        </PostTemplate>
    );
}

export default French;