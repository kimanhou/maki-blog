import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const tldr = <>
                    <p>Create / Have a Facebook account</p>
                    <p>Make it a developer account</p>
                    <p>Create an App</p>
                    <p>Get the App ID and the Client access token</p>
                    <p>Write the command curl</p>
                    <p>Get json and do what you want with it</p>
                </>;
    return (
        <PostTemplate title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`one`}
                    tldr={tldr}>
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
        </PostTemplate>
    );
}

export default English;