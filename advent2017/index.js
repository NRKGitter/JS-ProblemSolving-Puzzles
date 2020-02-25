
const chalk = require('chalk');
const fs = require('fs');

let year = 2017;
let startDay = 1;
let endDay = 25;

let args = process.argv.slice(2);
// console.log(`args ..${args}`);


for(let day = startDay; day <= endDay; day++)
{
    // console.log(`year ..${year}`);
    let path = `./${year}/${("0"+day).slice(-2)}`;
    console.log(`path ..${path}`);
    if(!fs.existsSync(path))
    {
        console.log(chalk.red(`${year} day ${day} not found`));
        break;
    }
    const solver = require(path +`/solve`);
    let text = fs.readFileSync(path+'/input.txt')
            .toString()
            .split('\n')
            .map(s => s.replace(/\r$/,''))
            .filter(s => s.length > 0);

    
    for(let part of [1,2]) {
        let answer = solver.solve (text, part);
        let expected = solver.expected(part);
        
        if (answer === expected) {
            console.log(chalk.green(`${year} day ${day} part ${part}: ${answer}`));
        }
        else {
            console.log(chalk.red(`${year} day ${day} part ${part}: ${answer} - expected ${expected}`));
        }
    }

    
}

