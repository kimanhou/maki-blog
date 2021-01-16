import React from 'react';
import { myScrollTo } from '../../../../Util';
import { IPostContentProps } from '../../../../model/Post';
import '../PostPage.scss';
import './PostPage.scss';
import TldrEnglish from './TldrEnglish';
import FadeIn from '../../FadeIn/FadeIn';

const English : React.FC<IPostContentProps> = props => {
    const onClickTldr = () => {
        myScrollTo('tldr');
    }

    const onClickTop = () => {
        myScrollTo('top');
    }

    return (
        <div className={`post one`}>
            <div className={`post-hero-image`}>
                <div className={`post-title top-layer`} ref={props.titleTopLayerRef}>
                    {props.title}
                </div>
            </div>
            <div className={`main-wrapper`} id={`top`}>
                <div className={`post-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {props.title}
                </div>
                <FadeIn noDelay>
                    <div className={`go-to-tldr`} onClick={onClickTldr}>
                        <span>Go to TL;DR</span>
                        <span className={`arrow-down`}>⌄</span>
                    </div>
                </FadeIn>
                <div className={`post-text`}>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                </div>
                <TldrEnglish />
                <FadeIn noDelay>
                    <div className={`back-to-top`} onClick={onClickTop}>
                        <span>Back to top</span>
                        <span className={`arrow-up`}>⌃</span>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default English;