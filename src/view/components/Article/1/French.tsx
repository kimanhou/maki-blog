import React from 'react';
import { IArticleContentProps } from '../../../../model/Article';
import { myScrollTo } from '../../../../Util';
import '../Article.scss';
import './Article.scss';

const French : React.FC<IArticleContentProps> = props => {
    const onClickTldr = () => {
        myScrollTo('tldr');
    }

    const onClickTop = () => {
        myScrollTo('top');
    }

    return (
        <div className={`article one`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={props.titleTopLayerRef}>
                    {props.title}
                </div>
            </div>
            <div className={`main-wrapper`} id={`top`}>
                <div className={`article-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {props.title}
                </div>
                <div className={`go-to-tldr`} onClick={onClickTldr}>
                    Go to TL;DR
                </div>
                <div className={`article-text`}>
                    <p>Créer / Utiliser un compte Facebook</p>
                    <p>Le transformer en compte développeur</p>
                    <p>Créer une application</p>
                    <p>Récupérer le numéro d'identification de l'application et le Client access token</p>
                    <p>Écrire la commande curl</p>
                    <p>Récupérer le json de réponse et en faire ce que vous voulez</p>
                </div>
                <div className={`back-to-top`} onClick={onClickTop}>
                    Retour en haut
                </div>
            </div>
        </div>
    );
}

export default French;