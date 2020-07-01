export class GameOfLife {

    private readonly cells : boolean[][]

    constructor(cells: boolean[][]) {
        this.cells = cells
    }

    static of(columns: number, rows: number, aliveCells: { x: number; y: number }[]) {
        let cells: boolean[][] = []
        for(let i=0; i<columns; i++){
            cells.push([])
            for (let j = 0; j<rows; j++) {
                if (aliveCells.some(cell => cell.x === i && cell.y === j)) {
                    cells[i].push(true)
                } else {
                    cells[i].push(false)
                }
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
