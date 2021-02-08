import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 3;
    const tldr = 
    <>
        <Cross/><span>The simple and obvious method: a color change in the selector <span className={`code-element`}>hover</span> with a transition</span>
        <br></br>
        <Cross/><span>For the pickier: you overlay two <span className={`code-element`}>div</span>, one with a width of 0 and this width will change from 0 to 100% on <span className={`code-element`}>hover</span></span>
        <br></br>
        <Cross/><span>For the perfectionist: you put each letter in a <span className={`code-element`}>span</span> and you add an delay with the proprety <span className={`code-element`}>transition-delay</span></span>
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
            <p>Let's have a look at three different ways to animate the color of a text on hover !</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. The simple and obvious method</span>

            <p>
                In the CSS file, create a <span className={`italic`}>hover</span> state with a different color and add a transition so that the change is not too aggressive to the eye.
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
            <span className={`code-title`}>The result</span><br></br>
            <div className={`my-div-1 font-size-big`}>
                Hello world
            </div>
            <p>
                <span className={`italic`}>The problem ?</span><span className={`nbsp`}/>
                For a longer text block, the effect can be aggressive.
                The code just swaps color without any fluidity, we can do better !
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. For the pickier</span>
            <p>
                We overlay two <span className={`code-element`}>div</span>: one with the text in black and the other with the text in pink. The <span className={`code-element`}>div</span> with the text in pink has an original <span className={`code-element`}>width</span> (or <span className={`code-element`}>height</span>) of 0 and is therefore not visible. 
                This <span className={`code-element`}>width</span> will change from 0 to 100% on <span className={`code-element`}>hover</span> with a transition for a smooth effect.
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
            <span className={`code-title`}>The result</span><br></br>
            <div className={`my-div-2 font-size-big`}>
                <div className={`text`}>Hello world</div>
                <div className={`text pink`}>Hello world</div>
            </div>
            <p>
                <span className={`italic`}>The problem ?</span><span className={`nbsp`}/>
                The color here slides in for a little neat effect. However while this technique does the trick, using the width or height properties will not produce a performant CSS transition.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. For the perfectionist</span>
            <p>
                We go back to the first technique but this time, each character is placed in <span className={`code-element`}>span</span> and we add an offset in the proprety <span className={`code-element`}>transition-delay</span> for each character individually.
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
            <span className={`code-title`}>The result</span><br></br>
            <div className={`my-div-3 font-size-big`}>
                {formatText('Hello world')}
            </div>
            <p>
                This technique works for short and long texts and the visual effect is pretty neat. It's quite cumbersome to write the HTML code, so we will obviously write a generic method that does it for us.
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

export default English;