import React, { useRef } from 'react';
import ScreenDetector from '../../../ScreenDetector/screenDetector';
import './Cross.scss';

const Cross : React.FC = props => {

    const ref = useRef<HTMLDivElement>(null);
    const setAnimation = () => {
        if(ref.current != null && !ref.current.classList.contains("animate")){
            ref.current.classList.add("animate");
        }
    }

    return (
        <div className={`cross`} ref={ref}>
            <ScreenDetector className={`screen-detector-cross`} onActive={setAnimation} />
        
            <svg className={`cross`} viewBox="0 0 8.4666665 8.4666669">
                <g>
                    <path className={`bar-1`}
                        style={{ fill: 'none', 
                                    stroke: '#f9e44a', 
                                    strokeWidth: '0.52916667',
                                    strokeLinecap: 'butt',
                                    strokeLinejoin: 'miter',
                                    strokeMiterlimit: 4,
                                    strokeOpacity: 1,}}
                        d="M 1.3229167,1.3229167 C 2.7815707,3.6812045 5.1021027,5.3265599 7.14375,7.14375" />
                    <path className={`bar-2`}
                        style={{ fill: 'none', 
                                    stroke: '#f9e44a', 
                                    strokeWidth: '0.52916667',
                                    strokeLinecap: 'butt',
                                    strokeLinejoin: 'miter',
                                    strokeMiterlimit: 4,
                                    strokeOpacity: 1,}}
                        d="M 7.1460906,1.3498509 C 4.7878028,2.8085049 3.1424474,5.129037 1.3252573,7.1706842" />
                </g>
            </svg>
        </div>
    );
}

export default Cross;