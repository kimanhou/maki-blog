import React from 'react';
import './ZigZag.scss';

const ZigZag : React.FC = props => {
    return (
        <svg className={`zig-zag`} viewBox="0 0 17.838928 3.0158901" >
            <g transform="translate(-77.673491,-138.28726)">
            <path className={`zig-zag-path`} 
                style={{ fill: 'none',
                        stroke: '#3c3c41',
                        strokeWidth: '0.865',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeOpacity: 1,
                        strokeMiterlimit: 4,
                        strokeDasharray: 'none' }}
                d="m 78.105991,138.71976 2.721012,2.07316 2.824668,-2.04724 2.928326,2.12498 2.954243,-2.07315 2.82467,1.99541 2.721009,-1.94358" />
            </g>
        </svg>
    );
}

export default ZigZag;