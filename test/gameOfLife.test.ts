import {GameOfLife} from "../src/core/GameOfLife";

describe('Game of life unit tests', () => {
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

        expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
    })
    describe('an alive cell must die when it have no alive cell around', () => {
        describe('gameOfLife 3x3', () => {
            it('in 3x3 gameOfLife, middle middle cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top left cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top middle cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top right cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, middle left cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, middle right cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, bottom left cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, bottom middle cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, bottom right cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
        })
        describe('gameOfLife 4x4', () => {
            it('in 3x3 gameOfLife, top cell alive cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top and bottom cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top and bottom and gauche cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
            it('in 3x3 gameOfLife, top and bottom and gauche and right cell alive', () => {
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
                expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
            })
        })
    })
    describe('an alive cell with 1 alive cell around must die', () => {
        it('horizontal', () => {
            const initial = [
                [false, false, false, false],
                [false, true, true, false],
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
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
        it('vertical', () => {
            const initial = [
                [false, false, false, false],
                [false, true, false, false],
                [false, true, false, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
        it('diagonal', () => {
            const initial = [
                [false, false, false, false],
                [false, true, false, false],
                [false, false, true, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
    })
    describe('a cell with 2 alive cells around keep his state', () => {
        it('line', () => {
            const initial = [
                [false, false, false, false],
                [false, true, false, true],
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
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
        it('random', () => {
            const initial = [
                [false, false, false, false],
                [false, true, false, false],
                [false, false, true, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
    })
    describe('a cell with 3 alive cells around must be alive', () => {
        it('line', () => {
            const initial = [
                [false, false, false, false],
                [false, true, true, true],
                [false, false, false, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
        it('column', () => {
            const initial = [
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, false, false],
                [false, true, true, true],
                [false, false, false, false],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
    })
    describe('a cell with more than 3 alive cells around must be dead', () => {
        it('more than 3 alive cells around', () => {
            const initial = [
                [false, false, false, false],
                [false, true, true, true],
                [false, true, true, false],
                [false, false, false, false]
            ]
            const gameOfLife = new GameOfLife(initial)
            const expectedResult = [
                [false, false, true, false],
                [false, true, false, true],
                [false, true, false, true],
                [false, false, false, false]
            ]
            expect(gameOfLife.nextStep()).toStrictEqual(expectedResult)
        })
    })

})