import React from 'react';
import '../Article.scss';

interface IFrenchProps {
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
}

const French : React.FC<IFrenchProps> = props => {
    const title = 'Ajouter un post Instagram sur son site web';

    return (
        <div className={`article`}>
            <div className={`article-hero-image`}>
                <div className={`article-title top-layer`} ref={props.titleTopLayerRef}>
                    {title}
                </div>
            </div>
            <div className={`main-wrapper`}>
                <div className={`article-title bottom-layer`} ref={props.titleBottomLayerRef}>
                    {title}
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