import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import '../PostPage.scss';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    return (
        <div className={`article two`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={props.titleTopLayerRef}>
                    {props.title}
                </div>
            </div>
            <div className={`main-wrapper`}>
                <div className={`article-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {props.title}
                </div>
                <div className={`article-text`}>
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
            </div>
        </div>
    );
}

export default English;