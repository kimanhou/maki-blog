import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 6;
    const tldr = <></>;

    const [size, setSize] = useState(4);

    const renderGameCell = () => {
        return <div className={`game-cell`}></div>;
    }

    const renderGameRow = (numberOfCells : number) => {
        var foo = Array.from(Array(numberOfCells).keys());
        return <div className={`game-row`}>
            {foo.map(t => renderGameCell())}
        </div>
    }

    const renderGameRows = (numberOfRows : number, numberOfCellsPerRow : number) => {
        var foo = Array.from(Array(numberOfRows).keys());
        return foo.map(t => renderGameRow(numberOfCellsPerRow))
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

            <div className={`game`}>
                {renderGameRows(size, size)}
            </div>
            

            
        </PostTemplate>
    );
}

export default French;