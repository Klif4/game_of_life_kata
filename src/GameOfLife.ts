export class GameOfLife {

    private cells: boolean[][]


    constructor(cells: boolean[][]) {
        this.cells = cells
    }

    nextStep(): boolean[][] {
        const actualCells = this.cells
        const lines = this.cells.length
        const columns = this.cells[0].length
        const newState = []
        for (let l = 0; l < lines; l++) {
            newState.push([])
            for (let c = 0; c < columns; c++) {
                newState[l].push(this.setCellDependOfNeighbor(actualCells, l, c))
            }
        }
        return newState

    }


    allCells(): boolean[][] {
        return this.cells
    }

    private setCellDependOfNeighbor(cells: boolean[][], l: number, c:number): boolean{
        const numberOfAliveNeighbor = this.numberOfAliveNeighborOfCell(cells, l, c)
        if (numberOfAliveNeighbor <= 1 ) {
            return false
        }
        if (numberOfAliveNeighbor === 3 ) {
            return true
        }

        return this.cells[l][c]
    }

    private numberOfAliveNeighborOfCell(cells: boolean[][], l: number, c: number): number {
        return this.neighborOfCell(cells, l, c).filter(cell => cell === true).length
    }

    private neighborOfCell(cells: boolean[][], l: number, c: number): boolean[] {
        const lines = cells.length
        const columns = cells[0].length
        if (l === 0 && c === 0) {
            return [cells[0][1], cells[1][0], cells[1][1]]
        }
        if (l === 0 && c === columns - 1) {
            return [cells[0][c - 1], cells[1][c], cells[1][c - 1]]
        }
        if (l === lines - 1 && c === 0) {
            return [cells[l - 1][0], cells[l][1], cells[l - 1][1]]
        }
        if (l === lines - 1 && c === columns - 1) {
            return [cells[l - 1][c], cells[l][c - 1], cells[l - 1][c - 1]]
        }
        if (l === 0) {
            return [cells[0][c - 1], cells[0][c + 1], cells[1][c - 1], cells[1][c], cells[1][c + 1],]
        }
        if (l === lines - 1) {
            return [cells[l][c - 1], cells[l][c + 1], cells[l - 1][c - 1], cells[l - 1][c], cells[l - 1][c + 1],]
        }
        if (c === 0) {
            return [cells[l - 1][0], cells[l + 1][0], cells[l - 1][1], cells[l][1], cells[l + 1][1],]
        }
        if (c === columns - 1) {
            return [cells[l - 1][c], cells[l + 1][c], cells[l - 1][c - 1], cells[l][c - 1], cells[l + 1][c - 1],]
        }
        return [cells[l - 1][c - 1], cells[l - 1][c], cells[l - 1][c + 1], cells[l][c - 1], cells[l][c + 1], cells[l + 1][c - 1], cells[l + 1][c], cells[l + 1][c + 1]]
    }
}
