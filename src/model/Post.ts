import Local from "../view/components/LocalisationContext/Local";
import English1 from "../view/components/Post/1/English";
import French1 from "../view/components/Post/1/French";
import English2 from "../view/components/Post/2/English";
import French2 from "../view/components/Post/2/French";
import English3 from "../view/components/Post/3/English";
import French3 from "../view/components/Post/3/French";
import English4 from "../view/components/Post/4/English";
import French4 from "../view/components/Post/4/French";
import Category from "./Category";
import LanguageVersion from "./LanguageVersion";

export interface IPostContentProps{
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
}

export default class Post {
    readonly id : number;
    readonly date : Date;
    readonly english : LanguageVersion;
    readonly french : LanguageVersion;
    readonly categories : Category[];
    readonly isHeroVideo ?: boolean;

    constructor(id : number, date : Date, english : LanguageVersion, french : LanguageVersion, categories : Category[], isHeroVideo ?: boolean) {
        this.id = id;
        this.date = date;
        this.english = english;
        this.french = french;
        this.categories = categories;
        this.isHeroVideo = isHeroVideo;
    }

    static getAllSortedPosts = () => {
        return Post.getAllPosts().sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static getAllPosts = () => {
        return [ 
            // Post.FOUR, 
            Post.THREE, Post.TWO, Post.ONE,
         ];
    }

    static getLatestposts = (numberOfposts : number) => {
        const all = Post.getAllSortedPosts();
        return all.slice(0, numberOfposts);
    }

    static getPostById = (id : number) => {
        const posts = Post.getAllPosts();
        const post = posts.find(t => t.id == id);
        if (post != undefined) {
            return post;
        }
        throw new Error(`GetPostById error : Post with id ${id} not found.`); 
    }

    getDateFormat = (localisation : Local) => {
        var mm = '';
        switch (localisation) {
            case Local.FR:
                mm = monthsFr[this.date.getMonth()];
            break;
            case Local.EN:
                mm = monthsEn[this.date.getMonth()];
            break;
        }
        var dd = this.date.getDate();
        
        return [(dd>9 ? '' : '0') + dd, mm, this.date.getFullYear()].join(' ');
    }

    getCategories = (localisation : Local) => {
        switch (localisation) {
            case Local.FR:
                return this.categories.map(t => t.descriptionFr).join(', ');
            case Local.EN:
                return this.categories.map(t => t.descriptionEn).join(', ');
        }
    }

    getTitle = (localisation : Local) => {
        switch (localisation) {
            case Local.FR:
                return this.french.title;
            case Local.EN:
                return this.english.title;
        }
    }

    getLink = () => {
        return `/posts/${this.id}`;
    }

    static getNextPost = (id : number) => {
        const allPosts = Post.getAllSortedPosts();
        const myIndex = allPosts.findIndex(t => t.id == id);
        if (myIndex == 0) {
            return undefined;
        }
        return allPosts[myIndex - 1];
    }

    static getPreviousPost = (id : number) => {
        const allPosts = Post.getAllSortedPosts();
        const myIndex = allPosts.findIndex(t => t.id == id);
        if (myIndex == allPosts.length - 1) {
            return undefined;
        }
        return allPosts[myIndex + 1];
    }

    static ONE = new Post(1, new Date('2021-01-22'), new LanguageVersion(English1, 'How to add an Instagram post to your website'), new LanguageVersion(French1, 'Ajouter un post Instagram sur son site web'), [ Category.SOCIALMEDIA ]);
    static TWO = new Post(2, new Date('2021-01-29'), new LanguageVersion(English2, '6 tips and tricks about color schemes'), new LanguageVersion(French2, '6 trucs et astuces sur les palettes de couleurs'), [ Category.UI ]);
    static THREE = new Post(3, new Date('2021-02-05'), new LanguageVersion(English3, 'DIY: 3 ways to animate the color of a text on hover'), new LanguageVersion(French3, "DIY : 3 manières d'animer la couleur d'un texte quand la souris passe dessus"), [ Category.DIY ], true);
    static FOUR = new Post(4, new Date('2021-02-12'), new LanguageVersion(English4, 'UI/UX'), new LanguageVersion(French4, "UI/UX"), [ Category.UI ], true);
}

const monthsFr = [ 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc' ]
const monthsEn = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]