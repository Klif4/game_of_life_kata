import {GameOfLife} from "../src/GameOfLife";

describe('rename me', () => {
    it('cell should be dead when all cells are dead', () => {
      const gameOfLife = GameOfLife.of(5,5)
      gameOfLife.nextStep()
      expect(gameOfLife.cell(2,2).isAlive()).toBe(false)
    })
})