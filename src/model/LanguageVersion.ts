import { IPostContentProps } from "./Post";

export default class LanguageVersion {
    readonly content : React.FC<IPostContentProps>;
    readonly title : string;

    constructor(content : React.FC<IPostContentProps>, title : string) {
        this.content = content;
        this.title = title;
    }

}