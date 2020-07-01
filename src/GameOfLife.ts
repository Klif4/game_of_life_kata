export class GameOfLife {

    private cells: boolean[][]

    constructor(cells: boolean[][]) {
        this.cells = cells
    }

    nextStep(): void {
        const actualCells = this.cells
        const lines = actualCells.length
        const columns = actualCells[0].length

        for (let l = 0; l < lines; l++) {
            for (let c = 0; c < columns; c++) {
                console.log(l, c)
                let cellNeighbor
                //haut gauche
                if(l===0 && c===0){
                    cellNeighbor = [actualCells[0][1], actualCells[1][0], actualCells[1][1]]
                }
                // haut droite
                else if ( l === 0 && c === columns -1) {
                     cellNeighbor = [actualCells[0][c-1], actualCells[1][c], actualCells[1][c-1]]
                }
                // bas gauche
                else if ( l === lines-1 && c === 0) {
                     cellNeighbor = [actualCells[l-1][0], actualCells[l][1], actualCells[l-1][1]]
                }
                // bas droite
                else if ( l === lines-1 && c === columns-1) {
                     cellNeighbor = [actualCells[l-1][c], actualCells[l][c-1], actualCells[l-1][c-1]]
                }
                //haut milieu
                else if ( l === 0) {
                     cellNeighbor = [actualCells[0][c-1], actualCells[0][c+1], actualCells[1][c-1], actualCells[1][c], actualCells[1][c+1],]
                }
                //bas milier
                else if ( l === lines-1) {
                     cellNeighbor = [actualCells[l][c-1], actualCells[l][c+1], actualCells[l-1][c-1], actualCells[l-1][c], actualCells[l-1][c+1],]
                }
                // milieu gauche
                else if ( c === 0) {
                    cellNeighbor = [actualCells[l-1][0], actualCells[l+1][0], actualCells[l-1][1], actualCells[l][1], actualCells[l+1][1],]
                }
                // milieu droit
                else if ( c === columns -1) {
                    cellNeighbor = [actualCells[l-1][c], actualCells[l+1][c], actualCells[l-1][c-1], actualCells[l][c-1], actualCells[l+1][c-1],]
                }
                // milieu milieu
                else {
                    cellNeighbor = [actualCells[l-1][c-1], actualCells[l-1][c], actualCells[l-1][c+1], actualCells[l][c-1], actualCells[l][c+1], actualCells[l+1][c-1], actualCells[l+1][c], actualCells[l+1][c+1]]
                }

                const numberOfAliveNeighbor = cellNeighbor.filter(cell => cell === true).length
                if(numberOfAliveNeighbor === 0) {
                    this.cells[l][c] = false
                }

            }
        }
    }

    allCells(): boolean[][] {
        return this.cells
    }


}
