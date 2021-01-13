import React from 'react';
import { IArticleContentProps } from '../../../../model/Article';
import '../Article.scss';
import './Article.scss';

const French : React.FC<IArticleContentProps> = props => {
    return (
        <div className={`article three`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={props.titleTopLayerRef}>
                    {props.title}
                </div>
            </div>
            <div className={`main-wrapper`}>
                <div className={`article-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {props.title}
                </div>
                <div className={`article-text`}>
                    <p>Créer / Utiliser un compte Facebook</p>
                    <p>Le transformer en compte développeur</p>
                    <p>Créer une application</p>
                    <p>Récupérer le numéro d'identification de l'application et le Client access token</p>
                    <p>Écrire la commande curl</p>
                    <p>Récupérer le json de réponse et en faire ce que vous voulez</p>
                </div>
            </div>
        </div>
    );
}

export default French;