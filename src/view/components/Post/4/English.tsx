import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 4;
    const tldr = 
    <>
        <Cross/><span>UI stands for “<i>user interface</i>”. It is the way the user gets to the content.</span>
        <br></br>
        <Cross/><span>A UI designer is the person who .</span>
        <br></br>
        <Cross/><span>User interface design is part of the greater user experience design universe. UI is the visual manifestation of UX thinking.</span>
    </>;

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`four`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>
                Screens are undeniably omnipresent in our daily lives. The way we interact with them is governed by an obscure group of people called UI/UX designers.
                If you've never heard of this name or if you don't know what it means, this article will enlighten you on this sweet matter.
            </p>
            <p>
                First, let's examine those two terms separately in order to understand the differences between them.
            </p>
            <p>Good reading !</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. What is UI and what does a UI designer do ?</span>

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

            <Cross/><span className={`step-title`}>2. What is UX and what does a UX designer do ?</span>
            <p>
                UX stands for “<i>user experience</i>”. A definition can be : the experience a product or a service creates for people in the real world.
            </p>
            <p>
                The experience is what is left on us, an impression, feeling, memory. An experience is often accompanied by adjectives, like 'amazing' or 'horrible' or 'frustrating'.
                This definition also implies that a user experience has real-world consequences and effects on actual people. It can delight them, frustrate or annoy them.
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
                The also deal with the navigation, the structure and the story of the whole cycle app.
                When they get the content, the UX designer has to figure out how to get the user engaged with that content.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. </span>
            <p>
                Nowadays, we get all our information from screens, be it a desktop, a laptop, a tablet or a phone. 
                We are constantly looking at screens and learning how to interact with the world through them. 
                Thanks to this constant interaction with screens, we understand how to access information. 
                Moreover, there are certain conventions that we are used to, like buttons or menus. 
                We know we have to scroll down to get content on a website or swipe from side to side on a phone. 
                We have become used to those conventions but there are levels of flexibility within those rules that can shape the experience the user has with the content through the interface.  
            </p>

            <p>
                It's important to understand how UI and UX are being different because they often appeal to different kinds of people, who do different kinds of jobs.
                But of course, these two things overlap. 
                We talk about a UI/UX designer as somebody who does both of these things. 
                But in truth, a UI designer tends to focus more on UI with a little bit of UX and a UX designer tends to focus more on UX with a little bit of UI. 
                While there are people capable of working on both on these things equally well and be a UI/UX designer, this is not common.
            </p>
        </PostTemplate>
    );
}

export default English;