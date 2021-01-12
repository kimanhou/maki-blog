import React, { useContext, useEffect, useRef } from 'react';
import ArticleModel from '../../../model/Article';
import Local from '../LocalisationContext/Local';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import './Article.scss';

interface IArticleProps {
    article : ArticleModel;
}

const Article : React.FC<IArticleProps> = props => {
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
            return <props.article.french.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef}/>;
        break;

        case Local.EN:
            return <props.article.english.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef}/>;
        break;

        default:
            return <props.article.english.content titleBottomLayerRef={bottomLayerRef} titleTopLayerRef={topLayerRef}/>;
    }
}

export default Article;