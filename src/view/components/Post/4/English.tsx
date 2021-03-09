import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import PhotoWithCredits from '../PostTemplate/TemplateComponents/PhotoWithCredits/PhotoWithCredits';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 4;
    const tldr = 
    <>
        <Cross/><span>UI stands for “<i>user interface</i>”. It is the way the user gets to the content.</span>
        <br></br>
        <Cross/><span>UX stands for “<i>user experience</i>”. It is the feeling that is left to the user while browsing a website.</span>
        <br></br>
        <Cross/><span>User interface design is part of the greater user experience design universe. UI is the visual manifestation of UX thinking.</span>
        <br></br>
        <Cross/><span>UI/UX can shape how the user experiences the content. Some use these practices to trick the user, but most try to make life easier.</span>
    </>;

    const formatText = (text : string) => {
        return text.split('').map(t => {
            return (<span>{t}</span>);
        });
    }

    const [active, setActive] = useState(false);
    const activeClassname = active ? 'active' : '';
    const onActive = () => { setActive(true) }
    const onUnactive = () => { setActive(false) }

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`four`}
                    tldr={tldr}
                    relatedPosts={[]}
                    photoCreditName='Sigmund' photoCreditUrl='https://unsplash.com/photos/6jaBQAURBgI' photoCreditWebsite='Unsplash'>
            <p>
                Screens are undeniably omnipresent in our daily lives. The way we interact with them is governed by an obscure group of people called UI/UX designers.
                If you've never heard of this name or if you don't know what it means, this article will enlighten you on this sweet matter.
            </p>
            <p>
                First, let's examine those two terms separately in order to understand the differences between them and why they are always linked.
            </p>
            <p>Good reading !</p>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>1. What is UI and what does a UI designer do ?</h2>

            <p>
                UI stands for “<i>user interface</i>”. Let's break down the key components here, which are “<i>the user</i>” and “<i>the interface</i>”.
            </p>
            <p>
                The <b>user</b> is the viewer or the <b>person interacting with the content</b>. 
                It's basically you and me, or anyone owning a digital device and using it to browse content on Internet.
            </p>
            <p>
                The <b>interface</b> is the way that this user gets to that content. 
                You can think of the interface being the <b>bridge between the user and the content</b>.  
                In the real world, you can think of a book being the interface between the reader and the story. 
                While the book is printed on paper, what the reader/user experiences is the novel or the story itself.
            </p>
            <div className={`illustration-ui-bridge flex-row ${activeClassname}`}>
                <ScreenDetector className={`screen-detector-illustation-ui-bridge`} onActive={onActive} onUnactive={onUnactive} />
                <div className={`illustration-ui-bridge-user`}>user</div>
                <div className={`illustration-ui-bridge-interface flex-column`}>{formatText('interface')}</div>
                <div className={`illustration-ui-bridge-content`}>content</div>
            </div>
            <p>
                While <i>UI</i> is the term used to talk about the interface itself, the <b>UI designer</b> is the person who gets the material / content and has to turn it into an app or a website. 
                The content originally doesn't actually have any form, so the UI designer is the one who looks at that content and has to figure out what is the best structure for that particular content.
                In other terms, they have to create a content-specific form to best communicate an idea to the user.
                In order to do this, they use <b>visual design</b>, which is rooted in graphic design, and focus on forms and aesthetics.
                They look at the interface itself and concentrate on the look and feel and the organization of the information.
                In a way, they are responsible for <b>the visual identity of the website</b>.
                They often make an actual interface using digital tools like Photoshop and Illustrator. 
                Their final product is usually a mock up of the app or website.
            </p>

            <div className={`section-separator`}></div>

            <p>
                The bridge between user and content is not totally passive, it can shape the way the user experiences the content.
                The interface can change the experience and affects the message.
            </p>
            <p>
                Thus, whoever designed the interface in the first place has a lot of power upon how the user perceives the content. 
                For an effective and successful interface, you need to combine the UI part (visual design) and the UX part (user experience design).
                If you put those two together, you got pretty much control over how everbody experiences every kind of content.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>2. What is UX and what does a UX designer do ?</h2>
            <p>
                UX stands for “<i>user experience</i>”. A definition can be : the experience a product or a service creates for people in the real world.
            </p>
            <p>
                The experience is what is left on us, an impression, feeling, memory. An experience is often accompanied by adjectives, like 'amazing' or 'horrible' or 'frustrating'.
                If the experience is positive, then the website's goals are more likely to be fulfilled. 
                The users will be happy and more inclined to buy something or sign up or spend time on your website. 
                They are also more likely to return. 
            </p>
            <p>
                UX is linked to social sciences, as it aims to manipulate the user to do something and the person in charge of that is the UX designer.
            </p>
            <p>
                A <b>UX designer</b> deals with how a digital content feels and focuses on the experience of the user. 
                Their work is rooted in non-visual design practice and is often driven by the user's experience and by feedbacks from the user.
                It involves research about who the users are, planning and testing.
                They get feedbacks from users and concentrate on how the interface feels to them.
                The also deal with the navigation and the structure of the whole app.
                When they get the content, the UX designer has to figure out how to get the user engaged with that content.
            </p>

            <PhotoWithCredits imageUrl={getImageSrc(postId, '1.jpg')} text='Photo by UX Indonesia on Unsplash' url='https://unsplash.com/photos/qC2n6RQU4Vw' />

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>3. UI/UX in your life</h2>
            <p>
                Nowadays, we get all our information from screens, be it a desktop, a laptop, a tablet or a phone. 
                We are constantly looking at screens and learning how to interact with the world through them. 
                Thanks to this constant interaction with screens, we understand how to access information. 
                Moreover, there are <b>certain conventions</b> that we are used to, like buttons or menus. 
                We know we have to scroll down to get content on a website or swipe from side to side on a phone. 
                We have become used to those conventions but there are levels of flexibility within those rules that can shape the experience the user has with the content through the interface.
            </p>
            <p>
                Certain people and companies turn these conventions to their advantage. Indeed, when you browse content on an Internet page, you don't read every word, you skim read and make assumptions.
                If a company wants to trick you, they can take advantage of this and make you do things that you didn't mean to, like buying or signing up for something.
                A common example is when games use a serie of green/blue buttons to make the player go through a repetitive process. 
                When you lose, a pop up will appear with a button identical to the dozen you just clicked asking to spend money (virtual or real) to continue playing.
                I personally experience it every day with Candy Crush :
            </p>
            <div className={`flex-row`}>
                <div>
                    <img src={getImageSrc(postId, '2.jpeg')} className={`width-50`}/>
                </div>
                <div>
                    <img src={getImageSrc(postId, '3.jpeg')} className={`width-50`}/>
                </div>
            </div>
            <p>
                The most obvious button here is flagrantly placed in the middle of the screen with a reassuring color. 
                There is even a message to warn you that something bad will happen if you do not click on it. 
                In the end, you need to click twice on the cross to close this window and not spend anything.
            </p>
            <p>
                Another common trick is to get you automatically signed up for the newsletter when you create an account. 
                The check box 'I want to receive the newsletter' is ticked by default. 
                However, as people are now used to this, some company turned the process around by just adding a tiny single word that anyone who does not specifically pays attention to that detail will easily miss.
                The sentence becomes 'I don't want to receive the newsletter' and the checkbox needs to be ticked if you don't want to sign up for it.
                Here is a screenshot of what happens when you book a train ticket on Oui Sncf website :
            </p>
            <img src={getImageSrc(postId, '4.png')}/>
            <p>
                These tricks are called “<i><b>dark patterns</b></i>” and there is <a href='https://www.darkpatterns.org/' target='_blank'>a dedicated website</a> to help you recognize them.
            </p>
            <p>
                Hopefully, not all UI/UX designers are malicious. 
                Their initial goal is to make your life easier, so everytime you buy or book something on Internet without feeling frustrated, annoyed or confused, it means a victory for them.
                Just to name two examples, I personally like the interface of Monzo app and Doctolib website because of their simplicity and the reassuring feeling I get when using them.
            </p>

            <div className={`section-separator`}></div>

            <p>
                In conclusion, it's important to understand how UI and UX are being different because they often appeal to different kinds of people, who do different kinds of jobs.
                But of course, these two things overlap. 
                We talk about a UI/UX designer as somebody who does both of these things. 
                But in truth, a UI designer tends to focus more on UI with a little bit of UX and a UX designer tends to focus more on UX with a little bit of UI. 
                While there are people capable of working on both on these things equally well and be a UI/UX designer, this is not common.
            </p>
        </PostTemplate>
    );
}

export default English;