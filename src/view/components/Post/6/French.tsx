import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { isMobile } from '../../../hooks/UseMediaQuery';
import PostTemplate from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Game from './models/Game';
import { getBackgroundColorFunction, renderGame } from './Post6Hooks';
import './PostPage.scss';


export enum Drawing {
    FOUR = 'four',
    EIGHT_PIKACHU = 'pikachu',
    SIXTEEN_POKEBALL = 'pokeball',
    SIXTEEN_CHARMANDER = 'charmander',
    SIXTEEN_AMONG_US = 'among-us',
    SIXTEEN_YOSHI = 'yoshi',
    THIRTYTWO = 'thirty-two'
}

// const game4x4 = Game.createGameFromDrawing(Drawing.FOUR);
// const game8x8 = Game.createGameFromDrawing(Drawing.EIGHT_PIKACHU);
// const game16x16Pokeball = Game.createGameFromDrawing(Drawing.SIXTEEN_POKEBALL);
// const game16x16Charmander = Game.createGameFromDrawing(Drawing.SIXTEEN_CHARMANDER);
// const game32x32 = Game.createGameFromDrawing(Drawing.THIRTYTWO);

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
    const [drawing, setDrawing] = useState(Drawing.FOUR);
    const active4ClassName = size == 4 ? 'active' : '';
    const active8ClassName = size == 8 ? 'active' : '';
    const active16ClassName = size == 16 ? 'active' : '';
    const active32ClassName = size == 32 ? 'active' : '';
    const pokeballIsUnselectedClassname = drawing != Drawing.SIXTEEN_POKEBALL ? 'unselected' : '';
    const charmanderIsUnselectedClassname = drawing != Drawing.SIXTEEN_CHARMANDER ? 'unselected' : '';
    const amongUsIsUnselectedClassname = drawing != Drawing.SIXTEEN_AMONG_US ? 'unselected' : '';
    const yoshiIsUnselectedClassname = drawing != Drawing.SIXTEEN_YOSHI ? 'unselected' : '';
    const fourIsUnselectedClassname = drawing != Drawing.FOUR ? 'unselected' : '';
    const pikachuIsUnselectedClassname = drawing != Drawing.EIGHT_PIKACHU ? 'unselected' : '';

    const game4x4 = Game.createGameFromDrawing(Drawing.FOUR);
    const [game, setGame] = useState(game4x4);

    const onClickSizeDrawing = (size : number, drawing : Drawing) => {
        setSize(size);
        setDrawing(drawing);
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
                <Button onClick={() => onClickSizeDrawing(4, Drawing.FOUR)} classname={`size-button`} isUnselected={size != 4}>
                    4 x 4
                </Button>
                <Button onClick={() => onClickSizeDrawing(8, Drawing.EIGHT_PIKACHU)} classname={`size-button`} isUnselected={size != 8}>
                    8 x 8
                </Button>
                <Button onClick={() => onClickSizeDrawing(16, Drawing.SIXTEEN_POKEBALL)} classname={`size-button`} isUnselected={size != 16}>
                    16 x 16
                </Button>
                <Button onClick={() => onClickSizeDrawing(32, Drawing.THIRTYTWO)} classname={`size-button`} isUnselected={size != 32}>
                    32 x 32
                </Button>
            </div>

            <div className={`drawing-icons-container`}>
                <div className={`flex-row button-line icon-4 ${active4ClassName}`}>
                    <div onClick={() => onClickSizeDrawing(4, Drawing.FOUR)} className={`icon-button four ${fourIsUnselectedClassname}`}/>
                </div><div className={`flex-row button-line icon-8 ${active8ClassName}`}>
                    <div onClick={() => onClickSizeDrawing(8, Drawing.EIGHT_PIKACHU)} className={`icon-button pikachu ${pikachuIsUnselectedClassname}`}/>
                </div>
                <div className={`flex-row button-line icon-16 ${active16ClassName}`}>
                    <div onClick={() => onClickSizeDrawing(16, Drawing.SIXTEEN_POKEBALL)} className={`icon-button pokeball ${pokeballIsUnselectedClassname}`}/>
                    <div onClick={() => onClickSizeDrawing(16, Drawing.SIXTEEN_CHARMANDER)} className={`icon-button charmander ${charmanderIsUnselectedClassname}`}/>
                    <div onClick={() => onClickSizeDrawing(16, Drawing.SIXTEEN_AMONG_US)} className={`icon-button among-us ${amongUsIsUnselectedClassname}`}/>
                    <div onClick={() => onClickSizeDrawing(16, Drawing.SIXTEEN_YOSHI)} className={`icon-button yoshi ${yoshiIsUnselectedClassname}`}/>
                </div>
            </div>

            <div className={`game`} style={{ height: gameSize, width: gameSize}}>
                {renderGame(Game.createGameFromDrawing(drawing))}
            </div>
            
        </PostTemplate>
    );
}

export default French;