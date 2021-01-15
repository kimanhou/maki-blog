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

    equals = (category : Category) => {
        return this.label == category.label;
    }

    static deserialize = (json : any) => {
        if(typeof json != 'string'){
            throw new Error("Expected type string when deserializing Category but got something else.");
        }
        for(let key in Category){
            if(key.toLowerCase() == json.toLowerCase()){
                return ((Category as any)[key]) as Category;
            }
        }
        throw new Error(`Did not find Category with label ${json}`);
    }

    toJSON = () => {
        return this.label.toLowerCase();
    }

    static toQueryParam = (categories : Category[]) => {
        return `categories=${JSON.stringify(categories)}`;
    }

    isIncluded = (categories : Category[]) => {
        if (categories.filter(t => t.equals(this)).length > 0) {
            return true;
        }
        return false;
    }

    static intersects = (categories1 : Category[], categories2 : Category[]) => {
        for (let t of categories1) {
            if (t.isIncluded(categories2)) {
                return true;
            }
        }
        return false;
    }

    static SOCIALMEDIA = new Category('SOCIALMEDIA', 'Social media');
    static WEBDESIGN = new Category('WEBDESIGN', 'Website design');
    static ALL = new Category('ALL', 'All');
}