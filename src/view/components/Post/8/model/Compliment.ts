export default class Compliment {
    readonly title : string;
    readonly text : React.ReactNode;

    constructor(title : string, text : React.ReactNode) {
        this.title = title;
        this.text = text;
    }
}