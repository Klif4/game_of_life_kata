import figlet from 'figlet'
import inquirer from 'inquirer'
import {patterns} from '../core/Patterns'
import Table from "cli-table";
import {GameOfLife} from "../core/GameOfLife";

const humanReadable = (cells: boolean[][]) => {
    let table = new Table({
        colWidths: cells[0].map(cell => 3),
        colAligns: cells[0].map(cell => "middle"),
        colors: true
    })
    cells.forEach(cellLine => {
        table.push(cellLine.map(cell => {
            if(cell){
                return 'x'
            }
            return ''
        }))
    })
    return table.toString()

};

const run = () => {
    console.clear()
    figlet('Game Of Life', (err, data) => {
        console.log(data)
        inquirer.prompt([
            {
                type: 'list',
                message: 'Select Your pattern : ',
                name: 'pattern',
                choices: Object.keys(patterns)
            }
        ]).then(answer => {
            const initialState = patterns[answer.pattern];
            console.log(humanReadable(initialState))
            const gameOfLife = new GameOfLife(initialState)
            setTimeout(() => {
                const gol = setInterval(() => {
                    console.clear()
                    console.log(humanReadable(gameOfLife.nextStep()))
                }, 1000)
            }, 1000)

        })
    })
}

run()