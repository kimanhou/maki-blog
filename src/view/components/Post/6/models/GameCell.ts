export default class GameCell {
    backgroundColor : string;

    constructor(backgroundColor : string) {
        this.backgroundColor = backgroundColor;
    }

    equals = (cell : GameCell) => {
        return cell.backgroundColor == this.backgroundColor;
    }

    static swapBackground = (cell1 : GameCell, cell2 : GameCell) => {
        const temp = cell1.backgroundColor;
        cell1.backgroundColor = cell2.backgroundColor;
        cell2.backgroundColor = temp;
    }
}