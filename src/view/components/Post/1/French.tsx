import React, { useEffect, useState } from 'react';
import Post, { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const tldr = <>
        <Cross/><span>Créer / Utiliser un compte de développeur Facebook</span><br></br>
        <Cross/><span>Créer une application Facebook enregistrée</span><br></br>
        <Cross/><span>Ajouter le produit oEmbed à l'application</span><br></br>
        <Cross/><span>Récupérer l'ID de l'application et le token client</span><br></br>
        <Cross/><span>Écrire et envoyer la requête à Facebook</span><br></br>
        <Cross/><span>Récupérer la réponse et l'utiliser dans votre code</span>
    </>;

    const url = 'https://www.instagram.com/p/CKMKlIzs5CG/';
    const [postHtml, setPostHtml] = useState<string | null>(null);
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    useEffect(() => {
        fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${url}&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3&omitscript=true`)
            .then(resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(json => {
                setThumbnailUrl(json["thumbnail_url"]);
                setPostHtml(json["html"]);
                setTimeout(() => {
                    (window as any).instgrm.Embeds.process()
                }, 50);
            })
    }, []);


    const getImageSrc = (pictureName : string) => {
        return require(`./images/${pictureName}.jpg`);
    }

    const relatedPost = Post.getPostById(1);
    const relatedPosts = relatedPost == undefined ? [] : [ relatedPost ];

    return (
        <PostTemplate postId={1} 
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`one`}
                    tldr={tldr}
                    relatedPosts={ relatedPosts }>
            <p>Ce tutoriel est destiné aux sites et applications qui n'ont pas de serveur back-end. Si votre application a un serveur back-end, la procédure reste la même jusqu'à l'étape 4, où il faudra alors utiliser un token d’accès d’app au lieu d'un token d’accès client lors de la communication avec le point de terminaison oEmbed.</p>
            
            <div className={`section-separator`}></div>
            
            <p className={`step-title`}>1. Créer / Utiliser un compte de développeur Facebook</p>
            <p className={`italic`}>Où ça ? Sur <a href='https://www.facebook.com/' target='_blank'>facebook.com</a></p>
            <Cross/><span>Si vous voulez utiliser un compte Facebook différent de votre compte personnel, déconnectez-vous de votre compte personnel et <b>créez un nouveau compte</b>. Confirmez l'adresse e-mail et connectez-vous avec le nouveau compte.</span>
            <div className={`p-separator`}></div>
            <Cross/><span>Pour le transformer en compte développeur, <b>allez sur <a href='http://www.facebook.com/developers/become_test_account.php' target='_blank'>http://www.facebook.com/developers/become_test_account.php</a></b> et cliquez sur le bouton “Make [ <span className={`italic`}>votre nom</span> ] a Test Account”.</span>
            
            <div className={`section-separator`}></div>

            <p className={`step-title`}>2. Créer une application Facebook enregistrée</p>
            <p className={`italic`}>Où ça ? Sur <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <Cross/><span>Sur le site de Facebook pour développeurs, rendez-vous sur le <a href='https://developers.facebook.com/apps' target='_blank'>panneau des applications</a> en cliquand sur “Mes applications”.</span>
            <img src={getImageSrc('1')}/>
            <Cross/><span>Cliquez sur “Créer une app”.</span>
            <img src={getImageSrc('2')}/>
            <Cross/><span>Choisissez un type d'app, il faut que oEmbed pour Instagram fasse partie des produits disponibles du type d'app choisi. Vous pouvez en savoir plus sur les types d'apps <a href='https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types' target='_blank'>ici</a>. Par exemple, pour ce blog, j'ai choisi “Créer des expériences partagées”.</span>
            <img src={getImageSrc('3')} className={`width-50`}/>
            <Cross/><span>Renseignez le nom de l'application et l'adresse e-mail.</span>
            <img src={getImageSrc('4')} className={`width-50`}/>
            <Cross/><span>La vérification de sécurité qui suit n'a pas l'air de fonctionner sous Chrome, donc j'espère que vous disposez d'un autre navigateur.</span>
            
            <div className={`section-separator`}></div>

            <p className={`step-title`}>3. Ajouter le produit oEmbed à l'application</p>
            <p className={`italic`}>Où ça ? Toujours sur <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <Cross/><span>Vous devez maintenant ajouter le produit oEmbed à votre application. Pour cela, rendez-vous sur le tableau de bord, faites défiler jusqu'à la section “Ajouter des produits à votre app” et repérez oEmbed. Cliquez sur le bouton “Configurer”.</span>
            <img src={getImageSrc('5')}/>
            <Cross/><span>Confirmez. De retour sur le tableau de bord, vous devriez voir oEmbed dans la rubrique “Mes Produits”.</span>
            <img src={getImageSrc('6')}/>
            
            <div className={`section-separator`}></div>

            <p className={`step-title`}>4. Récupérer l'ID de l'application et le token client</p>
            <p className={`italic`}>Où ça ? Toujours sur <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <p>Le point de terminaison d'oEmbed pour Instagram requiert soit un token d’accès d’app, soit un token d’accès client. Comme mentionné dans l'introduction de cet article, nous traitons ici les applications qui n'ont pas de serveur back-end, c'est pourquoi nous allons utiliser le token d'accès client, qui se compose de l'ID d'app et du token client, séparés par une barre verticale.</p>
            <Cross/><span>Sur le tableau de bord de l'application, <b>l'ID d'app</b> est le nombre à 16 chiffres situé en haut de votre écran, à côté du nom de l'application.</span>
            <img src={getImageSrc('7')}/>
            <Cross/><span>Pour obtenir le <b>token client</b>, allez dans <b>Paramètres &#62; Avancé &#62; Sécurité &#62; Token client</b>.</span>
            <img src={getImageSrc('8')}/>
            <Cross/><span>Votre token d'accès client est : <b className={`color-green`}>&#123;app-id&#125;|&#123;token-client&#125;</b>.
            <br></br>Par exemple : access_token = 1234567891011121|1234a56b78cd91e0f1g2h3jik4l5m678</span>

            <div className={`section-separator`}></div>

            <p className={`step-title`}>5. Écrire et envoyer la requête à Facebook</p>
            <p className={`italic`}>Où ça ? Dans votre code, vous pouvez également faire des tests depuis un terminal ou un navigateur.</p>
            <Cross/><span>Vous devez envoyer une demande de type : </span>
            <div className={`code-sample`}>GET /instagram_oembed?url=&#123;url&#125;&amp;access_token=&#123;access-token&#125;</div>
            <span>Avec <span className={`color-green`}>&#123;url&#125;</span> = l'URL du post Instagram que vous voulez ajouter. Par exemple : <a href='https://www.instagram.com/p/CKMKlIzs5CG/' target='_blank'>https://www.instagram.com/p/CKMKlIzs5CG/</a></span>
            <br></br>
            <span>Et <span className={`color-green`}>&#123;access-token&#125;</span> = <span className={`color-green`}>&#123;app-id&#125;|&#123;token-client&#125;</span> comme vu précédemment.</span>
            <p>Exemple de requête :</p>
            <div className={`code-sample`}>curl -X GET \<br></br>
                <span className={`color-fluo-green`}>"https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CKMKlIzs5CG/&amp;access_token=1234567891011121|1234a56b78cd91e0f1g2h3jik4l5m678"</span></div>
            <p>Si vous faites des tests depuis un navigateur, il suffit de copier coller la partie en vert, sans les guillements, dans la barre URL du navigateur.</p>
            <p>Vous devriez recevoir une réponse ressemblant à ceci : </p>
            <div className={`code-sample`}>
                &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"version"</span>: <span className={`color-fluo-green`}>"1.0"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"author_name"</span>: <span className={`color-fluo-green`}>"thisismakiworld"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"provider_name"</span>: <span className={`color-fluo-green`}>"Instagram"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"provider_url"</span>: <span className={`color-fluo-green`}>"https://www.instagram.com/"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"type"</span>: <span className={`color-fluo-green`}>"rich"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"width"</span>: <span className={`color-fluo-blue`}>658</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"html"</span>: <span className={`color-fluo-green`}>"&lt;blockquote class=\'instagram-media\" data-instgrm-ca...'</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_url"</span>: <span className={`color-fluo-green`}>"https://scontent.cdninstagram.com/v/t51.2885-15/..."</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_width"</span>: <span className={`color-fluo-blue`}>640</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_height"</span>: <span className={`color-fluo-blue`}>640</span><br></br>
                &#125;
            </div>
            <div className={`section-separator`}></div>

            <p className={`step-title`}>6. Récupérer la réponse et l'utiliser dans votre code</p>
            <p className={`italic`}>Où ça ? Dans votre code.</p>
            <p>La réponse contient un code d'intégration HTML dans la propriété <b>"html"</b>. Celui-ci inclut une référence à la librairie JavaScript Instagram embed.js. Il se peut que vous devez charger séparément cette librairie avant d'initialiser le code d'intégration HTML (si vous utilisez un innerHtml par exemple car celui-ci bloque le chargement de tout script par mesure de sécurité). Pour cela, ajoutez le script dans votre index.html, incluez <span className={`color-green`}>omitscript=true</span> dans votre requête, puis appelez la fonction <span className={`color-green`}>instgrm.Embeds.process()</span> aprés avoir chargé la librairie.</p>
            <p>Si vous copiez collez le <b>code d'intégration HTML</b> envoyé par Facebook dans votre code, vous obtenez ceci : </p>
            <div className="content" dangerouslySetInnerHTML={{__html: postHtml!}}></div>
            <p>Si vous avez seulement besoin de l'image dans une qualité relativement basse, <b>'thumbnail_url'</b> renvoie un lien vers l'image du post choisi. Mettez ce lien dans la source d'une image et vous obtenez ceci : </p>
            <img src={thumbnailUrl!}/>

            <p>Pour plus d'informations, consultez la <a href='https://developers.facebook.com/docs/instagram/oembed/' target='_blank'>documentation officielle d'oEmbed pour Instagram</a>.</p>
        </PostTemplate>
    );
}

export default French;