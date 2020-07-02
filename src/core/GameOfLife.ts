export class GameOfLife {

    private cells: boolean[][]


    constructor(initialCells: boolean[][]) {
        this.cells = initialCells
    }

    nextStep(): boolean[][] {
        const linesOfGrid = this.cells.length
        const columnsOfGrid = this.cells[0].length
        const newGOLState :boolean[][] = []
        for (let line = 0; line < linesOfGrid; line++) {
            newGOLState.push([])
            for (let column = 0; column < columnsOfGrid; column++) {
                newGOLState[line].push(this.setCellDependOfNeighbors(line, column))
            }
        }
        this.cells = newGOLState
        return newGOLState

    }

    private setCellDependOfNeighbors(line: number, column:number): boolean {
        const numberOfAliveNeighbors = this.numberOfAliveNeighborsOfCell(line, column)
        if (numberOfAliveNeighbors <= 1 ) {
            return false
        }
        if (numberOfAliveNeighbors === 3 ) {
            return true
        }
        if (numberOfAliveNeighbors > 3 ) {
            return false
        }

        return this.cells[line][column]
    }

    private numberOfAliveNeighborsOfCell(line: number, column: number): number {
        return this.neighborOfCell(line, column).filter(cell => cell === true).length
    }

    private neighborOfCell(line: number, column: number): boolean[] {
        const linesOfGrid = this.cells.length
        const columnsOfGrid = this.cells[0].length
        if (line === 0 && column === 0) {
            return [this.cells[0][1], this.cells[1][0], this.cells[1][1]]
        }
        if (line === 0 && column === columnsOfGrid - 1) {
            return [this.cells[0][column - 1], this.cells[1][column], this.cells[1][column - 1]]
        }
        if (line === linesOfGrid - 1 && column === 0) {
            return [this.cells[line - 1][0], this.cells[line][1], this.cells[line - 1][1]]
        }
        if (line === linesOfGrid - 1 && column === columnsOfGrid - 1) {
            return [this.cells[line - 1][column], this.cells[line][column - 1], this.cells[line - 1][column - 1]]
        }
        if (line === 0) {
            return [this.cells[0][column - 1], this.cells[0][column + 1], this.cells[1][column - 1], this.cells[1][column], this.cells[1][column + 1],]
        }
        if (line === linesOfGrid - 1) {
            return [this.cells[line][column - 1], this.cells[line][column + 1], this.cells[line - 1][column - 1], this.cells[line - 1][column], this.cells[line - 1][column + 1],]
        }
        if (column === 0) {
            return [this.cells[line - 1][0], this.cells[line + 1][0], this.cells[line - 1][1], this.cells[line][1], this.cells[line + 1][1],]
        }
        if (column === columnsOfGrid - 1) {
            return [this.cells[line - 1][column], this.cells[line + 1][column], this.cells[line - 1][column - 1], this.cells[line][column - 1], this.cells[line + 1][column - 1],]
        }
        return [this.cells[line - 1][column - 1], this.cells[line - 1][column], this.cells[line - 1][column + 1], this.cells[line][column - 1], this.cells[line][column + 1], this.cells[line + 1][column - 1], this.cells[line + 1][column], this.cells[line + 1][column + 1]]
    }
}
