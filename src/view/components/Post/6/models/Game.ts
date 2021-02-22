import { getBackgroundColorFunction, getSize } from "../Post6Hooks";
import GameCell from "./GameCell";

export enum Drawing {
    FOUR = 'four',
    EIGHT_PIKACHU = 'pikachu',
    SIXTEEN_POKEBALL = 'pokeball',
    SIXTEEN_CHARMANDER = 'charmander',
    SIXTEEN_AMONG_US = 'among-us',
    SIXTEEN_YOSHI = 'yoshi',
    THIRTYTWO_PIKACHU = 'thirty-two-pikachu'
}

export default class Game {
    cells : GameCell[][];
    readonly drawing : Drawing;

    constructor(cells : GameCell[][], drawing : Drawing) {
        this.cells = cells;
        this.drawing = drawing;
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

    getSize = () => {
        return this.cells.length;
    }

    static createGameFromCoordinates = (drawing : Drawing, size : number, getBackgroundColor : (x : number, y : number) => string ) => {
        var game = new Game([], drawing);
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
        return Game.createGameFromCoordinates(drawing, size, backgroundFunction);
    }

    findCellCoordinates = (cell : GameCell) => {
        const tmp = this.cells.map(x => x.findIndex(y => y === cell));
        const x = tmp.findIndex(x => x > -1);
        const y = tmp[x];
        return {x, y};
    }

    switchCells = (originCell : GameCell, destinationCell : GameCell) => {
        const originCellCoordinates = this.findCellCoordinates(originCell);
        const destinationCellCoordinates = this.findCellCoordinates(destinationCell);
        this.cells[destinationCellCoordinates.x][destinationCellCoordinates.y] = originCell;
        this.cells[originCellCoordinates.x][originCellCoordinates.y] = destinationCell;
        return new Game(this.cells, this.drawing);
    }

    randomise = () => {
        const size = this.cells.length;
        for(let i = 0; i < size * size; i++) {
            const y = Math.floor(i / size);
            const x = i % size;
            const rndIdx = Math.floor(Math.random() * size * size);
            const rndY = Math.floor(rndIdx / size);
            const rndX = rndIdx % size;
            const tmp = this.cells[rndY][rndX];
            this.cells[rndY][rndX] = this.cells[y][x];
            this.cells[y][x] = tmp;
        }
        return new Game(this.cells, this.drawing);
    }

}