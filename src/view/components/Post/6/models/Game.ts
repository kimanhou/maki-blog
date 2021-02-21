import { Drawing } from "../French";
import { getBackgroundColorFunction, getSize } from "../Post6Hooks";
import GameCell from "./GameCell";

export default class Game {
    cells : GameCell[][];

    constructor(cells : GameCell[][]) {
        this.cells = cells;
    }

    equals = (game : Game) => {
        if (this.cells.length != game.cells.length) {
            return false;
        }
        for (let i = 0; i < this.cells.length; i ++) {
            if (this.cells[i].length != game.cells[i].length) {
                return false;
            }
            for (let j = 0; j < this.cells[i].length; j ++) {
                if (!this.cells[i][j].equals(game.cells[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }

    static createGameFromCoordinates = (size : number, getBackgroundColor : (x : number, y : number) => string ) => {
        var game = new Game([]);
        for (let i = 0; i < size; i ++) {
            var row : GameCell[] = [];
            for (let j = 0; j < size; j ++) {
                var cell = new GameCell(getBackgroundColor(i, j));
                row.push(cell);
            }
            game.cells.push(row);
        }
        return game;
    }

    static createGameFromDrawing = (drawing : Drawing) => {
        const size = getSize(drawing);
        const backgroundFunction = getBackgroundColorFunction(drawing);
        return Game.createGameFromCoordinates(size, backgroundFunction);
    }

}