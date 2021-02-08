import React, { useEffect, useRef, useState } from 'react';
import FadeIn from '../../../../FadeIn/FadeIn';
import './ProgressionBar.scss';
import Sticky from './Sticky/Sticky';

interface IProgressionBarProps {

}

const ProgressionBar : React.FC<IProgressionBarProps> = props => {
    const [done, setDone] = useState(0);
    const widthDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            var body = document.body,
            html = document.documentElement;
            var documentHeight = Math.max(body.clientHeight, body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        
            var scrollTop = Math.max(window.scrollY - 1.1 * window.innerHeight, 0);
            var percentage = scrollTop / (documentHeight - 2.1 * window.innerHeight) * 100;
            setDone(percentage);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ ]);

    const totalWidth = widthDivRef.current != null ? widthDivRef.current.clientWidth : 0;
    return (
        <Sticky top={0} zIndex={1}>
            <div className={`progression-bar`} ref={widthDivRef}>
                <FadeIn noDelay>
                    <div className={`progression-bar-done`} style={{ width: `${done}%`}}>
                    </div>
                    <div className={`progression-bar-done-percentage`} style={{left : `${Math.min(Math.max(done / 100 * totalWidth, 12), totalWidth-18)}px`}}>
                        {done.toFixed(0)}%
                    </div>
                    <div className={`progression-bar-total`}></div>
                </FadeIn>
            </div>
        </Sticky>
    );
}

export default ProgressionBar;