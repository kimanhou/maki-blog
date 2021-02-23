import React, { useEffect, useRef, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { isMobile } from '../../../hooks/UseMediaQuery';
import Text from '../../LocalisationContext/Text';
import PostTemplate from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Game, { Drawing } from './models/Game';
import { renderGame } from './Post6Hooks';
import './PostPage.scss';


const game4x4 = Game.createGameFromDrawing(Drawing.FOUR);
const game8x8 = Game.createGameFromDrawing(Drawing.EIGHT_PIKACHU);
const game16x16Pokeball = Game.createGameFromDrawing(Drawing.SIXTEEN_POKEBALL);
const game16x16Charmander = Game.createGameFromDrawing(Drawing.SIXTEEN_CHARMANDER);
const game32x32 = Game.createGameFromDrawing(Drawing.THIRTYTWO_PIKACHU);

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

    const [game, setGame] = useState(game4x4);
    const size = game.getSize();
    const active4ClassName = size == 4 ? 'active' : '';
    const active8ClassName = size == 8 ? 'active' : '';
    const active16ClassName = size == 16 ? 'active' : '';
    const active32ClassName = size == 32 ? 'active' : '';
    const drawing = game.drawing;
    const pokeballIsUnselectedClassname = drawing != Drawing.SIXTEEN_POKEBALL ? 'unselected' : '';
    const charmanderIsUnselectedClassname = drawing != Drawing.SIXTEEN_CHARMANDER ? 'unselected' : '';
    const amongUsIsUnselectedClassname = drawing != Drawing.SIXTEEN_AMONG_US ? 'unselected' : '';
    const yoshiIsUnselectedClassname = drawing != Drawing.SIXTEEN_YOSHI ? 'unselected' : '';
    const fourIsUnselectedClassname = drawing != Drawing.FOUR ? 'unselected' : '';
    const fourPacmanIsUnselectedClassname = drawing != Drawing.FOUR_PACMAN ? 'unselected' : '';
    const fourSouthParkIsUnselectedClassname = drawing != Drawing.FOUR_SOUTH_PARK ? 'unselected' : '';
    const fourTarzanIsUnselectedClassname = drawing != Drawing.FOUR_TARZAN ? 'unselected' : '';
    const pikachuIsUnselectedClassname = drawing != Drawing.EIGHT_PIKACHU ? 'unselected' : '';
    const kirby8IsUnselectedClassname = drawing != Drawing.EIGHT_KIRBY ? 'unselected' : '';
    const spaceInvader8IsUnselectedClassname = drawing != Drawing.EIGHT_SPACE_INVADER ? 'unselected' : '';
    const ghost8IsUnselectedClassname = drawing != Drawing.EIGHT_GHOST ? 'unselected' : '';
    const pikachu32IsUnselectedClassname = drawing != Drawing.THIRTYTWO_PIKACHU ? 'unselected' : '';

    const finishedGame = Game.createGameFromDrawing(game.drawing);
    const isWin = game.equals(finishedGame);
    const [victoryScreenActive, setVictoryScreenActive] = useState(false);
    const victoryScreenActiveClassname = victoryScreenActive ? 'active' : '';
    const [isFirstTime, setIsFirstTime] = useState(true);
    useEffect(() => {
        if (isWin && !isFirstTime) {
            setVictoryScreenActive(true);
        }
        else {
            setIsFirstTime(false);
        }
    }, [isWin]);

    const onClickSizeDrawing = (drawing : Drawing) => {
        setGame(Game.createGameFromDrawing(drawing));
        setLaunchCountDown(true);
        setIsFirstTime(true);
    }

    const onShuffle = () => {
        setGame(game.randomise());
    }

    const [countDown, setCountDown] = useState(3);
    const [launchCountDown, setLaunchCountDown] = useState(true);
    const countDownActiveClassname = countDown == 0 ? 'inactive' : '';
    const countdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const doCountDown = (countDown : number) => {
        setCountDown(countDown);
        if (countDown > 0) {
            countdownTimeoutRef.current = setTimeout(() => doCountDown(countDown - 1), 1000);
        }
        if (countDown == 0) {
            onShuffle();
            countdownTimeoutRef.current = null;
        }
    }
    useEffect(() => {
        if(launchCountDown){
            if(countdownTimeoutRef.current != null){
                clearTimeout(countdownTimeoutRef.current);
                countdownTimeoutRef.current = null;
            }
            doCountDown(3);
            setLaunchCountDown(false);
        }
    }, [launchCountDown])


    const [cheating, setCheating] = useState(false);
    const cheatingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const cheatingClassName = cheating ? 'active' : '';
    const onCheat = () => {
        setCheating(true);
        if (cheatingTimeoutRef.current != null) {
            clearTimeout(cheatingTimeoutRef.current);
            cheatingTimeoutRef.current = null;
        }
        cheatingTimeoutRef.current = setTimeout(() => {
            setCheating(false);
            cheatingTimeoutRef.current = null;
        }, 3000);
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
                <Button onClick={onShuffle} classname={`size-button`} isUnselected={false}>
                    <Text english='shuffle' french='mélanger'/>
                </Button>
                <Button onClick={onCheat} classname={`size-button`} isUnselected={false}>
                    <Text english='cheat' french='tricher'/>
                </Button>
            </div>
                        
            <div className={`flex-row button-line`}>
                <Button onClick={() => onClickSizeDrawing(Drawing.FOUR)} classname={`size-button`} isUnselected={size != 4}>
                    4 x 4
                </Button>
                <Button onClick={() => onClickSizeDrawing(Drawing.EIGHT_PIKACHU)} classname={`size-button`} isUnselected={size != 8}>
                    8 x 8
                </Button>
                <Button onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_POKEBALL)} classname={`size-button`} isUnselected={size != 16}>
                    16 x 16
                </Button>
                <Button onClick={() => onClickSizeDrawing(Drawing.THIRTYTWO_PIKACHU)} classname={`size-button`} isUnselected={size != 32}>
                    32 x 32
                </Button>
            </div>

            <div className={`game-container`}>
                <div className={`column drawing-icons-container`}>
                    <div className={`flex-column button-column icon-4 ${active4ClassName}`} style={{ height: gameSize }}>
                        <div onClick={() => onClickSizeDrawing(Drawing.FOUR)} className={`icon-button four ${fourIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.FOUR_PACMAN)} className={`icon-button pacman ${fourPacmanIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.FOUR_SOUTH_PARK)} className={`icon-button south-park ${fourSouthParkIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.FOUR_TARZAN)} className={`icon-button tarzan ${fourTarzanIsUnselectedClassname}`}/>
                    </div>
                    <div className={`flex-column button-column icon-8 ${active8ClassName}`} style={{ height: gameSize }}>
                        <div onClick={() => onClickSizeDrawing(Drawing.EIGHT_PIKACHU)} className={`icon-button pikachu ${pikachuIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.EIGHT_KIRBY)} className={`icon-button kirby ${kirby8IsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.EIGHT_SPACE_INVADER)} className={`icon-button space-invader ${spaceInvader8IsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.EIGHT_GHOST)} className={`icon-button ghost ${ghost8IsUnselectedClassname}`}/>
                    </div>
                    <div className={`flex-column button-column icon-16 ${active16ClassName}`} style={{ height: gameSize }}>
                        <div onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_POKEBALL)} className={`icon-button pokeball ${pokeballIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_CHARMANDER)} className={`icon-button charmander ${charmanderIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_AMONG_US)} className={`icon-button among-us ${amongUsIsUnselectedClassname}`}/>
                        <div onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_YOSHI)} className={`icon-button yoshi ${yoshiIsUnselectedClassname}`}/>
                    </div>
                    <div className={`flex-column button-column icon-32 ${active32ClassName}`} style={{ height: gameSize }}>
                        <div onClick={() => onClickSizeDrawing(Drawing.THIRTYTWO_PIKACHU)} className={`icon-button pikachu-32 ${pikachu32IsUnselectedClassname}`}/>
                    </div>
                </div>
                <div className={`game-container-2`}>
                    <div className={`game`} style={{ height: gameSize, width: gameSize}}>
                        {renderGame(game, setGame)}
                    </div>
                    <div className={`cheating-game-container ${cheatingClassName}`}>
                        <div className={`cheating-game game`} style={{ height: gameSize, width: gameSize}}>
                            {renderGame(finishedGame, () => {})}
                        </div>
                        <div className={`cheating-game-background`}></div>
                    </div>
                </div>
                <div className={`column shuffle-in`}>
                    <div className={`shuffle-in-content ${countDownActiveClassname}`}>
                        <Text english='Shuffle in' french= "Mélange dans" />
                        <div className={`count-down`}>
                            {countDown}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`victory-screen ${victoryScreenActiveClassname}`} onClick={() => setVictoryScreenActive(false)}>
                <Text english='Victory !' french='Victoire !'/>
                <div className="before"></div>
                <div className="after"></div>
            </div>
            
        </PostTemplate>
    );
}

export default French;