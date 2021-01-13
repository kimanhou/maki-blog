import English1 from "../view/components/Article/1/English";
import French1 from "../view/components/Article/1/French";
import English2 from "../view/components/Article/2/English";
import French2 from "../view/components/Article/2/French";
import English3 from "../view/components/Article/3/English";
import French3 from "../view/components/Article/3/French";
import Category from "./Category";
import LanguageVersion from "./LanguageVersion";

export interface IArticleContentProps{
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
}

export default class Article {
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

    static getAllSortedArticles = () => {
        return Article.getAllArticles().sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static getAllArticles = () => {
        return [ Article.THREE, Article.TWO, Article.ONE ];
    }

    static getLatestArticles = (numberOfArticles : number) => {
        const all = Article.getAllSortedArticles();
        return all.slice(0, numberOfArticles);
    }

    getDateEN = () => {
        var mm = months[this.date.getMonth()];
        var dd = this.date.getDate();
        
        return [(dd>9 ? '' : '0') + dd, mm, this.date.getFullYear()].join(' ');
    }

    getCategories = () => {
        return this.categories.map(t => t.description).join(', ');
    }
    

    static ONE = new Article(1, new Date('2021-01-12'), new LanguageVersion(English1, 'How to add an Instagram post to your website'), new LanguageVersion(French1, 'Ajouter un post Instagram sur son site web'), [ Category.SOCIALMEDIA, Category.WEBDESIGN ]);
    static TWO = new Article(2, new Date('2021-01-31'), new LanguageVersion(English2, 'Post #2'), new LanguageVersion(French2, 'Article #2'), [ Category.SOCIALMEDIA ]);
    static THREE = new Article(3, new Date('2021-02-16'), new LanguageVersion(English3, 'Post #3'), new LanguageVersion(French3, 'Article #2'), [ Category.WEBDESIGN ]);
}

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]