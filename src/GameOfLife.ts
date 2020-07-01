export class GameOfLife {

    private cells: boolean[][]


    constructor(initialCells: boolean[][]) {
        this.cells = initialCells
    }

    nextStep(): boolean[][] {
        const lines = this.cells.length
        const columns = this.cells[0].length
        const newGOLState = []
        for (let l = 0; l < lines; l++) {
            newGOLState.push([])
            for (let c = 0; c < columns; c++) {
                newGOLState[l].push(this.setCellDependOfNeighbor(l, c))
            }
        }
        this.cells = newGOLState
        return newGOLState

    }

    allCells(): boolean[][] {
        return this.cells
    }

    private setCellDependOfNeighbor(l: number, c:number): boolean{
        const numberOfAliveNeighbor = this.numberOfAliveNeighborOfCell(l, c)
        if (numberOfAliveNeighbor <= 1 ) {
            return false
        }
        if (numberOfAliveNeighbor === 3 ) {
            return true
        }

        return this.cells[l][c]
    }

    private numberOfAliveNeighborOfCell(l: number, c: number): number {
        return this.neighborOfCell(l, c).filter(cell => cell === true).length
    }

    private neighborOfCell(l: number, c: number): boolean[] {
        const lines = this.cells.length
        const columns = this.cells[0].length
        if (l === 0 && c === 0) {
            return [this.cells[0][1], this.cells[1][0], this.cells[1][1]]
        }
        if (l === 0 && c === columns - 1) {
            return [this.cells[0][c - 1], this.cells[1][c], this.cells[1][c - 1]]
        }
        if (l === lines - 1 && c === 0) {
            return [this.cells[l - 1][0], this.cells[l][1], this.cells[l - 1][1]]
        }
        if (l === lines - 1 && c === columns - 1) {
            return [this.cells[l - 1][c], this.cells[l][c - 1], this.cells[l - 1][c - 1]]
        }
        if (l === 0) {
            return [this.cells[0][c - 1], this.cells[0][c + 1], this.cells[1][c - 1], this.cells[1][c], this.cells[1][c + 1],]
        }
        if (l === lines - 1) {
            return [this.cells[l][c - 1], this.cells[l][c + 1], this.cells[l - 1][c - 1], this.cells[l - 1][c], this.cells[l - 1][c + 1],]
        }
        if (c === 0) {
            return [this.cells[l - 1][0], this.cells[l + 1][0], this.cells[l - 1][1], this.cells[l][1], this.cells[l + 1][1],]
        }
        if (c === columns - 1) {
            return [this.cells[l - 1][c], this.cells[l + 1][c], this.cells[l - 1][c - 1], this.cells[l][c - 1], this.cells[l + 1][c - 1],]
        }
        return [this.cells[l - 1][c - 1], this.cells[l - 1][c], this.cells[l - 1][c + 1], this.cells[l][c - 1], this.cells[l][c + 1], this.cells[l + 1][c - 1], this.cells[l + 1][c], this.cells[l + 1][c + 1]]
    }
}
