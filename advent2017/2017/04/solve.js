

function isValidFn(passPhrase, wordMapFn){
    const words = passPhrase.split(' ').map(wordMapFn)
    return words.length === new Set(words).size;
}

const countValidFn = (phrases, validator) => phrases.filter(validator).length;

const isValid1 = p => isValidFn(p, w => w);
const isValid2 = p => isValidFn(p, w => [...w].sort().join(''));

function solve(input, part) {
    return countValidFn(input, part === 1 ? isValid1 : isValid2);
}

const expected = part => part === 1 ? 337 : 231;

module.exports = {solve,expected,isValid1,isValid2};