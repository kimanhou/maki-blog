import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const tldr = <p>TLDR en français #1</p>;

    return (
        <PostTemplate title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`one`}
                    tldr={tldr}>
            <p>Créer / Utiliser un compte Facebook</p>
            <p>Le transformer en compte développeur</p>
            <p>Créer une application</p>
            <p>Récupérer le numéro d'identification de l'application et le Client access token</p>
            <p>Écrire la commande curl</p>
            <p>Récupérer le json de réponse et en faire ce que vous voulez</p>
        </PostTemplate>
    );
}

export default French;