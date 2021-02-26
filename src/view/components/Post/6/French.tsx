import React, { useEffect, useRef, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { isMobile } from '../../../hooks/UseMediaQuery';
import Text from '../../LocalisationContext/Text';
import PostTemplate from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import DrawingButton from './components/DrawingButton';
import DrawingButtons from './components/DrawingButtons';
import GameComponent from './components/GameComponent';
import VictoryScreen from './components/VictoryScreen';
import Game, { Drawing } from './models/Game';
// import { renderGame } from './Post6Hooks';
import './PostPage.scss';


const game4x4 = Game.createGameFromDrawing(Drawing.FOUR);

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
    const drawing = game.drawing;

    const finishedGame = Game.createGameFromDrawing(game.drawing);
    const isWin = game.equals(finishedGame);
    const [victoryScreenActive, setVictoryScreenActive] = useState(false);
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
                    <DrawingButtons height={gameSize} size={4} selectedSize={size}>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.FOUR)} className='four' selectedDrawing={drawing} drawing={Drawing.FOUR}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.FOUR_PACMAN)} className='pacman' selectedDrawing={drawing} drawing={Drawing.FOUR_PACMAN}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.FOUR_SOUTH_PARK)} className='south-park' selectedDrawing={drawing} drawing={Drawing.FOUR_SOUTH_PARK}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.FOUR_TARZAN)} className='tarzan' selectedDrawing={drawing} drawing={Drawing.FOUR_TARZAN}/>
                    </DrawingButtons>
                    <DrawingButtons height={gameSize} size={8} selectedSize={size}>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.EIGHT_PIKACHU)} className='pikachu' selectedDrawing={drawing} drawing={Drawing.EIGHT_PIKACHU}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.EIGHT_KIRBY)} className='kirby' selectedDrawing={drawing} drawing={Drawing.EIGHT_KIRBY}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.EIGHT_SPACE_INVADER)} className='space-invader' selectedDrawing={drawing} drawing={Drawing.EIGHT_SPACE_INVADER}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.EIGHT_GHOST)} className='ghost' selectedDrawing={drawing} drawing={Drawing.EIGHT_GHOST}/>
                    </DrawingButtons>
                    <DrawingButtons height={gameSize} size={16} selectedSize={size}>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_POKEBALL)} className='pokeball' selectedDrawing={drawing} drawing={Drawing.SIXTEEN_POKEBALL}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_CHARMANDER)} className='charmander' selectedDrawing={drawing} drawing={Drawing.SIXTEEN_CHARMANDER}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_AMONG_US)} className='among-us' selectedDrawing={drawing} drawing={Drawing.SIXTEEN_AMONG_US}/>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.SIXTEEN_YOSHI)} className='yoshi' selectedDrawing={drawing} drawing={Drawing.SIXTEEN_YOSHI}/>
                    </DrawingButtons>
                    <DrawingButtons height={gameSize} size={32} selectedSize={size}>
                        <DrawingButton onClick={() => onClickSizeDrawing(Drawing.THIRTYTWO_PIKACHU)} className='pikachu-32' selectedDrawing={drawing} drawing={Drawing.THIRTYTWO_PIKACHU}/>
                    </DrawingButtons>
                </div>
                <div className={`game-and-cheating-game`}>
                    {/* <div className={`game`} style={{ height: gameSize, width: gameSize}}>
                        {renderGame(game, setGame)}
                    </div> */}
                    <GameComponent game={game} gameSize={gameSize} setGame={setGame} classname=''/>
                    <div className={`cheating-game-container ${cheatingClassName}`}>
                        {/* <div className={`cheating-game game`} style={{ height: gameSize, width: gameSize}}>
                            {renderGame(finishedGame, () => {})}
                        </div> */}
                        <GameComponent game={finishedGame} gameSize={gameSize} setGame={() => {}} classname='cheating-game'/>
                        <div className={`cheating-game-background`}></div>
                    </div>
                </div>
                <div className={`column shuffle-in ${countDownActiveClassname}`}>
                    <div className={`shuffle-in-content `}>
                        <Text english='Shuffle in' french= "Mélange dans" />
                        <div className={`count-down`}>
                            {countDown}
                        </div>
                    </div>
                </div>
            </div>

            <VictoryScreen active={victoryScreenActive} onClick={() => setVictoryScreenActive(false)}/>

            {/* <div className={`temp`}></div> */}
            
        </PostTemplate>
    );
}

export default French;