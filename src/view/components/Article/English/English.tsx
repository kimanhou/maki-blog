import React from 'react';
import '../Article.scss';

interface IEnglishProps {
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
}

const English : React.FC<IEnglishProps> = props => {
    const title = 'How to add an Instagram post to your website';

    return (
        <div className={`article`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={props.titleTopLayerRef}>
                    {title}
                </div>
            </div>
            <div className={`main-wrapper`}>
                <div className={`article-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {title}
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