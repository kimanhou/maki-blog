import React, { useEffect, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import { myScrollToWithOffset } from '../../../../Util';
import { isMobile } from '../../../hooks/UseMediaQuery';
import Text from '../../LocalisationContext/Text';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Button from '../PostTemplate/TemplateComponents/Button';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import { example1RenderColumns, example2RenderColumns, getRandomHeight, getRandomNumberOfSentences, useDemoAlignItems, useDemoExample1ControlColumns, useDemoFlex, useDemoFlexDirection } from './Post5Hooks';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
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
                Le bout de code ci-dessous désigne un <i>container flex</i>. C'est le <span className={`code-element`}>div</span> parent.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;
            </div>

            <p>
                Si on veut organiser ce <span className={`code-element`}>div</span> parent en colonnes, c'est-à-dire le diviser en plusieurs colonnes les une à côté des autres, il faut lui attribuer une direction en ligne grâce à la propriété <i>flex-direction</i>.
                Celle-ci définit <b>l'axe principal</b>, qui est dans le cas d'un <i>flex-direction: row;</i> (et par défaut) <b>horizontal</b>.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;
            </div>

            <img src={getImageSrc(postId, '1.png')}/>

            <p>
                Pour centrer horizontalement les <span className={`code-element`}>div</span> enfants, utiliser la propriété <i>justify-content</i>.
                Celle-ci contrôle l'alignement des enfants sur l'axe principal, qui est ici horizontal. Les schémas ci-dessous montrent l'effet de cette propriété selon différentes valeurs.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>justify-content</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <div className={`flex-row`}>
                <img src={getImageSrc(postId, '2.png')} style={{ width: '50%'}} />
                <img src={getImageSrc(postId, '3.png')} style={{ width: '50%'}} />
            </div>

            <div className={`flex-row`}>
                <img src={getImageSrc(postId, '4.png')} style={{ width: '50%'}} />
                <img src={getImageSrc(postId, '5.png')} style={{ width: '50%'}} />
            </div>

            <p>
                Pour centrer verticalement les <span className={`code-element`}>div</span> enfants, utiliser la propriété <i>align-items</i>.
                Cette propriété contrôle quant à elle l'alignement sur l'axe secondaire, qui est ici vertical.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>row</span>;<br></br>
                <span className={`color-vs-light-blue`}>align-items</span>: <span className={`color-vs-orange`}>center</span>;
            </div>

            <div className={`flex-row`}>
                <img src={getImageSrc(postId, '6.png')} style={{ width: '50%'}} />
                <img src={getImageSrc(postId, '7.png')} style={{ width: '50%'}} />
            </div>
            <div className={`flex-row`}>
                <img src={getImageSrc(postId, '8.png')} style={{ width: '50%'}} />
            </div>

            <p>
                Si on veut organiser ce <span className={`code-element`}>div</span> parent en lignes, c'est-à-dire le diviser en plusieurs lignes les unes au-dessus des autres, il faut lui attribuer une direction en colonne.
                Les propriétés <i>align-items</i> et <i>justify-content</i> sont alors inversées (car l'axe principal et l'axe secondaire est inversé) : <i>align-items</i> contrôle alors l'alignement horizontal et <i>justify-content</i> l'alignement vertical.
            </p>
            <p>
                Pour plus de clarté, vous pouvez jouer avec <span onClick={goToDemo} className={`cursor-pointer`}>le module de démonstration</span> ci-dessous.
            </p>
            <div className={`code-sample`}>
                <span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>flex</span>;<br></br>
                <span className={`color-vs-light-blue`}>flex-direction</span>: <span className={`color-vs-orange`}>column</span>;
            </div>

            <img src={getImageSrc(postId, '4.png')}/>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`} id={`fun`}>2. La démonstration</span>
            <p>
                Cliquer sur les boutons pour modifier les propiétés du <span className={`code-element`}>div</span> parent et cliquer sur les enfants pour contrôler leur taille grâce à la propritété <span className={`code-element`}>flex: 1;</span>.
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
            
            <div style={{ height: '10vh'}}></div>
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
            <div style={{ height: '100vh'}}></div>
            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Les exemples courants</span><br></br>
            <br></br>
            <Cross/><span>
                Diviser un <span className={`code-element`}>div</span> en colonnes de largeur égale et séparées entre elles par une marge, le tout centré horizontalement.
            </span>
            <p>Cliquer sur les boutons ci-dessous pour ajouter ou supprimer des colonnes (nombre maximal de colonnes : {columnNumberMax}).</p>
            
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
                Le <span className={`code-element`}>div</span> parent est un container flex en ligne. 
                Chaque enfant a un <span className={`code-element`}>flex: 1;</span> et une marge de {gutter / 2}px de chaque côté donc il y a un écart de {gutter}px entre chaque enfant.
                La hauteur et la couleur de fond des enfants sont contrôlés programmatiquement : la hauteur est aléatoire et comprise entre 80 et {example1Height}px, tandis que la couleur de fond varie d'un bleu très clair au <i>darkslategray</i> pour créer un joli camaïeu.
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
                Réaliser une grille régulière avec la propriété <i>flex-wrap</i>.
            </span>
            <p>
                Cette dernière permet d'ajouter des enfants de taille variable sans que ceux-ci ne débordent du <span className={`code-element`}>div</span> parent.
                Si les enfants ne rentrent pas sur une ligne, ils vont automatiquement se placer dans la ligne d'en dessous.
            </p>
            <p>
                Ensuite, on peut contrôler la largeur de chaque enfant grâce à la propriété <i>flex</i> : 
                si elle est égale à 1, le bloc enfant prendra toute la place disponible; 
                si elle est égale à une valeur absolue en pixels, le bloc enfant aura une largeur supérieure ou égale à cette valeur.
                Noter que les éléments de la dernière ligne sont tous plus larges pour occuper tout l'espace.
            </p>
            <p>
                On peut également utiliser la propriété <i>width</i> : tous les enfants auront la même largeur prédéfinie.
            </p>
            <p>
                Vous pouvez jouer avec le module suivant pour observer le rendu de ces deux possibilités.
            </p>
            <div className={`example-1-consignes`}>
                <div className={`example-1-buttons-circle`}>
                    <div className={`flex-row example-1-buttons`}>
                        <p className={`example-1-button-text`}>Nombre de colonnes : </p>
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
                Voici le code CSS, il se met à jour suivant l'option choisie au-dessus.
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
            
            <Cross/><span className={`step-title`}>Liens utiles</span>
            <p>
                <a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank'>Documentation de Mozilla</a>
            </p>
            <p>
                <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>Guide par CSS tricks</a>
            </p>

        </PostTemplate>
    );
}

export default French;