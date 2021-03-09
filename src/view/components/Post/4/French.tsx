import React, { useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import PhotoWithCredits from '../PostTemplate/TemplateComponents/PhotoWithCredits/PhotoWithCredits';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 4;
    const tldr = 
    <>
        <Cross/><span><i>UI</i> signifie “<i>interface utilisateur</i>”. L'interface, c'est ce qui fait le lien entre l'utilisateur et le contenu</span>
        <br></br>
        <Cross/><span>UX signifie “<i>expérience utilisateur </i>”. C'est le sentiment qui est laissé à l'utilisateur lors de la navigation sur un site Web.</span>
        <br></br>
        <Cross/><span>La conception de l'interface utilisateur fait partie de l'univers plus large de conception de l'expérience utilisateur. L'interface utilisateur est la manifestation visuelle de la pensée UX.</span>
        <br></br>
        <Cross/><span>UI/UX peut façonner la façon dont l'utilisateur vit le contenu. Certains utilisent ces pratiques pour tromper l'utilisateur, mais la plupart essaient de lui faciliter la vie.</span>
    </>;

    const formatText = (text : string) => {
        return text.split('').map(t => {
            return (<span>{t}</span>);
        });
    }

    const [active, setActive] = useState(false);
    const activeClassname = active ? 'active' : '';
    const onActive = () => { setActive(true) }
    const onUnactive = () => { setActive(false) }

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`four`}
                    tldr={tldr}
                    relatedPosts={[]}
                    photoCreditName='Sigmund' photoCreditUrl='https://unsplash.com/photos/6jaBQAURBgI' photoCreditWebsite='Unsplash'>
            <p>
                Les écrans sont indéniablement omniprésents dans notre quotidien. La façon dont nous interagissons avec eux est régie par un groupe obscur de personnes, nommés les designers UI/UX.
                Si vous n'avez jamais entendu cette dénommination ou si vous ne savez pas ce qu'elle veut dire, cet article vous éclairera sur ce doux sujet.
            </p>
            <p>
            Tout d'abord, examinons ces deux termes séparément afin de comprendre les différences entre eux et pourquoi ils sont toujours liés.
            </p>
            <p>Bonne lecture !</p>

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>1. UI, qu'est-ce que c'est ?</h2>
            <p>
                <i>UI</i> signifie “<i>interface utilisateur</i>”. Décomposons les termes clés, qui sont ici “<i>utilisateur</i>” et “<i>interface</i>”. 
            </p>
            <p>
                <b>L'utilisateur</b> est le spectateur ou la personne qui interagit avec le contenu. Il s'agit essentiellement de vous et moi, ou de quiconque possède un appareil numérique et l'utilise pour consommer du contenu sur Internet.
            </p>
            <p>
                <b>L'interface</b> est la manière dont cet utilisateur accède à ce contenu.
                On peut considérer que l'interface est la <b>passerelle entre l'utilisateur et le contenu</b>.
                Dans le monde réel, on peut comparer un livre à l'interface entre le lecteur et l'histoire.
                Le livre est certes imprimé sur papier, mais ce que le lecteur/utilisateur perçoit, c’est le roman ou l’histoire elle-même et c'est à travers le livre que le lecteur peut vivre cette expérience. 
            </p>
            <div className={`illustration-ui-bridge flex-row ${activeClassname}`}>
                <ScreenDetector className={`screen-detector-illustation-ui-bridge`} onActive={onActive} onUnactive={onUnactive} />
                <div className={`illustration-ui-bridge-user`}>utilisateur</div>
                <div className={`illustration-ui-bridge-interface flex-column`}>{formatText('interface')}</div>
                <div className={`illustration-ui-bridge-content`}>contenu</div>
            </div>
            <p>
                Alors que <i>UI</i> est le terme utilisé pour parler de l'interface elle-même, le <b>designer UI</b> est la personne qui reçoit le matériel / contenu et doit le transformer en application ou en site web .
                Le contenu à l'origine n'a en fait aucune forme, donc le designer UI est celui qui doit déterminer quelle est la meilleure structure pour ce contenu particulier.
                En d'autres termes, il doit chercher le meilleur moyen pour communiquer une idée à l'utilisateur.
                Pour ce faire, les designers UI utilisent le <b>design visuel</b>, qui est ancré dans le design graphique, et se concentrent sur les formes et l'esthétique.
                Ils s'occupent de l'interface en elle-même et se concentrent sur l'aspect visuelle et l'organisation de l'information.
                En quelque sorte, ils sont responsables de <b>l'identité visuelle du site web</b>.
                Ils créent souvent une maquette à l'aide d'outils numériques tels que Photoshop et Illustrator.
            </p>

            <div className={`section-separator`}></div>

            <p>
                La passerelle entre utilisateur et contenu n'est pas totalement passive, elle peut agir sur la façon dont l'utilisateur perçoit le contenu.
                L'interface peut changer l'expérience et affecter le message.
            </p>
            <p>
                Ainsi, celui qui conçoit l'interface a un grand pouvoir sur la façon dont l'utilisateur perçoit le contenu. 
                Pour créer une interface efficace et réussie, on doit combiner la partie UI (design visuel) et la partie UX (conception de l'expérience utilisateur).
                Si vous mettez ces deux choses ensemble, vous avez à peu près le contrôle sur la façon dont tout le monde perçoit tout type de contenu.
            </p>
            
            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>2. UX, qu'est-ce que c'est ?</h2>
            <p>
                UX signifie “<i>expérience utilisateur</i>”. Une définition possible est : l'expérience qu'un produit ou un service fait vivre aux gens dans le monde réel.
            </p>
            <p>
                L'expérience est une impression, un sentiment, un souvenir qui nous reste après avoir utilisé un site web. 
                Cette définition implique également qu'une expérience utilisateur a des conséquences et des effets sur des personnes réelles. 
                Cela peut les ravir, les frustrer ou les ennuyer.
                Si l'expérience est positive, les objectifs du site web sont plus susceptibles d'être atteints.
                Les utilisateurs seront heureux et plus enclins à acheter quelque chose, à s'inscrire ou à passer du temps sur votre site web.
                Ils sont également plus susceptibles de revenir sur le site.
            </p>
            <p>
                L'UX est liée aux sciences sociales, car elle vise à manipuler l'utilisateur pour qu'il fasse quelque chose. 
                La personne responsable de créer une expérience utilisateur est le designer UX.
            </p>
            <p>
                Un <b>designer UX</b> est en charge du sentiment que son contenu numérique crée sur les utilisateurs.
                Son travail fait partie du domain du non visuel et est souvent régi par les retours des utilisateurs.
                Il s'agit pour lui de rechercher qui sont les utilisateurs, de planifier et de tester.
                Il reçoit des commentaires des utilisateurs et se concentre sur ce que l'interface leur fait ressentir.
                Il s'occupe également de la navigation et de la structure de l'application.
                Lorsqu'il est face à un contenu, le designer UX doit déterminer comment susciter l'intérêt de l'utilisateur pour ce contenu.
            </p>

            <PhotoWithCredits imageUrl={getImageSrc(postId, '1.jpg')} text='Photo de UX Indonesia sur Unsplash' url='https://unsplash.com/photos/qC2n6RQU4Vw' />

            <div className={`section-separator`}></div>

            <Cross/><h2 className={`step-title`}>3. UI/UX dans votre vie quotidienne</h2>
            <p>
                De nos jours, nous obtenons toutes nos informations à partir d'écrans, que ce soit un ordinateur de bureau, un ordinateur portable, une tablette ou un téléphone.
                Nous les regardons constamment et apprenons en permanence à interagir avec le monde à travers eux.
                Grâce à cette interaction constante, nous comprenons comment accéder aux informations.
                De plus, il existe certaines conventions auxquelles nous sommes habitués, comme les boutons ou les menus.
                Nous savons qu'il faut faire défiler vers le bas pour obtenir du contenu sur un site web ou glisser d'un côté à l'autre sur un téléphone.
                Nous nous sommes habitués à ces conventions, mais il existe des niveaux de flexibilité dans ces règles qui peuvent façonner l'expérience de l'utilisateur avec un contenu via une interface.
            </p>
            <p>
                Certaines personnes et entreprises exploitent ces conventions à leur avantage. 
                En effet, lorsque vous parcourez le contenu d'une page Internet, vous ne lisez pas les mots un par un, vous survolez.
                Si une entreprise veut vous berner, elle peut en profiter pour vous faire faire des choses que vous ne vouliez pas, comme acheter ou vous inscrire à quelque chose.
                Un exemple courant est lorsque les jeux utilisent une série de boutons verts / bleus pour obliger le joueur à passer par un processus répétitif.
                Lorsque vous perdez, une fenêtre apparaît avec un bouton identique à la douzaine de boutons sur lesquels vous venez de cliquer pour demander de dépenser de l'argent (virtuel ou réel) afin continuer à jouer.
                Je le vis personnellement tous les jours avec Candy Crush:
            </p>
            <div className={`flex-row`}>
                <div>
                    <img src={getImageSrc(postId, '2.jpeg')} className={`width-50`}/>
                </div>
                <div>
                    <img src={getImageSrc(postId, '3.jpeg')} className={`width-50`}/>
                </div>
            </div>
            <p>
                Le bouton le plus évident est placé de manière flagrante au milieu de l'écran avec une couleur rassurante.
                Il y a même un message pour vous avertir que quelque chose de mauvais va se passer si vous ne cliquez pas dessus.
                Il faut d'ailleurs cliquer deux fois sur la croix pour passer à l'étape suivante.
            </p>
            <p>
                Une autre astuce courante consiste à vous inscrire automatiquement à la newsletter lorsque vous créez un compte.
                La case «Je souhaite recevoir la newsletter» est cochée par défaut.
                Cependant, comme les gens sont maintenant habitués à cela, certaines entreprises ont inversé le processus en ajoutant simplement un tout petit mot, que quiconque ne prêtant pas particulièrement attention à ce détail, manquera facilement.
                La phrase devient alors «Je ne veux pas recevoir la newsletter» et la case doit être cochée si vous ne souhaitez pas vous inscrire.
                Voici une capture d'écran de ce qui se passe lorsque vous réservez un billet de train sur le site Oui Sncf:
            </p>
            <img src={getImageSrc(postId, '4-french.png')}/>
            <p>
                Ces méthodes douteuses sont appelées «<i> <b> dark patterns </b> </i>» et il existe <a href='https://www.darkpatterns.org/' target='_blank' rel="noopener"> un site web dédié </a> pour vous aider à les reconnaître.
            </p>
            <p>
                La bonne nouvelle, c'est que tous les concepteurs UI/UX ne sont pas malveillants.
                Au contraire, leur objectif initial est de vous faciliter la vie, donc chaque fois que vous achetez ou réservez quelque chose sur Internet sans vous sentir frustré, ennuyé ou confus, c'est une victoire pour eux.
                Pour ne citer que deux exemples, j'aime personnellement l'interface de l'application Monzo et du site web Doctolib pour leur simplicité et le sentiment rassurant que j'éprouve en les utilisant.
            </p>

            <div className={`section-separator`}></div>

            <p>
                En conclusion, il est important de comprendre les différences entre l'interface utilisateur et l'expérience utilisateur, car ce sont des domaines qui attirent souvent différents types de personnes, qui exercent différents types de métier.
                Cependant, ces deux domaines sont intimement liés.
                Un designer UI/UX est quelqu'un capable d'évoluer dans ces deux champs d'expertise.
                Mais en vérité, un designer d'interface utilisateur a tendance à se concentrer davantage sur l'interface utilisateur avec un peu d'UX et un designer UX a tendance à se concentrer davantage sur l'UX avec un peu d'interface utilisateur.
                Bien qu'il y ait des gens capables de travailler sur ces deux choses en même temps et d'être un designer UI/UX à part entière, ce n'est pas courant.
            </p>

        </PostTemplate>
    );
}

export default French;