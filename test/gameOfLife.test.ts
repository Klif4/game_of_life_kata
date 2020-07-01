import {GameOfLife} from "../src/GameOfLife";

describe('rename me', () => {
    it('all cells should stay dead when all cells are dead', () => {
        const initial = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ]
        const gameOfLife = new GameOfLife(initial)
        const expectedResult = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ]
        gameOfLife.nextStep()
        expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
    })
    describe('une cellule vivante, 0 dans le voisinage', () => {
        describe('gameOfLife 3x3', () => {
            it('in 3x3 gameOfLife, cellule milieu milieu', () => {
                const initial = [
                    [false, false, false],
                    [false, true, false],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut gauche', () => {
                const initial = [
                    [true, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut milieu', () => {
                const initial = [
                    [false, true, false],
                    [false, false, false],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut droite', () => {
                const initial = [
                    [false, false, true],
                    [false, false, false],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule milieu gauche', () => {
                const initial = [
                    [false, false, false],
                    [true, false, false],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule milier droite', () => {
                const initial = [
                    [false, false, false],
                    [false, false, true],
                    [false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule bas gauche', () => {
                const initial = [
                    [false, false, false],
                    [false, false, false],
                    [true, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule bas milieu', () => {
                const initial = [
                    [false, false, false],
                    [false, false, false],
                    [false, true, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule bas droite', () => {
                const initial = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, true]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
        })
        describe('gameOfLife 4x4', () => {
            it('in 3x3 gameOfLife, cellule haut', () => {
                const initial = [
                    [false, false, true, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut et bas', () => {
                const initial = [
                    [false, false, true, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, true, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut et bas et gauche', () => {
                const initial = [
                    [false, false, true, false],
                    [true, false, false, false],
                    [false, false, false, false],
                    [false, true, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, cellule haut et bas et gauche et droite', () => {
                const initial = [
                    [false, false, true, false],
                    [true, false, false, false],
                    [false, false, false, true],
                    [false, true, false, false]
                ]
                const gameOfLife = new GameOfLife(initial)
                const expectedResult = [
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false],
                    [false, false, false, false]
                ]
                gameOfLife.nextStep()
                expect(gameOfLife.allCells()).toStrictEqual(expectedResult)
            })
        })
    })
})