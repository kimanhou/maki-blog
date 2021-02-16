import React, { useEffect, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { myScrollToWithOffset } from '../../../../Util';
import { isMobile } from '../../../hooks/UseMediaQuery';
import Text from '../../LocalisationContext/Text';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import { useDemoFlexDirection, useDemoAlignItems, useDemoFlex, useDemoExample1ControlColumns, getRandomHeight, getRandomNumberOfSentences, example1RenderColumns, example2RenderColumns } from './Post5Hooks';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 5;
    const mobile = isMobile();
    const tldr = <></>;

    const [flexDirection, onClickFlexDirection] = useDemoFlexDirection();
    const [alignItems, onClickDemoAlignItemsStart, onClickDemoAlignItemsCenter, onClickDemoAlignItemsEnd] = useDemoAlignItems();
    const [justifyContent, onClickDemoJustifyContentStart, onClickDemoJustifyContentCenter, onClickDemoJustifyContentEnd] = useDemoAlignItems();
    const [oneFlex1, onClickOneFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname1 = oneFlex1 == '1' ? 'active' : '';
    const [twoFlex1, onClickTwoFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname2 = twoFlex1 == '1' ? 'active' : '';
    const [threeFlex1, onClickThreeFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname3 = threeFlex1 == '1' ? 'active' : '';

    const columnNumberMax = mobile ? 5 : 10;
    const gutter = mobile ? 10 : 20;
    const example1Height = mobile ? 200 : 400;
    const [example1ColumnNumber, example1AddColumn, example1RemoveColumn] = useDemoExample1ControlColumns(columnNumberMax);
    const computeHeights = (mobile : boolean) => {
        return Array.from(Array(10).keys()).map(t => getRandomHeight(mobile));
    }
    const [heights, setHeights] = useState(() => computeHeights(mobile));
    useEffect(() => {
        setHeights(computeHeights(mobile));
    }, [mobile]);

    const [example2ColumnNumber, example2AddColumn, example2RemoveColumn] = useDemoExample1ControlColumns(columnNumberMax);
    const computeSentences = (mobile : boolean) => {
        return Array.from(Array(10).keys()).map(t => getRandomNumberOfSentences(mobile));
    }
    const [sentences, setSentences] = useState(() => computeSentences(mobile));
    useEffect(() => {
        setSentences(computeSentences(mobile));
    }, [mobile]);

    const example2flex = mobile ? 80 : 150;
    const [example2FlexWidthSwitch, setExample2FlexWidthSwitch] = useState('flex');
    const example2OnClickSwitch = () => {
        if (example2FlexWidthSwitch == 'flex') {
            setExample2FlexWidthSwitch('width');
        }
        else {
            setExample2FlexWidthSwitch('flex');
        }
    }


    const goToDemo = () => {
        myScrollToWithOffset('fun', -190);
    }

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`five`}
                    tldr={tldr}
                    relatedPosts={[]}
                    skipToFun>
            <p>
                <b>Flexbox</b> is a layout method for easily laying out items in rows or columns. 
                Items flex to fill additional space and shrink to fit into smaller spaces.
                
            </p>
            <p>
                This method allows among other things to:<br></br>
                    <Cross/><span>vertically center a block inside its parent</span><br></br>
                    <Cross/><span>make lines of equal height whatever their content</span><br></br>
                    <Cross/><span>make columns of equal width whatever their content</span><br></br>
                <br></br>
                More generally, it is easy to ensure that the children occupy the same place, in width and / or length, inside their parent.
            </p>
            <p>
                This is my personal cheat sheet on flexbox.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. The theory</span>

            <p>
                The code snippet below designates a <i>flex container</i>. This is the parent <span className={`code-element`}>div</span>.
            </p>
            
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;
            </div>

            <p>
                If you want to organize this parent <span className={`code-element`}>div</span> in columns, that is to say divide it into several columns next to each other, you must set the <i>flex-direction</i> to row.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;
            </div>

            <img src={getImageSrc(postId, '1-en.png')}/>

            <p>
                To <b>horizontally center</b> the children inside their parent, use the <i>justify-content</i> property.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>justify-content</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <img src={getImageSrc(postId, '2-en.png')}/>

            <p>
                To <b>vertically center</b> the children inside their parent, use the <i>align-items</i> property.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>align-items</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <img src={getImageSrc(postId, '3-en.png')}/>

            <p>
                If you want to organize the parent <span className={`code-element`}>div</span> into rows, that is to say divide it into several rows one above the other, you must give it a column direction. 
                The <i>align-items</i> and <i>justify-content</i> properties are then swapped (because the primary axis and the secondary axis are swapped): <i>align-items</i> then controls the horizontal alignment and <i>justify-content</i> the vertical alignment.

            </p>
            <p>
                For clarity, you can play around with <span onClick={goToDemo} className={`cursor-pointer`}>the demo module</span> below.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>column</span>;
            </div>

            <img src={getImageSrc(postId, '4-en.png')}/>


            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`} id={`fun`}>2. The demo</span>
            <p>
                Click on the buttons to modify the properties of the parent <span className={`code-element`}>div</span> and click on the children to control their size with the <span className={`code-element`}>flex: 1;</span> property.
            </p>

            <div className={`flex-row demo-button-line`}>
                <Button onClick={onClickFlexDirection} classname={`demo-button`} isUnselected={flexDirection == 'row'}>
                    flex-direction: column;
                </Button>
                <Button onClick={onClickFlexDirection} classname={`demo-button`} isUnselected={flexDirection == 'column'}>
                    flex-direction: row;
                </Button>
            </div>
            <div className={`flex-row demo-button-line`}>
                <Button onClick={onClickDemoAlignItemsStart} classname={`demo-button`} isUnselected={alignItems != 'flex-start'}>
                    align-items: flex-start;
                </Button>
                <Button onClick={onClickDemoAlignItemsCenter} classname={`demo-button`} isUnselected={alignItems != 'center'}>
                    align-items: center;
                </Button>
                <Button onClick={onClickDemoAlignItemsEnd} classname={`demo-button`} isUnselected={alignItems != 'flex-end'}>
                    align-items: flex-end;
                </Button>
            </div>
            <div className={`flex-row demo-button-line`}>
                <Button onClick={onClickDemoJustifyContentStart} classname={`demo-button`} isUnselected={justifyContent != 'flex-start'}>
                    justify-content: flex-start;
                </Button>
                <Button onClick={onClickDemoJustifyContentCenter} classname={`demo-button`} isUnselected={justifyContent != 'center'}>
                    justify-content: center;
                </Button>
                <Button onClick={onClickDemoJustifyContentEnd} classname={`demo-button`} isUnselected={justifyContent != 'flex-end'}>
                    justify-content: flex-end;
                </Button>
            </div>
            
            <div className={`demo ${flexDirection}`} style={{ alignItems: alignItems, justifyContent: justifyContent }}>
                <div className={`demo-child one`} style={{ flex: oneFlex1 }} onClick={onClickOneFlex1}>
                    1
                    <div className={`demo-child-flex1 ${demoChildFlex1ActiveClassname1}`}>flex: 1;</div>
                </div>
                <div className={`demo-child two`} style={{ flex: twoFlex1 }} onClick={onClickTwoFlex1}>
                    2
                    <div className={`demo-child-flex1 ${demoChildFlex1ActiveClassname2}`}>flex: 1;</div>
                </div>
                <div className={`demo-child three`} style={{ flex: threeFlex1 }} onClick={onClickThreeFlex1}>
                    3
                    <div className={`demo-child-flex1 ${demoChildFlex1ActiveClassname3}`}>flex: 1;</div>
                </div>
            </div>


            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Common examples</span><br></br>
            <br></br>
            <Cross/><span>
                Divide a <span className={`code-element`}>div</span> into columns of equal width and separated from each other by a gutter, all centered horizontally.
            </span>
            <p>
                Click on the buttons below to add or remove columns (maximum number of columns: 10).
            </p>

            <div className={`example-1-consignes`}>
                <div className={`example-1-buttons-circle`}>
                    <img src={getImageSrc(postId, 'circle.png')}/>
                    <div className={`flex-row example-1-buttons`}>
                        <p className={`example-1-button-text`}>Number of columns: </p>
                        <Button onClick={example1RemoveColumn} classname={`demo-button`} isUnselected={example1ColumnNumber < 1}>
                                -
                        </Button>
                        <p className={`example-1-button-column-number`}>
                            {example1ColumnNumber}
                        </p>
                        <Button onClick={example1AddColumn} classname={`demo-button`} isUnselected={example1ColumnNumber > columnNumberMax - 1}>
                                +
                        </Button>
                    </div>
                    <div className={`example-1-message`}>
                        <Text english='This is a ' french='Ceci est un ' /><br></br>
                        <Text english='flex container !' french='bloc flex !' />
                    </div>
                </div>
            </div>
            

            <div className={`example-1`}>
                {example1RenderColumns(example1ColumnNumber, heights)}
            </div>
            <p>
                The parent <span className={`code-element`}>div</span> is a flex container in row direction. 
                Each child has a <span className={`code-element`}>flex: 1;</span> and a {gutter / 2}px margin on each side so there is a {gutter}px gutter between each child. 
                The height and the background color of the children are controlled programmatically: the height is random and between 80 and {example1Height}px, while the background color varies from a very light blue to <i>darkslategray</i> to create a nice monochrome.
            </p>
            <p>
                Find below the CSS code.
            </p>

            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
            <span className={`color-vs-light-orange`}>.div-parent</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>black</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0</span> <span className={`color-vs-orange`}>auto</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>width</span>: <span className={`color-vs-light-green`}>80%</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>height</span>: <span className={`color-vs-light-green`}>400px</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>padding</span>: <span className={`color-vs-light-green`}>0 -{gutter / 2}px</span>;<br></br>
            <span className={`nbsp`}/>&gt;<span className={`color-vs-light-orange`}>.div-enfant</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex</span>: <span className={`color-vs-light-green`}>1</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0 {gutter / 2}px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>darkslategray</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>font-size</span>: <span className={`color-vs-light-green`}>3rem</span>;<br></br>
            <span className={`nbsp`}/>&#125;<br></br>
            &#125;
            </div>

            <div className={`section-separator`}></div>

            <Cross/><span>
                Create a regular grid with the <i>flex-wrap</i> property.
            </span>
            <p>
                The latter allows you to add children of variable size without them overflowing the parent <span className={`code-element`}>div</span>. 
                If the children do not fit on a row, they will automatically go to the row below.
            </p>
            <p>
                Then, you can control the width of each child using the <i>flex</i> property: if it is equal to 1, the child block will take up all the available space; 
                if it is equal to an absolute value in pixels, for example 200px, the child block will be at least 200px wide. 
                Note that the elements of the last row are all wider to take up all the space.
            </p>
            <p>
                You can also use the <i>width</i>  property: all children will have the same predefined width.
            </p>
            <p>
                You can play with the following module to see the rendering of these two possibilities.
            </p>
            <div className={`example-1-consignes`}>
                <div className={`example-1-buttons-circle`}>
                    <div className={`flex-row example-1-buttons`}>
                        <p className={`example-1-button-text`}>Number of columns: </p>
                        <Button onClick={example2RemoveColumn} classname={`demo-button`} isUnselected={example2ColumnNumber < 1}>
                                -
                        </Button>
                        <p className={`example-1-button-column-number`}>
                            {example2ColumnNumber}
                        </p>
                        <Button onClick={example2AddColumn} classname={`demo-button`} isUnselected={example2ColumnNumber > columnNumberMax - 1}>
                                +
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`flex-row demo-button-line example-2-buttons`}>
                <Button onClick={example2OnClickSwitch} classname={`demo-button`} isUnselected={example2FlexWidthSwitch != 'flex'}>
                    flex: {example2flex}px;
                </Button>
                <Button onClick={example2OnClickSwitch} classname={`demo-button`} isUnselected={example2FlexWidthSwitch != 'width'}>
                    width: {example2flex}px;
                </Button>
            </div>
            <div className={`example-2 ${example2FlexWidthSwitch}`}>
                {example2RenderColumns(example2ColumnNumber, sentences)}
            </div>
            <p>
                Find below the CSS code, it gets updated according to the chose option above.
            </p>
            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
            <span className={`color-vs-light-orange`}>.div-parent</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex-wrap</span>: <span className={`color-vs-orange`}>wrap</span>;<br></br>
            {example2FlexWidthSwitch == 'flex' && <><span className={`nbsp`}/><span className={`color-vs-light-blue`}>justify-content</span>: <span className={`color-vs-orange`}>center</span>;<br></br></>}
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>black</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0</span> <span className={`color-vs-orange`}>auto</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>width</span>: <span className={`color-vs-light-green`}>80%</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>padding</span>: <span className={`color-vs-light-green`}>0 -{gutter / 2}px</span>;<br></br>
            <span className={`nbsp`}/>&gt;<span className={`color-vs-light-orange`}>.div-enfant</span> &#123;<br></br>
            {example2FlexWidthSwitch == 'flex' && <><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex</span>: <span className={`color-vs-light-green`}>{example2flex}px</span>;<br></br></>}
            {example2FlexWidthSwitch == 'width' && <><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>width</span>: <span className={`color-vs-light-green`}>{example2flex}px</span>;<br></br></>}
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0 {gutter / 2}px {gutter / 2}px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>darkslategray</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/>&gt;<span className={`color-vs-light-orange`}>.number</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>font-size</span>: <span className={`color-vs-light-green`}>3rem</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/>&#125;<br></br>
            <span className={`nbsp`}/>&#125;<br></br>
            &#125;
            </div>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>Useful links</span>
            <p>
                <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank'>Mozilla's documentation</a>
            </p>
            <p>
                <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>Guide by CSS tricks</a>
            </p>
            
        </PostTemplate>
    );
}

export default English;