export class GameOfLife {

    private readonly cells : boolean[][]

    constructor(cells: boolean[][]) {
        this.cells = cells
    }

    static of(columns: number, rows: number) {
        let cells: boolean[][] = [[]]
        for(let i=0; i<columns; i++){
            cells.push([])
            for (let j = 0; j<rows; j++) {
                cells[i].push(false)
            }
        }
        return new GameOfLife(cells)
    }

    cell(xPos: number, yPos: number): boolean {
        return this.cells[xPos][yPos]
    }

    nextStep(): void {

    }
}
