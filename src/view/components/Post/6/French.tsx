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

            <div className={`game`} style={{ height: gameSize, width: gameSize}}>
                {renderGameRows(size, size)}

                {/* 0 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-off-black)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-off-black)'}}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-off-black)'}}></div>
                </div>

                {/* 1 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                </div> */}

                {/* 2 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                </div> */}

                {/* 3 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'black'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'black'}}></div>
                </div> */}

                {/* 4 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'red'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                </div> */}

                {/* 5 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(197,109,26)'}}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`}></div>
                </div> */}

                {/* 6 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(197,109,26)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} ></div>
                </div> */}

                {/* 7 */}
                {/* <div className={`game-row`}>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'var(--color-yellow)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(197,109,26)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(197,109,26)'}}></div>
                    <div className={`game-cell`} style={{ backgroundColor: 'rgb(253,152,39)'}}></div>
                    <div className={`game-cell`} ></div>
                </div>  */}
            </div>
            
        </PostTemplate>
    );
}

export default French;