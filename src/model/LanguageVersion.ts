import { IArticleContentProps } from "./Article";

export default class LanguageVersion {
    readonly content : React.FC<IArticleContentProps>;
    readonly title : string;

    constructor(content : React.FC<IArticleContentProps>, title : string) {
        this.content = content;
        this.title = title;
    }

}