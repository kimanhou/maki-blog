import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const tldr = 
    <>
        <Cross/><span>Rester simple: ne pas avoir trop de couleurs différentes. Une couleur dans une teinte foncée et une teinte claire suffisent parfois.</span>
        <br></br>
        <Cross/><span>Un site sympa pour trouver l'inspiration et créer des palettes de couleurs est <a href='https://coolors.co/' target='_blank'><b>coolors.co</b></a>.</span>
        <br></br>
        <Cross/><span>À la place d'un texte noir sur fond blanc, expérimenter avec des “faux” noirs et “faux” blancs.</span>
        <br></br>
        <Cross/><span>Certaines couleurs vont bien ensemble, d'autres non. Placer les couleurs choisies côte à côte permet de mieux visualiser le rendu final. Une couleur ne rendra pas pareil selon la couleur à côté de laquelle elle est placée.</span>
        <br></br>
        <Cross /><span>Les couleurs ont des significations. Certaines sont universelles, d'autres culturelles.</span>
        <br></br>
        <Cross/><span>Le contenu doit être lisible: utiliser l'inspecteur pour vérifier le rapport de contraste. Pour une bonne visibilité, celui-ci doit être au-dessus de 5.</span>
        <br></br>
        <Cross/><span>Intégrer l'image de marque dans la palette de couleurs du site. Utiliser la photographie et les illustrations pour la consolider.</span>
    </>;

    const getImageSrc = (pictureName : string) => {
        return require(`./images/${pictureName}`);
    }

    return (
        <PostTemplate postId={2}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`two`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>Les couleurs ont un impact immense sur l'attractivité d'un site internet. 
                Elles peuvent même être, dans certains cas, plus importantes que le contenu car c'est la première chose que l'oeil capte lorsque l'utilisateur arrive sur une page. 
                Une palette de couleurs cohérente et bien travaillée rendra le site plus attractif et notable. 
                Les utilisateurs sont plus enclins à lire quelque chose de bien pensé, alors que personne n'a envie de se lancer dans la lecture d'un texte qui a l'air ennuyeux.</p>

            <p>Il n'y a pas de palette de couleurs parfaite qui ira à tous les sites internet. 
                Cependant, voici quelques trucs et astuces que nous avons appris sur le tas et qui peuvent être appliqués à tous les sites. 
                En espérant qu'ils vous aideront dans la conception de votre site, bonne lecture !</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. Rester simple: ne pas avoir trop de couleurs différentes</span>
            <p>Que ce soit un brin de couleurs vives ou des tons naturels ou des teintes sombres, il est recommandé de limiter le nombre de couleurs différentes. 
                Une palette de couleurs compliquée embrouille l'oeil.
                Comme en mode, la règle <b>“pas plus de trois couleurs”</b> peut s'appliquer. 
                Lorsqu'il y a très peu de couleurs à l'écran, l'ensemble apparait unifié et les utilisateurs n'ont pas besoin de réfléchir pour comprendre ce qu'il se passe sur la page.
                En général, une couleur dans une teinte foncée et la même dans une teinte claire suffisent, en plus de la couleur de fond.
            </p>
            <p>Ci-dessous, la palette de couleurs du blog que vous êtes en train de lire : </p>
            <img src={getImageSrc('1.jpg')}/>
            <p>Les couleurs sont : jaune et sa teinte claire associée, un vert gris qui rappelle la couleur des sapins et sa teinte claire associée et un “faux” blanc en fond.</p>

            <p>Cette palette de couleurs a été créée sur <a href='https://coolors.co/' target='_blank'><b>Coolors</b></a>, un site sympa et bourré d'inspirations, qui permet d'expérimenter facilement avec les couleurs. 
                Vous pouvez trouver ma palette de couleurs <a href='https://coolors.co/edc041-f8e6b4-2f4f4f-508686-feffff' target='_blank'>ici</a>.</p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>Expérimenter avec des “faux” noirs et “faux” blancs</span>
            <p>Un texte noir sur fond blanc peut paraitre un peu rigide et provoquer une fatigue oculaire de l'utilisateur. 
                Expérimentez avec un “faux” noir pour le texte et un “faux” blanc pour le fond pour un effet plus doux, et ainsi améliorer l'expérience de lecture. 
                N'hésitez pas à sortir des gris “neutres”, pour lesquels les trois valeurs du rgb sont identiques.
                Gardez le vrai noir et le vrai blanc pour faire ressortir certains éléments, comme par exemple les titres.</p>
            <p>Exemple: sur le <a href='https://www.ideo.com/blog/learn-the-basics-of-code-with-a-needle-and-thread' target='_blank'>blog Ideo</a>, le titre de chaque article apparait en blanc sur fond noir, il saute aux yeux. À l'inverse, le corps de l'article est écrit en “faux” noir sur un fond faussement blanc.</p>
            <img src={getImageSrc('2.png')}/>
            <p>Ci-dessous, les couleurs du titre (première ligne), celle du corps de l'article (deuxième ligne) et des gris neutres proches des teintes utilisées dans le corps de l'article (troisième ligne). 
                On voit clairement ici que le corps de l'article n'est pas un gris neutre mais a une teinte bleutée qui rend la page plus vivante.</p>
            <img src={getImageSrc('3-french.jpg')}/>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Certaines couleurs vont bien ensemble, d'autres non</span>
            <p>De la même façon qu'un vernis à ongle ne rend pas pareil sur deux personnes avec une teinte de peau différente, une couleur sur un site peut sembler totalement différente que l'exacte même teinte sur un autre site à cause de leur environnement. 
                Si vous choisissez individuellement les couleurs de votre site, nous vous conseillons de les placer les unes à côté des autres pour observer le ressenti qu'elles dégagent ensemble et ainsi mieux visualiser le résultat final. 
                N'hésitez pas à faire des ajustements si nécessaires.</p>
            <p>Si vous voulez plusieurs couleurs différentes (pour différents goûts dans le cas d'une marque de boisson par exemple), utilisez la même saturation partout pour un effet consistent. Google le fait brillamment.</p>
            <img src={getImageSrc('4.jpg')}/>
            <p>Si vous voulez n'utiliser qu'une seule couleur, variez les saturations pour donner du relief.</p>
            <img src={getImageSrc('5.jpg')}/>

            <div className={`section-separator`}></div>

            <Cross /><span className={`step-title`}>4. Les couleurs ont des significations. Certaines sont universelles, d'autres culturelles</span>
            <p>Les associations de couleurs sont très puissantes. Certaines sont universelles, comme le vert pour les plantes et la nature. 
                D'autres sont culturelles : dans certaines parties du monde, le blanc est la couleur du deuil et est souvent portée aux funérailles, alors qu'ailleurs la couleur traditionnelle associée à la mort est le noir.</p>
            <p>Il n'est pas nécessaire d'être expert en psychologie des couleurs.
                Cependant, il est important que votre palette de couleurs correspondent à votre cible. 
                En effet, votre audience est déterminante dans le choix des couleurs. 
                Par exemple, le rouge et noir est une association de couleurs très masculine, qui ne conviendra donc pas dans le cas d'une marque de maquillage. 
                De même, si l'effet recheché est une image de luxe, haut de gamme, alors le violet est la couleur par excellence car on l'attache généralement à la royauté, la bonne qualité et l'intrigue.
                Enfin, le bleu est une couleur douce et rassurante, idéale pour des sites liés à la santé ou à la finance.</p>


            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>5. Le contenu doit être lisible</span>
            <p>Dans un navigateur, ouvrez l'inspecteur, sélectionnez l'élément à analyser et repérez sa couleur dans la section “Style”.</p>
            <p>Cliquez sur le carré coloré à côté du code HEX ou rgb. Une pop-up contenant des informations sur la couleur s'ouvre. C'est dans cette dernière que vous trouverez le rapport de contraste.</p>
            <p>Pour une bonne lisibilité, <b>le rapport de contraste doit être supérieur à 5</b>. 
                Cela ne signifique pas que tout sur votre site doit absolument respecter cette limite. En revanche, c'est un bon indicateur. 
                Par exemple, les liens sur ce blog apparaissent en jaune quand la souris passe dessus.  
                Le rapport de contraste est abominable (1,72), cependant j'ai considéré quue c'était acceptable car il ne s'agit que du cas où l'utilisateur pose sa souris sur un lien cliquable. 
                Par ailleurs, le corps de l'article a un rapport de contraste de 10,95,  ce qui est excellent.</p>
            <img src={getImageSrc('6.jpg')}/>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>6. Intégrer l'image de marque dans la palette de couleurs du site. Utiliser la photographie et les illustrations pour la consolider</span>
            <p>Il se peut que votre marque soit déjà associée à certaines couleurs. 
                Si vous avez déjà un logo, il peut servir de base pour votre palette de couleurs. 
                Travailler avec une base existante est toujours plus facile.</p>
            <p>Pour un rendu consistant, les photos et illustrations doivent également respecter la palette de couleurs choisie.
                Elles aideront ainsi à unifier la page, comme le fait T-mobile sur son site.</p>
            <img src={getImageSrc('7.jpg')}/>

        </PostTemplate>
    );
}

export default French;