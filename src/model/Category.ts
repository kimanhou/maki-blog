export default class Category {
    readonly label : string;
    readonly description : string;

    constructor(label : string, description : string){
        this.label = label;
        this.description = description;
    }

    static getAllCategories = () => {
        return [ Category.ALL, Category.WEBDESIGN, Category.SOCIALMEDIA ];
    }

    static SOCIALMEDIA = new Category('SOCIALMEDIA', 'Social media');
    static WEBDESIGN = new Category('WEBDESIGN', 'Website design');
    static ALL = new Category('ALL', 'All');
}