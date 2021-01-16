import React, { useContext, useEffect, useRef } from 'react';
import Post from '../../../model/Post';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';

interface IPostPageProps {
    post : Post;
}

const PostPage : React.FC<IPostPageProps> = props => {
    var localisation = useContext(LocalValueContext);

    const topLayerRef = useRef<HTMLDivElement>(null);
    const topLayerY = useRef(0);
    const updateTopLayer = () => {
        updateLayer(topLayerRef, topLayerY, window.innerHeight * 1.5);
    }

    const bottomLayerRef = useRef<HTMLDivElement>(null);
    const bottomLayerY = useRef(0);
    const updateBottomLayer = () => {
        updateLayer(bottomLayerRef, bottomLayerY, 0);
    }

    const updateLayer = (ref : React.RefObject<HTMLDivElement>, y : React.MutableRefObject<number>, threshold : number) => {
        if(ref.current != null) {
            const vh = window.innerHeight;
            const divTop = ref.current.getBoundingClientRect().top;
            const divHeight = ref.current.getBoundingClientRect().height;
            let offset = (vh/2) - (divTop - y.current + divHeight/2);
            offset = Math.min(offset, threshold);
            ref.current.style.transform = `translateY(${offset}px)`;
            y.current = offset;
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


    switch (localisation) {
        case Local.FR:
            return <props.post.french.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef} title={props.post.french.title} />;
        break;

        case Local.EN:
            return <props.post.english.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef} title={props.post.english.title} />;
        break;

        default:
            return <props.post.english.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef} title={props.post.english.title} />;
    }
}

export default PostPage;