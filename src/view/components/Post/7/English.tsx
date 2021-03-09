import React from 'react';
import Post, { IPostContentProps } from '../../../../model/Post';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import PhotoWithCredits from '../PostTemplate/TemplateComponents/PhotoWithCredits/PhotoWithCredits';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 7;
    const tldr = 
    <>
        <Cross/><span>What are the different categories of fonts? Serif, with small lines attached to the end of the letter, and Sans-serif. Text fonts for large blocks and display fonts for headings.</span>
        <br></br>
        <Cross/><span>How many different fonts should you use on a website? 2 are enough, even if you can get by with just one. No more than 3.</span>
        <br></br>
        <Cross/><span>How to pick a typeface for body text? By doing the Il1 test, looking for open shapes and testing readability in small size.</span>
        <br></br>
        <Cross/><span>How to pick a typeface for display text? By determining the wanted atmosphere and experimenting with lots of different fonts until you find the one that best matches the project.</span>
        <br></br>
        <Cross/><span>What are the most used fonts? According to Google Fonts Analytics, Roboto, Open Sans and Lato. Feel free to use other less popular fonts to stand out.</span>
        <div className={`section-separator`}></div>
    </>;

    const relatedPost = Post.getPostById(2);
    const relatedPosts = relatedPost == undefined ? [] : [ relatedPost ];

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`seven`}
                    tldr={tldr}
                    relatedPosts={relatedPosts}
                    photoCreditName='Florian Klauer' photoCreditUrl='https://unsplash.com/photos/1mTm3gH5_Wk' photoCreditWebsite='Unsplash'>
            <p>
                Fonts are the clothing the words on your website wear.
                The user sees a word before reading it, which is why typography is responsible for the first impression given to the reader.
                On the one hand, typography influences the message conveyed to the user, on the other hand, it is a powerful tool to catch the eye and make a website memorable.
            </p>
            <p>
                Before embarking on choosing a font, it is important to understand how fonts can be used, how to choose them well, and under what circumstances.
                We have gathered here 5 essential questions that you must ask yourself before starting a project. Good reading !
            </p>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>1. What are the different categories of fonts ?</h2>
            <p>
                The two main categories of fonts are: <br></br> <br></br>
                <span className = {`nbsp`}> </span> <Cross /> <b> <i> Serif fonts </i> </b>&nbsp;:
                they are so called because of the small decorative strokes at the end of each letter.
                It seems that these marks come from the time when texts were carved in stone.
                Marks were previously painted on the stone and served as markers for masons. <br></br>
                A few well-known fonts belong to this group, such as Times New Roman and Garamond. <br></br>

                <div className={`flex-row mobile-column`}>
                    <img src={getImageSrc(postId, '1.jpg')} className={`width50Mobile100`} />
                    <img src={getImageSrc(postId, '2.jpg')} className={`width50Mobile100`} />
                </div>

                <span className={`nbsp`}></span><Cross/><b><i>Sans-serif fonts</i></b>&nbsp; are simply the fonts that do not feature these decorative lines.
                They are generally more minimalist and modern. <br></br>
                Helvetica is arguably the most well-known sans serif font. We can also mention the very popular Roboto.

                <div className={`flex-row mobile-column`}>
                    <img src={getImageSrc(postId, '3.jpg')} className={`width50Mobile100`} />
                    <img src={getImageSrc(postId, '4.jpg')} className={`width50Mobile100`} />
                </div>

                <div className={`flex-row`}>
                    <img src={getImageSrc(postId, '5.png')} className={`width50Mobile100`} />
                </div>

            </p>
            <p>
                Then, we can differentiate the fonts according to the type of text for which they are most suitable: <br></br> <br></br>
                <span className = {`nbsp`}> </span> <Cross /> <b> <i> Text fonts </i> </b> &nbsp; are used for the text blocks, or body text.
                They should be very readable, even in small font sizes. Therefore, they are generally clean, airy and use fine lines. <br></br> <br></br>
                
                <span className = {`nbsp`}> </span> <Cross /> <b> <i> Display fonts </i> </b> &nbsp; have a more stylish and original look.
                They are used for headlines and add personality and punch to a web page.
                Their role is to catch the eye of the user and represent the atmosphere of the project.
                Readability may be slightly less than for text fonts and therefore these are not fonts made for large blocks of text.<br></br>
            </p>

            <div className={`text-align-center`}>
                <a href='https://corsapizza.dk/' target='_blank'>
                    <img src={getImageSrc(postId, '6.jpg')} className={`width50Mobile100`} />
                </a>
            </div>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>2. How many different fonts should you use on a website?</h2>
            <p>
                Ideally <b> 2 </b>. Obviously, it all depends on the type of site, its size, its content, etc...
                Some sites can get by with a single font by adjusting the size, capitalization, style (bold or italics), and letter spacing.
                However, it requires a lot of design work that is not within the reach of everyone.
                It is easier to have 2 fonts: one for the headlines and one for the body.
                Some recommend a Serif font for headings and Sans-Serif for text, but that's not a requirement at all, as long as the typefaces work well together.
                More than 3 different fonts often looks chaotic and messy.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>3. How to pick a typeface for body text?</h2>
            <p>
                The number one priority here is <b>readability</b>, especially in small sizes.
                To ensure that a font is readable on any medium, there are 2 easy tests:
            </p>
            <span className={`nbsp`}></span><Cross/><span>
                <b>The Il1 test</b> : place side by side an uppercase i, a lowercase l and the number 1.
                If each of these 3 characters is easy to distinguish, then you have found a good typeface.
            </span>
            <img src={getImageSrc(postId, '7.png')}  />

            <div className={`p-separator`}></div>
            <span className={`nbsp`}></span><Cross/><span>
                <b>Open shapes</b> : the aperture between the side and the outside of the letter should be as large as possible.
                Helvetica, for example, has more closed shapes than Roboto (which is why it was a very bad idea to have chosen Helvetica for Mac OS 10.10 Yosemite back in 2014).
            </span>
            <img src={getImageSrc(postId, '8.png')}  />

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>4. How to pick a typeface for display text?</h2>
            <p>
                The goal here is to find a typeface that matches the project.
                Don't be shy about experimenting with a multitude of different fonts, and trying out different styles and weights.
                Even if a minimum of readability is necessary, this criterion is not the highest priority, especially since the typography will be mainly used in large sizes.
                Whether the desired effect is luxurious, minimalist, modern, crazy or joyful, the most important thing is that the atmosphere of the project is respected.
                Have fun in the process of finding the right typeface for your project!
            </p>
            <p>
                The website <a href='https://ilovetypography.com/' target='_blank'>ilovetypography</a> publishes their favorite fonts every year and imagine the universe in which they could evolve.
                The article for the year 2021 can be found <a href='https://ilovetypography.com/2021/01/12/my-favorite-fonts-of-2020/' target='_blank'>here</a> and is a good source of inspiration.
            </p>
            <PhotoWithCredits imageUrl={getImageSrc(postId, '9.png')} text='Image by Ilovetypography' url='https://ilovetypography.com/2021/01/12/my-favorite-fonts-of-2020/' />
            
            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>5. What are the most used fonts?</h2>
            <p>
                <a href='https://fonts.google.com/analytics' target='_blank'><b>Google Fonts</b></a> has an analytics page that lists the most used fonts on the Internet.
                The big winners are <b>Roboto</b>, <b>Open Sans</b> and <b>Lato</b>. <br></br>
                Even though these fonts are very well made and timeless, they are overused, <b> you see them everywhere! </b>
                Roboto is not only the default font for Android, but also for Google services like YouTube, Gmail, and Google Maps. Impossible to miss it!
                Open Sans was Mozilla's default font until 2019 and is still the official typeface of Chase Bank.
                Lato is used in Pokemon Go.
                Roboto and Open Sans are both owned by Google. <br></br>
                While neutral, they can make a site downright invisible because they are so ubiquitous on the Internet.
                My advice is to look for less popular fonts to stand out and have a better chance of being memorable to users.
            </p>
            <img src={getImageSrc(postId, '10.jpg')}  />
            
        </PostTemplate>
    );
}

export default English;