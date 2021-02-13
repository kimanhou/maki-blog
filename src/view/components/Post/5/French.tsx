import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 5;
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

    const [flexDirection, setFlexDirection] = useState('row');
    const [alignItems, setAlignItems] = useState('unset');
    const [justifyContent, setJustifyContent] = useState('unset');
    const [oneFlex1, setOneFlex1] = useState('unset');
    const [twoFlex1, setTwoFlex1] = useState('unset');
    const [threeFlex1, setThreeFlex1] = useState('unset');

    const onClickDemoFlexColumn = () => {
        if (flexDirection == 'row') {
            setFlexDirection('column');
        }
        else {
            setFlexDirection('row');
        }
    }

    const onClickDemoAlignItemsStart = () => {
        if (alignItems == 'flex-start') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('flex-start');
        }
    }

    const onClickDemoAlignItemsCenter = () => {
        if (alignItems == 'center') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('center');
        }
    }

    const onClickDemoAlignItemsEnd = () => {
        if (alignItems == 'flex-end') {
            setAlignItems('unset');
        }
        else {
            setAlignItems('flex-end');
        }
    }

    const onClickDemoJustifyContentStart = () => {
        if (justifyContent == 'flex-start') {
            setJustifyContent('unset');
        }
        else {
            setJustifyContent('flex-start');
        }
    }

    const onClickDemoJustifyContentCenter = () => {
        if (justifyContent == 'center') {
            setJustifyContent('unset');
        }
        else {
            setJustifyContent('center');
        }
    }

    const onClickDemoJustifyContentEnd = () => {
        if (justifyContent == 'end') {
            setJustifyContent('unset');
        }
        else {
            setJustifyContent('end');
        }
    }

    const onClickDemoOneFlex1 = () => {
        if (oneFlex1 == '1') {
            setOneFlex1('unset');
        }
        else {
            setOneFlex1('1');
        }
    }

    const onClickDemoTwoFlex1 = () => {
        if (twoFlex1 == '1') {
            setTwoFlex1('unset');
        }
        else {
            setTwoFlex1('1');
        }
    }

    const onClickDemoThreeFlex1 = () => {
        if (threeFlex1 == '1') {
            setThreeFlex1('unset');
        }
        else {
            setThreeFlex1('1');
        }
    }

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`five`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>
                <b>Flexbox</b> est une méthode de mise en page pour disposer facilement des éléments en lignes et en colonnes. 
                Ces derniers s'adaptent à la taille de leur parent en s'aggrandissant pour prendre tout l'espace disponible, ou au contraire en rétrécissant pour rentrer dans un espace plus petit.
            </p>
            <p>
                Cette méthode permet entre autres de :
                <div className={`flex-column intro-list`}>
                    <div className={`list-item`}>centrer verticalement un bloc à l'intérieur de son parent</div>
                    <div className={`list-item`}>faire des lignes de hauteur égale quelque soit leur contenu</div>
                    <div className={`list-item`}>faire des colonnes de largeur égale quelque soit leur contenu</div>
                </div>
                Plus généralement, il est facile de faire en sorte que les enfants occupent la même place, en largeur et / ou longueur, à l'intérieur de leur parent.
            </p>
            <p>
                Ceci est mon anti-sèche personnelle sur flexbox.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>

            <p>
                Ceci désigne un <i>container flex</i>. C'est le <span className={`code-element`}>div</span> parent.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;
            </div>

            <p>
                Si on veut organiser ce <span className={`code-element`}>div</span> parent en colonnes, c'est-à-dire le diviser en plusieurs colonnes les une à côté des autres, il faut lui attribuer une direction en ligne.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;
            </div>

            <img src={getImageSrc(postId, '1.png')}/>

            <p>
                Pour centrer horizontalement les <span className={`code-element`}>div</span> enfants, utiliser la propriété <i>justify-content</i>.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>justify-content</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <img src={getImageSrc(postId, '2.png')}/>


            <p>
                Pour centrer verticalement les <span className={`code-element`}>div</span> enfants, utiliser la propriété <i>align-items</i>.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>align-items</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <img src={getImageSrc(postId, '3.png')}/>

            <div className={`flex-row demo-button-line-1`}>
                <Button onClick={onClickDemoFlexColumn} classname={`demo-button`} isUnselected={flexDirection == 'row'}>
                    flex-direction: column;
                </Button>
                <Button onClick={onClickDemoFlexColumn} classname={`demo-button`} isUnselected={flexDirection == 'column'}>
                    flex-direction: row;
                </Button>
            </div>
            <div className={`flex-row demo-button-line-2`}>
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
            <div className={`flex-row demo-button-line-3`}>
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
            <div className={`flex-row demo-button-line-4`}>
                <Button onClick={onClickDemoOneFlex1} classname={`demo-button`} isUnselected={oneFlex1 != '1'}>
                    1 flex: 1;
                </Button>
                <Button onClick={onClickDemoTwoFlex1} classname={`demo-button`} isUnselected={twoFlex1 != '1'}>
                    2 flex: 1;
                </Button>
                <Button onClick={onClickDemoThreeFlex1} classname={`demo-button`} isUnselected={threeFlex1 != '1'}>
                    3 flex: 1;
                </Button>
            </div>
            

            <div className={`demo ${flexDirection}`} style={{ alignItems: alignItems, justifyContent: justifyContent }}>
                <div className={`demo-child one`} style={{ flex: oneFlex1 }}>1</div>
                <div className={`demo-child two`} style={{ flex: twoFlex1 }}>2</div>
                <div className={`demo-child three`} style={{ flex: threeFlex1 }}>3</div>
            </div>


            <p>
                Si on veut organiser ce <span className={`code-element`}>div</span> parent en lignes, c'est-à-dire le diviser en plusieurs lignes les unes au-dessus des autres, il faut lui attribuer une direction en colonne.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;
            </div>

            <img src={getImageSrc(postId, 'temp.png')}/>


            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>
            <p>
                
            </p>

            {/* <PhotoWithCredits imageUrl={getImageSrc(postId, '1.jpg')} text='Photo by UX Indonesia on Unsplash' url='https://unsplash.com/photos/qC2n6RQU4Vw' /> */}

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}></span>
            <p>
                
            </p>
            
        </PostTemplate>
    );
}

export default French;