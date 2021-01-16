import React from 'react';
import FadeIn from '../../FadeIn/FadeIn';
import './TldrEnglish.scss';

const TldrEnglish : React.FC = props => {
    return(
        <div className={`tldr one english`} id={`tldr`}>
            <FadeIn noDelay>
                <div className={`tldr-title`}>
                    TL;DR
                </div>
                <p>Create / Have a Facebook account</p>
                <p>Make it a developer account</p>
                <p>Create an App</p>
                <p>Get the App ID and the Client access token</p>
                <p>Write the command curl</p>
                <p>Get json and do what you want with it</p>
            </FadeIn>
        </div>
    );
}

export default TldrEnglish;