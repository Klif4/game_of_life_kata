export class Cell {
    private readonly xPos: number
    private readonly yPos: number
    private readonly alive: boolean

    constructor(x: number, y: number) {
        this.xPos = x
        this.yPos = y
        this.alive = false
    }

    isAlive(): boolean {
        return this.alive;
    }

    is(xPos: number, yPos: number): boolean {
        return (this.xPos === xPos && this.yPos === yPos)
    }
}