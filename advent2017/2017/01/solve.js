function solve(input, part) {
    const nextChar = (ch,n) => ch[(n + 1) % ch.length];
    const halfway = (ch,n) => ch[(n + (ch.length / 2)) % ch.length];
    
    return sumMatching([...input[0]], part === 1 ? nextChar : halfway);

}


function sumMatching(chars, fn){
    //console.log(`chars ..${chars}`);            
    return chars.map((c,n) => c === fn(chars, n) ? Number(c) : 0).reduce((a,b) => a+b);    
}

const expected = part => part === 1 ? 1341 : 1348;

module.exports = {solve, expected};