
function maxBy(seq, selector) {
    return findBy(seq,selector,(a,b) => a > b).foundElem;
}

function max(seq, selector) {
    return findBy(seq,selector,(a,b) => a > b).foundVal;
}

function minBy(seq, selector) {
    return findBy(seq,selector,(a,b) => a < b).foundElem;
}

function min(seq, selector) {
    return findBy(seq, selector, (a,b) => a < b).foundVal;
}


function findBy(seq, selector, test) {
    let foundVal;
    let foundElem;

    for(let n of seq) {
        let val = (typeof(selector) === 'undefined' ? n : selector(n));
        if (typeof(foundElem)  === 'undefined' || test(val, foundVal))
        {
            foundElem = n;
            foundVal = val;
        }
    }

    return { foundVal, foundElem};
}

module.exports = { max, min };