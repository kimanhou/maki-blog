import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 3;
    const tldr = 
    <>
        <Cross/><span>La méthode simple et évidente : un changement de couleur dans la propriété <span className={`code-element`}>hover</span> avec une transition</span>
        <br></br>
        <Cross/><span>Pour les plus pointilleux : on superpose deux <span className={`code-element`}>div</span>, l'un ayant une largeur de 0 et on fait varier sa largeur quand la souris survole l'élément</span>
        <br></br>
        <Cross/><span>Pour les perfectionnistes : on place chaque lettre dans un <span className={`code-element`}>span</span> et on ajoute un décalage grâce à la propriété <span className={`code-element`}>transition-delay</span></span>
    </>;

    const formatText = (text : string) => {
        return text.split('').map((t, index) => {
            return (<span className={`char`} style={{ transitionDelay: `${index * 0.05}s`}}>{t}</span>);
        });
    }

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`three`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>Cet article présente trois techniques pour changer la couleur d'un texte quand la souris passe dessus.</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. La méthode simple et évidente</span>
            <p>
                Dans le fichier CSS, on change la couleur du texte dans le sélecteur <span className={`italic`}>hover</span> avec une petite transition pour que le changement ne soit pas trop brusque.
            </p>
            <span className={`code-title`}>HTML</span>
            <div className={`code-sample`}>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>div</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'my-div'</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/>Hello world<br></br>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/div</span><span className={`color-vs-grey`}>&gt;</span>
            </div>
            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
                <span className={`color-vs-orange`}>.my-div</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>inline-block</span>;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>color</span>: <span className={`color-vs-orange`}>black</span>;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>transition</span>: <span className={`color-vs-orange`}>color</span> <span className={`color-vs-light-green`}>0.4s</span>;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-dark-blue`}>&amp;</span><span className={`color-vs-orange`}>:hover</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>color</span>: <span className={`color-vs-orange`}>pink</span>;<br></br>
                <span className={`nbsp`}/>&#125;<br></br>
                &#125;
            </div>
            <span className={`code-title`}>Le résultat</span><br></br>
            <div className={`my-div-1 font-size-big`}>
                Hello world
            </div>
            <p>
                <span className={`italic`}>Le problème ?</span><span className={`nbsp`}/>
                L'ensemble du texte change de couleur en même temps. S'il s'agit d'un gros bloc, cela peut être aggressif. Cette méthode suffit pour des textes courts et peu importants, cependant elle manque de fluidité et de naturel.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. Pour les plus pointilleux</span>
            <p>
                On superpose deux blocs : l'un en noir et l'autre en rose. Le bloc contenant le texte rose a une largeur de 0 et n'est donc pas visible. Lorsque la souris passe dessus, la largeur est mise à 100% avec une transition pour un effet agréable.
            </p>
            <span className={`code-title`}>HTML</span>
            <div className={`code-sample`}>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>div</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'my-div'</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>div</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'text'</span><span className={`color-vs-grey`}>&gt;</span>Hello world<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/div</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>div</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'text pink'</span><span className={`color-vs-grey`}>&gt;</span>Hello world<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/div</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/div</span><span className={`color-vs-grey`}>&gt;</span>
            </div>
            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
                <span className={`color-vs-orange`}>.my-div</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>position</span>: <span className={`color-vs-orange`}>relative</span>;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>inline-block</span>;<br></br>
                <span className={`nbsp`}/>&gt;<span className={`color-vs-orange`}>.text</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-dark-blue`}>&amp;</span><span className={`color-vs-orange`}>.pink</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>position</span>: <span className={`color-vs-orange`}>absolute</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>left</span>: <span className={`color-vs-light-green`}>0</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>bottom</span>: <span className={`color-vs-light-green`}>0</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>overflow</span>: <span className={`color-vs-orange`}>hidden</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>transition</span>: <span className={`color-vs-light-blue`}>width</span> <span className={`color-vs-light-green`}>1s</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>whitespace</span>: <span className={`color-vs-orange`}>nowrap</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>color</span>: <span className={`color-vs-orange`}>pink</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/>&#125;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-dark-blue`}>&amp;</span><span className={`color-vs-orange`}>:hover</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/>&gt;<span className={`color-vs-orange`}>.text</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-dark-blue`}>&amp;</span><span className={`color-vs-orange`}>.pink</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>width</span>: <span className={`color-vs-light-green`}>100%</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/>&#125;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/>&#125;<br></br>
                <span className={`nbsp`}/>&#125;<br></br>
                &#125;<br></br>
            </div>
            <span className={`code-title`}>Le résultat</span><br></br>
            <div className={`my-div-2 font-size-big`}>
                <div className={`text`}>Hello world</div>
                <div className={`text pink`}>Hello world</div>
            </div>
            <p>
                <span className={`italic`}>Le problème ?</span><span className={`nbsp`}/>
                La couleur glisse pour un effet plus sympa. Cependant, changer la hauteur ou la largeur d'un <span className={`code-element`}>div</span> n'est la transition la plus performante.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Pour les perfectionnistes</span>
            <p>
                On reprend la méthode 1 mais on place chaque lettre dans un <span className={`code-element`}>span</span> et on ajoute un décalage grâce à la propriété <span className={`code-element`}>transition-delay</span> sur chaque lettre individuellement.
            </p>
            <span className={`code-title`}>HTML</span>
            <div className={`code-sample`}>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>div</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'my-div'</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0s;"</span><span className={`color-vs-grey`}>&gt;</span>H<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.05s;"</span><span className={`color-vs-grey`}>&gt;</span>e<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.1s;"</span><span className={`color-vs-grey`}>&gt;</span>l<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.15s;"</span><span className={`color-vs-grey`}>&gt;</span>l<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.2s;"</span><span className={`color-vs-grey`}>&gt;</span>o<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.25s;"</span><span className={`color-vs-grey`}>&gt;</span> <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.3s;"</span><span className={`color-vs-grey`}>&gt;</span>w<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.35s;"</span><span className={`color-vs-grey`}>&gt;</span>o<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.4s;"</span><span className={`color-vs-grey`}>&gt;</span>r<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.45s;"</span><span className={`color-vs-grey`}>&gt;</span>l<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/><span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> <span className={`color-vs-light-blue`}>class</span>=<span className={`color-vs-orange`}>'char'</span> <span className={`color-vs-light-blue`}>style</span>=<span className={`color-vs-orange`}>"transition-delay: 0.5s;"</span><span className={`color-vs-grey`}>&gt;</span>d<span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/div</span><span className={`color-vs-grey`}>&gt;</span>
            </div>
            <span className={`code-title`}>CSS</span>
            <div className={`code-sample`}>
                <span className={`color-vs-orange`}>.my-div</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-light-blue`}>display</span>: <span className={`color-vs-orange`}>inline-block</span>;<br></br>
                <span className={`nbsp`}/>&gt;<span className={`color-vs-orange`}>.char</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>color</span>: <span className={`color-vs-orange`}>black</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>transition</span>: <span className={`color-vs-light-blue`}>color</span> <span className={`color-vs-light-green`}>.4s</span>;<br></br>
                <span className={`nbsp`}/>&#125;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-dark-blue`}>&amp;</span><span className={`color-vs-orange`}>:hover</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/>&gt;<span className={`color-vs-orange`}>.char</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-light-blue`}>color</span>: <span className={`color-vs-orange`}>pink</span>;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/>&#125;<br></br>
                <span className={`nbsp`}/>&#125;<br></br>
                &#125;<br></br>
            </div>
            <span className={`code-title`}>Le résultat</span><br></br>
            <div className={`my-div-3 font-size-big`}>
                {formatText('Hello world')}
            </div>
            <p>
                Cette méthode fonctionne pour tous les types de texte et l'effet visuel est garanti. Il est extrêmement fastidieux d'écrire le HTML, on va évidemment préférer utiliser une méthode générique pour formatter le texte.
            </p>
            <span className={`code-title`}>React</span>
            <div className={`code-sample`}>
                <span className={`color-vs-dark-blue`}>const</span> <span className={`color-vs-yellow`}>formatText</span> = (<span className={`color-vs-dark-blue`}>text</span> : <span className={`color-vs-green`}>string</span>) <span className={`color-vs-dark-blue`}>=&gt;</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-vs-purple`}>return</span> <span className={`color-vs-light-blue`}>text</span>.<span className={`color-vs-yellow`}>split</span>(<span className={`color-vs-orange`}>''</span>).<span className={`color-vs-yellow`}>map</span>((<span className={`color-vs-light-blue`}>t</span>, <span className={`color-vs-light-blue`}>index</span>) <span className={`color-vs-dark-blue`}>=&gt;</span> &#123;<br></br>
                <span className={`nbsp`}/><span className={`nbsp`}/><span className={`color-vs-purple`}>return</span> (
                    <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>span</span> 
                    <span className={`color-vs-light-blue`}> className</span>=<span className={`color-vs-orange`}>'char'</span> 
                    <span className={`color-vs-light-blue`}> style</span>=<span className={`color-vs-dark-blue`}>&#123;</span>&#123; 
                        <span className={`color-vs-light-blue`}> transitionDelay</span>: <span className={`color-vs-orange`}>`</span><span className={`color-vs-dark-blue`}>$&#123;</span><span className={`color-vs-light-blue`}>index</span> * <span className={`color-vs-light-green`}>0.05</span><span className={`color-vs-dark-blue`}>&#125;</span><span className={`color-vs-orange`}>s`</span> &#125;<span className={`color-vs-dark-blue`}>&#125;</span><span className={`color-vs-grey`}>&gt;</span>
                            <span className={`color-vs-dark-blue`}>&#123;</span><span className={`color-vs-light-blue`}>t</span><span className={`color-vs-dark-blue`}>&#125;</span>
                        <span className={`color-vs-grey`}>&lt;</span><span className={`color-vs-dark-blue`}>/span</span><span className={`color-vs-grey`}>&gt;</span><br></br>
                <span className={`nbsp`}/>&#125;);<br></br>
                &#125;
            </div>
        </PostTemplate>
    );
}

export default French;