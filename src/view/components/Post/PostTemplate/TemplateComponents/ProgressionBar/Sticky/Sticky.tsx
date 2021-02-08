import React, { useEffect, useRef, useState } from 'react';
import './Sticky.scss';

interface IStickyProps{
    top : number;
    zIndex ?: number;
}

const Sticky : React.FC<IStickyProps> = props => {
    const ref = useRef<HTMLDivElement>(null);
    const [sticky, setSticky] = useState(false);
    const stickyClassname = sticky ? 'is-sticky' : '';
    const nonStickyTop = useRef<number | null>(null);

    useEffect(() => {
        const onScroll = () => {
            if (ref.current != null) {
                const topOffset = ref.current.getBoundingClientRect().top;
                if (topOffset <= props.top && nonStickyTop.current == null) {
                    nonStickyTop.current = topOffset + document.documentElement.scrollTop;
                    setSticky(true);
                }
                else if(nonStickyTop.current != null && document.documentElement.scrollTop < nonStickyTop.current){
                    setSticky(false);
                    nonStickyTop.current = null;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ ]);

    return (
        <div className={`sticky ${stickyClassname}`} ref={ref} style={{
            top : sticky ? `${props.top}px` : undefined,
            zIndex : props.zIndex
        }}>
            {props.children}
        </div>
    );
}

export default Sticky;