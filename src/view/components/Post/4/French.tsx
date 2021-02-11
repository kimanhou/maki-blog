import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 4;
    const tldr = 
    <>
        <Cross/><span><i>UI</i> signifie “<i>interface utilisateur</i>”. L'interface, c'est ce qui fait le lien entre l'utilisateur et le contenu</span>
        <br></br>
        <Cross/><span></span>
        <br></br>
        <Cross/><span></span>
    </>;


    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`four`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>
                Les écrans sont indéniablement omniprésents dans notre quotidien. La façon dont nous interagissons avec eux est régie par un groupe obscur de personnes, nommés les designers UI/UX.
                Si vous n'avez jamais entendu cette dénommination ou si vous ne savez pas ce qu'elle veut dire, cet article vous éclairera sur ce doux sujet.
            </p>
            <p>Bonne lecture !</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. L'interface utilisateur, qu'est-ce que c'est ?</span>
            <p>
                <i>UI</i> signifie “<i>interface utilisateur</i>”. Décomposons les termes clés, qui sont ici “<i>utilisateur</i>” et “<i>interface</i>”. 
            </p>
            <p>
                <b>L'utilisateur</b> est le spectateur ou la personne qui interagit avec le contenu. Il s'agit essentiellement de vous et moi, ou de quiconque possède un appareil numérique et l'utilise pour regarder du contenu sur Internet.
            </p>
            <p>
                <b>L'interface</b> est la manière dont cet utilisateur accède à ce contenu.
                On peut considérer que l'interface est la <b>passerelle entre l'utilisateur et le contenu</b>.
                Dans le monde réel, on peut comparer un livre à l'interface entre le lecteur et l'histoire.
                Le livre est certes imprimé sur papier, mais ce que le lecteur/utilisateur perçoit, c’est le roman ou l’histoire elle-même et c'est à travers le livre que le lecteur peut vivre cette expérience. 
            </p>
            <p>
                Notez que cette passerelle entre utilisateur et contenu n'est pas totalement passive, elle peut agir sur la façon dont l'utilisateur perçoit le contenu.
                L'interface peut changer l'expérience et affecter le message.
            </p>
            <p>
                Ainsi, celui qui conçoit l'interface a beaucoup de pouvoir sur l'utilisateur.
                Pour créer une interface puissante, on doit combiner la partie UI (conception de l'interface utilisateur) et la partie UX (conception de l'expérience utilisateur).
                Si vous mettez ces deux ensemble, vous avez à peu près le contrôle sur la façon dont tout le monde expérimente chaque type de contenu.
            </p>
            
            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. La relation entre UI and UX</span>
            <p>
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. L'expérience utilisateur, qu'est-ce que c'est ?</span>
            <p>
                De nos jours, nous obtenons toutes nos informations à partir d'écrans, que ce soit un ordinateur de bureau, un ordinateur portable, une tablette ou un téléphone.
                Nous les regardons constamment et apprenons en permanence à interagir avec le monde à travers eux.
                Grâce à cette interaction constante, nous comprenons comment accéder aux informations.
                De plus, il existe certaines conventions auxquelles nous sommes habitués, comme les boutons ou les menus.
                Nous savons que nous devons faire défiler vers le bas pour obtenir du contenu sur un site web ou glisser d'un côté à l'autre sur un téléphone.
                Nous nous sommes habitués à ces conventions, mais il existe des niveaux de flexibilité dans ces règles qui peuvent façonner l'expérience de l'utilisateur. <b>Mais qu'est-ce qu'une interface ?</b>
            </p>

        </PostTemplate>
    );
}

export default French;