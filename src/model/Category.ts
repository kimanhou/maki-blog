export default class Category {
    readonly label : string;
    readonly description : string;

    constructor(label : string, description : string){
        this.label = label;
        this.description = description;
    }

    static SOCIALMEDIA = new Category('SOCIALMEDIA', 'Social media');
    static WEBDESIGN = new Category('WEBDESIGN', 'Website design');
}