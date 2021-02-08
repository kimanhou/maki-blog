import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 2;
    const tldr = 
        <>
            <Cross/><span>Keep it simple: do not have too many colors. A color in a dark and a light shade is enough.</span>
            <br></br>
            <Cross/><span>A cool website to get inspiration and create your color scheme is <a href='https://coolors.co/' target='_blank'><b>coolors.co</b></a>.</span>
            <br></br>
            <Cross/><span>Instead of pure black and white, experiment with off-blacks and off-whites.</span>
            <br></br>
            <Cross/><span>Certain colors work well together, others simply don’t. Put the colors you picked together to get the feel of your color scheme.</span>
            <br></br>
            <Cross /><span>Colors have meanings, some are fairly universal, others are cultural. Choose wisely.</span>
            <br></br>
            <Cross/><span>Make sure the content is easy to read: use the inspector to check the contrast ratio (it should be above 5).</span>
            <br></br>
            <Cross/><span>Integrate your branding in your color scheme. Use photography and illustrations to solidify it.</span>
        </>;

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`two`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>Color schemes have a huge impact on the attractiveness of any website. 
                They can matter even more than content as they are the first things the eye catches when you land on a page. 
                A cohesive and well-thought color scheme will make your website more attractive and noticeable.
                Users are more inclined to read something beautifully designed, whereas no one wants to read something plain.</p>

            <p>There is no absolute perfect color scheme that would fit all. 
                However, here are a few tips and tricks that we learned along the way and that can be applied to any website. 
                We hope they will help you in your designs.</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. Keep it simple: do not have too many colors</span>
            <p>Be there a splash of bright colors or natural colors with the use of earth tones or deepers hues, you should not have too many different colors.
                A busy and complicated color scheme confuses the eye. 
                Like in fashion, the rule of <b>no more than three colors</b> can be applied. 
                If you have just a few colors at work, everything will look unified and viewers won’t have to work hard to process what’s going on.
                Usually a color in a dark shade and in a light shade would be enough.
            </p>
            <p>As an example, here is the color scheme of Maki blog :</p>
            <img src={getImageSrc(postId, '1.jpg')}/>
            <p>The colors are: yellow and its lighter brother, dark slate gray (echoes the color of a tree) and its lighter counterpart and an off-white for the background.</p>

            <p>This color scheme has been created on a cool website called <a href='https://coolors.co/' target='_blank'><b>Coolors</b></a>. 
                It's a really nice tool to get inspiration or experiment with color schemes.
                You can find my color scheme <a href='https://coolors.co/edc041-f8e6b4-2f4f4f-508686-feffff' target='_blank'>here</a>.</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. Try using off-blacks and off-whites</span>
            <p>Black text on white background can look quite stark and can create eye fatigue. 
                Try using an off-black for the text on an off-white background to improve the reading experience. 
                Do not hesitate to try other colors than “neutral” greys, for which the values of rgb are all identical.
                You should keep 100% black and 100% white to make certain things pop, like titles.</p>
            <p>Example: On <a href='https://www.ideo.com/blog/learn-the-basics-of-code-with-a-needle-and-thread' target='_blank'>Ideo website</a>, the title of each article is written in pure white on a pure black background and it definitely pops. However, the body of the article is written in a off-black color on a off-white background.</p>
            <img src={getImageSrc(postId, '2.png')}/>
            <p>Please find below the colors of the title (first line), those of the body of the article (second line) and finally two “neutral” greys (third line).
                One can clearly see that the body of the article is not a neutral grey but is rather blue, which makes the page feel more alive.</p>
            <img src={getImageSrc(postId, '3.jpg')}/>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Certain colors work well together, others simply don’t</span>
            <p>Nail polish will look different on two people with different skin colors. 
                A color on a website might look different than the exact same color on another website because of its surroundings. 
                If you picked the colors of you website individually, put them side by side to get the look and feel of the color scheme as a whole. 
                Do not hesitate to tweak and make adjustments if needed.</p>
            <p>If you want to use various colors, use the same saturation for a consistent look. Google does it brilliantly.</p>
            <img src={getImageSrc(postId, '4.jpg')}/>
            <p>If you want to stick to a single color, vary the saturation to add depth.</p>
            <img src={getImageSrc(postId, '5.jpg')}/>

            <div className={`section-separator`}></div>

            <Cross /><span className={`step-title`}>4. Colors have meanings, some are fairly universal, others are cultural. Choose wisely</span>
            <p>Color associations are very powerful. Some of them are universal, like green is associated with plants and nature. 
                Others are cultural: in certain parts of the world, white means death and is a color often worn at funerals, while in others, the traditional color for death is black.</p>
            <p>You do not need to be a color psychology expert. 
                However, make sure your color scheme matches your target audience. 
                For example, black and red is a strongly masculine association that would not work for a make up brand. 
                If you try to achieve a premium, high-end image, then purple is your go-to, as people associate it with royalty, high quality and intrigue.
                Blue is gentle and reassuring, ideal for healthcare and financial businesses.</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>5. Make sure the content is easy to read</span>
            <p>In a browser, open the inspector, select the element you want to check and look for its color in the style section.</p>
            <p>Click on the color filled square next to the HEX or rgb code. It will open a pop up with information about the color. This is where you will find the contrast ratio.</p>
            <p>For a good reading experience, <b>the contrast ratio should be above 5</b>. 
                It does not mean that everything in your website absolutely needs to respect that limit, however it is a good indicator. 
                As an example, the links of this article appear yellow when the mouse hovers them. 
                The contrast ratio is really bad (1.72), but I found it acceptable as it is only in the case of a hover. 
                On the other hand, the body of the article has a contrast ratio of 10.95, which is excellent.</p>
            <img src={getImageSrc(postId, '6.jpg')}/>
            
            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>6. Integrate your branding in your color scheme. Use photography and illustrations to solidify it</span>
            <p>Chances are your brand already has certain colors associated with it. 
                If you have a logo, it’s a good base to create your color scheme. 
                Working with an existing color palette is always easier.</p>
            <p>For a consistent look, photos and illustrations should also respect the chosen color scheme. They will help unify the page, as shown below on T mobile website.</p>
            <img src={getImageSrc(postId, '7.jpg')}/>
        
        </PostTemplate>
    );
}

export default English;