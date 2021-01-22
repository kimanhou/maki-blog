import Local from "../view/components/LocalisationContext/Local";
import English1 from "../view/components/Post/1/English";
import French1 from "../view/components/Post/1/French";
import English2 from "../view/components/Post/2/English";
import French2 from "../view/components/Post/2/French";
import English3 from "../view/components/Post/3/English";
import French3 from "../view/components/Post/3/French";
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

    constructor(id : number, date : Date, english : LanguageVersion, french : LanguageVersion, categories : Category[]) {
        this.id = id;
        this.date = date;
        this.english = english;
        this.french = french;
        this.categories = categories
    }

    static getAllSortedPosts = () => {
        return Post.getAllPosts().sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static getAllPosts = () => {
        return [ 
            Post.THREE, Post.TWO, Post.ONE,
         ];
    }

    static getLatestposts = (numberOfposts : number) => {
        const all = Post.getAllSortedPosts();
        return all.slice(0, numberOfposts);
    }

    static getPostById = (id : number) => {
        const posts = Post.getAllPosts();
        return posts.find(t => t.id == id);
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
            break;
            case Local.EN:
                return this.categories.map(t => t.descriptionEn).join(', ');
            break;
        }
    }

    getTitle = (localisation : Local) => {
        switch (localisation) {
            case Local.FR:
                return this.french.title;
            break;
            case Local.EN:
                return this.english.title;
            break;
        }
    }

    static ONE = new Post(1, new Date('2021-01-12'), new LanguageVersion(English1, 'How to add an Instagram post to your website'), new LanguageVersion(French1, 'Ajouter un post Instagram sur son site web'), [ Category.SOCIALMEDIA, Category.WEBDESIGN ]);
    static TWO = new Post(2, new Date('2021-01-31'), new LanguageVersion(English2, 'Post #2'), new LanguageVersion(French2, 'Post #2 en français'), [ Category.SOCIALMEDIA ]);
    static THREE = new Post(3, new Date('2021-02-16'), new LanguageVersion(English3, 'Post #3'), new LanguageVersion(French3, 'Post #3 en français'), [ Category.WEBDESIGN ]);
}

const monthsFr = [ 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc' ]
const monthsEn = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]