const {max,min} = require('./../../utils/utils')

function solve (input, part) {
    const getNextChar = (chars, n) => chars[(n+1) % chars.length];
    
    const data = input.map(r => r.split('\t').map(s => Number(s)));
    return calculateCheckSum(data, part === 1 ? greatestDiff : halfway);
}

function calculateCheckSum(data, fn) {
    data.map(fn).reduce((a,b) => a + b);  
}


const greatestDiff = seq => max(seq) - min(seq);

const expected = part => part === 1 ? 1 : 2 ;


module.exports = {solve, expected};