import { off } from 'process';
import React, { useEffect, useRef, useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import '../Article.scss';

interface IEnglishProps {

}

const English : React.FC<IEnglishProps> = props => {
    const topLayerRef = useRef<HTMLDivElement>(null);
    const topLayerY = useRef(0);
    const updateTopLayer = () => {
        if(topLayerRef.current != null) {
            const vh = window.innerHeight;
            const divTop = topLayerRef.current.getBoundingClientRect().top;
            const divHeight = topLayerRef.current.getBoundingClientRect().height;
            let offset = (vh/2) - (divTop - topLayerY.current + divHeight/2);
            offset = Math.min(offset, vh * 1.5);
            topLayerRef.current.style.transform = `translateY(${offset}px)`;
            topLayerY.current = offset;
        }
    }

    const bottomLayerRef = useRef<HTMLDivElement>(null);
    const bottomLayerY = useRef(0);
    const updateBottomLayer = () => {
        if(bottomLayerRef.current != null) {
            const vh = window.innerHeight;
            const divTop = bottomLayerRef.current.getBoundingClientRect().top;
            const divHeight = bottomLayerRef.current.getBoundingClientRect().height;
            let offset = (vh/2) - (divTop - bottomLayerY.current + divHeight/2);
            offset = Math.min(offset, 0);
            bottomLayerRef.current.style.transform = `translateY(${offset}px)`;
            bottomLayerY.current = offset;
        }
    }

    useEffect(() => {
        updateTopLayer();
        updateBottomLayer();
        window.addEventListener("scroll", updateTopLayer, true);
        window.addEventListener("scroll", updateBottomLayer, true);
        return () => {
            window.removeEventListener("scroll", updateTopLayer, true);
            window.removeEventListener("scroll", updateBottomLayer, true);
        };
    }, [])

    return (
        <div className={`article`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={topLayerRef}>
                    How to add an Instagram post to your website
                </div>
            </div>
            <div className={`main-wrapper`}>
                <div className={`article-title bottom-layer`} ref={bottomLayerRef}>
                    How to add an Instagram post to your website
                </div>
                <div className={`article-text`}>
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