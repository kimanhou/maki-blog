export default class Compliment {
    readonly title : string;
    readonly text : React.ReactNode;
    readonly background : string;

    constructor(title : string, text : React.ReactNode, background : string) {
        this.title = title;
        this.text = text;
        this.background = background;
    }
}