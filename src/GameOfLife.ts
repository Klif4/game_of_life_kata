import {Cell} from "./Cell";

export class GameOfLife {

    private cells : Cell[] = []

    constructor(cells: Cell[]) {
        this.cells = cells
    }

    static of(columns: number, rows: number) {
        let cells: Cell[] = []
        for(let i=0; i<columns; i++){
            for (let j = 0; j<rows; j++) {
                cells.push(new Cell(i, j))
            }
        }
        return new GameOfLife(cells)
    }

    cell(xPos: number, yPos: number): Cell {
        return this.cells.filter(cell => cell.is(xPos, yPos))[0]
    }

    nextStep(): void {

    }

    allCells(): Cell[] {
        return this.cells
    }
}
