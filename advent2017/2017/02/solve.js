
const {max,min} = require('./../../utils/utils')


function solve(input, part) {
    const spreadsheet = input.map(r => r.split('\t').map(s => Number(s)));
    return simpleChecksum (spreadsheet, part === 1 ? greatestDiff : findDivisor);
    // return checksum (spreadsheet, part === 1 ? greatestDiff : findDivisor);
    
}


function* allPairs(arr) {
    for (let x = 0; x < arr.length; x++)
        for(let y = 0; y < arr.length; y++)
            if (x !== y) 
                yield [arr[x],arr[y]];
}

function findDivisor(row) {
    for(let[a,b] of allPairs(row))
        if ( a%b === 0) 
            return a/b;
    throw new Error("no divisors found in row");
}


// const greatestDiff = r => { let result = max(r) - min(r); console.log(`r = ${r} and result = ${result}`); return result;}
const greatestDiff = r =>  max(r) - min(r);
const simpleChecksum = (spreadsheet, rowFn) => spreadsheet.map(rowFn).reduce((a,b) => a + b);                            
const checksum = (spreadsheet, rowFn) => spreadsheet.reduce((a,b) => a + rowFn(b),0);                            
const expected = part => part === 1 ? 50376 : 267;

module.exports = {solve,expected};