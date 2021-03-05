import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import PhotoWithCredits from '../PostTemplate/TemplateComponents/PhotoWithCredits/PhotoWithCredits';
import './PostPage.scss';

const French : React.FC<IPostContentProps> = props => {
    const postId = 7;
    const tldr = 
    <>
        <Cross/><span>Quelles sont les différentes catégories de police ? Serif, avec des barres au bout de chaque lettre, et Sans-serif. Les polices de texte pour les gros blocs et les polices d'affichage pour les titres.</span>
        <br></br>
        <Cross/><span>Combien de polices différentes doit-on utiliser sur un site web ? 2 suffisent, même si on peut s'en sortir avec une seule. Pas plus de 3.</span>
        <br></br>
        <Cross/><span>Comment bien choisir une police de texte ? En faisant le test Il1, en cherchant les formes ouvertes et en testant la lisibilité à petite taille.</span>
        <br></br>
        <Cross/><span>Comment bien choisir une police d'affichage ? En déterminant l'atmosphère recherchée et en expérimentant plein de polices différentes jusqu'à trouver celle qui collera le mieux à la peau du projet.</span>
        <br></br>
        <Cross/><span>Quelles sont les polices les plus utilisées ? D'après Google Fonts Analytics, Roboto, Open Sans et Lato. N'hésitez pas à utiliser d'autres polices moins populaires pour vous démarquer.</span>
    </>;

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`seven`}
                    tldr={tldr}
                    relatedPosts={[]}
                    photoCreditName='Florian Klauer' photoCreditUrl='https://unsplash.com/photos/1mTm3gH5_Wk' photoCreditWebsite='Unsplash'>
            <p>
                Les polices sont les vêtements que portent les mots de votre site web. 
                L'utilisateur voit un mot avant de le lire, c'est pourquoi la police est responsable de la première impression donnée au lecteur.
                D'une part, la typographie influe sur le message transmis à l'utilisateur, et d'autre part, elle est un outil puissant pour attirer l'attention et rendre un site mémorable.
            </p>
            <p>
                Avant de se lancer dans le choix d'une police, il est important de comprendre comment les polices peuvent être utilisées, comment bien les choisir et dans quelles circonstances.
                Nous avons rassemblé ici 5 questions essentielles qu'il faut se poser avant de commencer un projet. Bonne lecture !
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>1. Quelles sont les différentes catégories de police ?</span>
            <p>
                Les deux principales catégories de polices sont :<br></br><br></br>
                <span className={`nbsp`}></span><Cross/><b><i>Serif fonts</i></b>&nbsp; ou <b><i>polices avec empattement</i></b>&nbsp; : 
                elles sont appelées ainsi à cause des petites barres décoratives au bout de chaque lettre.
                Il paraît que ces marques proviennent de l'époque où les textes étaient gravés dans la pierre. 
                Des marques étaient préalablement peintes sur la pierre et servaient de repères aux maçons.<br></br>
                Quelques polices très connues appartiennent à ce groupe, comme Times New Roman et Garamond.<br></br>

                <div className={`flex-row mobile-column`}>
                    <img src={getImageSrc(postId, '1.jpg')} className={`width50Mobile100`} />
                    <img src={getImageSrc(postId, '2.jpg')} className={`width50Mobile100`} />
                </div>

                <span className={`nbsp`}></span><Cross/><b><i>Sans-serif fonts</i></b>&nbsp; ou  <b><i>polices sans empattement</i></b>&nbsp; sont tout simplement les polices qui ne présentent pas ces barres décoratives.
                Elles sont généralement plus minimalistes et modernes.<br></br>
                Helvetica est problablement la police sans serif la plus connue. On peut aussi citer la très populaire Roboto.

                <div className={`flex-row mobile-column`}>
                    <img src={getImageSrc(postId, '3.jpg')} className={`width50Mobile100`} />
                    <img src={getImageSrc(postId, '4.jpg')} className={`width50Mobile100`} />
                </div>

                <div className={`flex-row`}>
                    <img src={getImageSrc(postId, '5.png')} className={`width50Mobile100`} />
                </div>

            </p>
            <p>
                Ensuite, on peut différencier les polices selon le type de texte pour lequel elles sont le plus adaptées : <br></br><br></br>
                <span className={`nbsp`}></span><Cross/><b><i>Text fonts</i></b>&nbsp; ou <b><i>polices de texte</i></b>&nbsp; sont utilisées pour le “gros” du texte.
                Elles doivent être très lisibles, mêmes pour des tailles de police petites. Par conséquent, elles sont généralement propres, aérées et utilisent des traits fins.<br></br><br></br>
                
                <span className={`nbsp`}></span><Cross/><b><i>Display fonts</i></b>&nbsp; ou <b><i>polices d'affichage</i></b>&nbsp; ont un look plus “stylé” et original.
                Elles sont utilisées pour les titres et permettent d'ajouter de la personnalité et du peps à une page web.
                Leur rôle est d'attirer l'œil de l'utilisateur et de représenter l'atmosphère du projet.
                La lisibilité peut être légèrement moindre que pour les polices de texte et ce ne sont donc pas des polices faites pour les blocs de texte importants.<br></br>
            </p>

            <div className={`text-align-center`}>
                <a href='https://corsapizza.dk/' target='_blank'>
                    <img src={getImageSrc(postId, '6.jpg')} className={`width50Mobile100`} />
                </a>
            </div>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>2. Combien de polices différentes doit-on utiliser sur un site web ?</span>
            <p>
                Idéalement <b>2</b>. Évidemment, tout dépend du type de site, de sa taille, de son contenu, etc ...
                Certains sites peuvent s'en sortir avec une seule police en jouant sur la taille, la capitalisation, le style (mettre en gras ou en italique), et l'espacement des lettres.
                Cependant, cela demande un gros travail de design qui n'est pas à la portée de tout le monde.
                Il est plus facile d'avoir 2 polices : une pour les titres et une pour le texte.
                Certains recommendent une police Serif pour les titres et une Sans-Serif pour le texte, mais ce n'est pas du tout une obligation, tant que les typographies marchent bien ensemble.
                Plus de 3 polices différentes a souvent un rendu chaotique et désordonné.
            </p>

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>3. Comment bien choisir une police de texte ?</span>
            <p>
                La priorité numéro 1 ici est la <b>lisibilité</b>, surtout à petite taille.
                Pour s'assurer qu'une police est lisible sur tout support, il existe 2 tests faciles :
            </p>
            <span className={`nbsp`}></span><Cross/><span>
                <b>le test Il1</b> : placer côte à côte un i majuscule, un l miniscule et le chiffre 1.
                Si chacun de ces 3 caractères sont facilement identifiables, alors vous tenez une bonne police.
            </span>
            <img src={getImageSrc(postId, '7.png')}  />
            <div className={`p-separator`}></div>
            <span className={`nbsp`}></span><Cross/><span>
                <b>les formes ouvertes</b> : l'ouverture entre le côté et l'extérieur de la lettre doit être la plus grande possible.
                Helvetica, par exemple, présente des formes plus fermées que Roboto (c'est pourquoi, ce fut une très mauvaise idée d'avoir choisi Helvetica pour Mac OS 10.10 Yosemite en 2014).
            </span>
            <img src={getImageSrc(postId, '8.png')}  />

            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>4. Comment bien choisir une police d'affichage ?</span>
            <p>
                Le but ici est de trouver une police qui corresponde au projet. 
                Il ne faut pas hésiter à expérimenter une multitude de polices différentes, et essayer des styles et poids variés.
                Même s'il faut un minimum de lisibilité, ce critère n'est pas le plus prioritaire, surtout que la typographie sera majoritairement utilisée en grande taille.
                Que l'effet recherché soit luxueux, minimaliste, moderne, fou ou joyeux, le plus important est que l'atmosphère du projet soit respectée.
            </p>
            <p>
                Le site <a href='https://ilovetypography.com/' target='_blank'>ilovetypography</a> publie tous les ans leurs polices préférées et imaginent l'univers dans lesquelles elles pourraient évoluer.
                L'article de l'année 2021 se trouve <a href='https://ilovetypography.com/2021/01/12/my-favorite-fonts-of-2020/' target='_blank'>ici</a> et est une bonne source d'inspiration.
            </p>
            <PhotoWithCredits imageUrl={getImageSrc(postId, '9.png')} text='Image by Ilovetypography' url='https://ilovetypography.com/2021/01/12/my-favorite-fonts-of-2020/' />
            
            <div className={`section-separator`}></div>

            <Cross/><span className={`step-title`}>5. Quelles sont les polices les plus populaires ?</span>
            <p>
                <a href='https://fonts.google.com/analytics' target='_blank'><b>La page Analytics de Google Fonts</b></a> répertorie les polices les plus utilisées sur Internet.
                Les grands gagnants sont <b>Roboto</b>, <b>Open Sans</b> et <b>Lato</b>. <br></br>
                Même si ces polices sont très bien faites et intemporelles, elles sont utilisées à outrance, <b>on les voit partout ! </b>
                Roboto est non seulement la police par défaut d'Android, mais également de services Google comme YouTube, Gmail et Google Maps. Impossible de la rater ! 
                Open Sans était la police par défaut de Mozilla jusqu'en 2019 et est toujours la police officielle de Chase Bank.
                Lato est la police de Pokemon Go. 
                Roboto et Open Sans appartiennent toutes deux à Google.<br></br>
                Certes neutres, elles peuvent rendre un site carrément invisible tellement elles sont omniprésentes sur Internet.
                Mon conseil est de chercher des polices moins populaires pour se démarquer et avoir plus de chance d'être mémorable pour les utilisateurs.
            </p>
            <img src={getImageSrc(postId, '10.jpg')}  />
            
        </PostTemplate>
    );
}

export default French;