import React, { useEffect, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import Text from '../../LocalisationContext/Text';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import { example1RenderColumns, getRandomHeight, useDemoAlignItems, useDemoExample1ControlColumns, useDemoFlex, useDemoFlexDirection } from './Post5Hooks';
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

    const [flexDirection, onClickFlexDirection] = useDemoFlexDirection();
    const [alignItems, onClickDemoAlignItemsStart, onClickDemoAlignItemsCenter, onClickDemoAlignItemsEnd] = useDemoAlignItems();
    const [justifyContent, onClickDemoJustifyContentStart, onClickDemoJustifyContentCenter, onClickDemoJustifyContentEnd] = useDemoAlignItems();
    const [oneFlex1, onClickOneFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname1 = oneFlex1 == '1' ? 'active' : '';
    const [twoFlex1, onClickTwoFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname2 = twoFlex1 == '1' ? 'active' : '';
    const [threeFlex1, onClickThreeFlex1] = useDemoFlex();
    const demoChildFlex1ActiveClassname3 = threeFlex1 == '1' ? 'active' : '';

    const [example1ColumnNumber, example1AddColumn, example1RemoveColumn] = useDemoExample1ControlColumns();
    const [heights] = useState(() => Array.from(Array(10).keys()).map(getRandomHeight));
    
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
                <b>Flexbox</b> est une méthode de mise en page pour disposer facilement des éléments en lignes et en colonnes. 
                Ces derniers s'adaptent à la taille de leur parent en s'aggrandissant pour prendre tout l'espace disponible, ou au contraire en rétrécissant pour rentrer dans un espace plus petit.
            </p>
            <p>
                Cette méthode permet entre autres de :<br></br>
                    <Cross/><span>centrer verticalement un bloc à l'intérieur de son parent</span><br></br>
                    <Cross/><span>faire des lignes de hauteur égale quelque soit leur contenu</span><br></br>
                    <Cross/><span>faire des colonnes de largeur égale quelque soit leur contenu</span><br></br>
                <br></br>
                Plus généralement, il est facile de faire en sorte que les enfants occupent la même place, en largeur et / ou longueur, à l'intérieur de leur parent.
            </p>
            <p>
                Ceci est mon anti-sèche personnelle sur flexbox.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. La théorie</span>

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

            <p>
                Si on veut organiser ce <span className={`code-element`}>div</span> parent en lignes, c'est-à-dire le diviser en plusieurs lignes les unes au-dessus des autres, il faut lui attribuer une direction en colonne.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;
            </div>

            <img src={getImageSrc(postId, 'temp.png')}/>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. Les exemples courants</span>
            <p>
                Diviser un <span className={`code-element`}>div</span> en colonnes de largeur égale et séparées entre elles par une marge, le tout centrer horizontalement.
            </p>
            <p>Cliquer sur les boutons ci-dessous pour ajouter ou supprimer des colonnes (nombre maximal de colonnes : 10).</p>
            
            <div className={`example-1-consignes`}>
                <div className={`example-1-buttons-circle`}>
                    <img src={getImageSrc(postId, 'circle.png')}/>
                    <div className={`flex-row example-1-buttons`}>
                        <p className={`example-1-button-text`}>Nombre de colonnes : </p>
                        <Button onClick={example1RemoveColumn} classname={`demo-button`} isUnselected={example1ColumnNumber < 1}>
                                -
                        </Button>
                        <p className={`example-1-button-column-number`}>
                            {example1ColumnNumber}
                        </p>
                        <Button onClick={example1AddColumn} classname={`demo-button`} isUnselected={example1ColumnNumber > 9}>
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
                Le <span className={`code-element`}>div</span> parent est un container flex en ligne. 
                Chaque enfant a un <span className={`code-element`}>flex: 1;</span> et une marge de 10px de chaque côté donc il y a un écart de 20px entre chaque enfant.
                La hauteur et la couleur de fond des enfants sont contrôlés programmatiquement : la hauteur est aléatoire et comprise entre 80 et 400px, tandis que la couleur de fond varie d'un bleu très clair au <i>darkslategray</i> pour créer un joli camaïeu.
            </p>

            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
            <span className={`color-vs-light-orange`}>.div-parent</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>black</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0</span> <span className={`color-vs-orange`}>auto</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>width</span>: <span className={`color-vs-yellow`}>calc</span>(<span className={`color-vs-light-green`}>100%</span> - <span className={`color-vs-light-green`}>2px</span>);<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>height</span>: <span className={`color-vs-light-green`}>400px</span>;<br></br>
            <span className={`nbsp`}/><span className={`color-vs-light-blue`}>padding</span>: <span className={`color-vs-light-green`}>0 -10px</span>;<br></br>
            <span className={`nbsp`}/>&gt;<span className={`color-vs-light-orange`}>.div-enfant</span> &#123;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>flex</span>: <span className={`color-vs-light-green`}>1</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>margin</span>: <span className={`color-vs-light-green`}>0 10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border</span>: <span className={`color-vs-orange`}>solid</span> <span className={`color-vs-light-green`}>1px</span> <span className={`color-vs-orange`}>darkslategray</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>border-radius</span>: <span className={`color-vs-light-green`}>10px</span>;<br></br>
            <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>font-size</span>: <span className={`color-vs-light-green`}>3rem</span>;<br></br>
            <span className={`nbsp`}/>&#125;<br></br>
            &#125;
            </div>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`} id={`fun`}>3. La démonstration</span>
            <p>
                Cliquer sur les boutons pour modifier les propiétés du <span className={`code-element`}>div</span> parent et cliquer sur les enfants pour contrôler leur taille grâce à la propritété <span className={`code-element`}>flex: 1;</span>.
            </p>

            <div className={`flex-row demo-button-line-1`}>
                <Button onClick={onClickFlexDirection} classname={`demo-button`} isUnselected={flexDirection == 'row'}>
                    flex-direction: column;
                </Button>
                <Button onClick={onClickFlexDirection} classname={`demo-button`} isUnselected={flexDirection == 'column'}>
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
            
        </PostTemplate>
    );
}

export default French;