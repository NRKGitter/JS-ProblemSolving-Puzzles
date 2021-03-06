function solve(input, part) {
    
    const startingSquare = Number(input[0]);
    if (part === 1) {
        const distanceTo = 
        targetNumber => 
        {
            const funcIsTarget = n => n === targetNumber;
            let c = 1;
            let fnNextNumber = () => ++c;
            let p = find(funcIsTarget, fnNextNumber)
            return Math.abs(p.pos[0]) + Math.abs(p.pos[1]);            
        }

        // console.log(distanceTo(12)) //3
        // console.log(distanceTo(23)) //2
        // console.log(distanceTo(1024)) //31
        return distanceTo(startingSquare);

    } else {
        const fnPart2NextNumber = ([x,y],state) => 
            [[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]].reduce((acc,[a,b]) => acc + (state[[x+a,y+b]] || 0), 0);
        return find(n => n > startingSquare, fnPart2NextNumber).n;
    }


}


// placement of next number R1 U1 L2 D2 R3 U3 L4 D4 R5
function* numberPlacement(fnNextNumber) {
    const dir = "RULD"
    let [x,y] = [0,0];
    let dirIndex = 0;
    let dist = 1;
    
    let move = () => {
        switch(dir[dirIndex]) {
            case "R" : x++; break;
            case "U" : y--; break;
            case "L" : x--; break;
            case "D" : y++; break;
        }
        return [x,y];
    }
    
    // yield {n : currNumber, pos: move()}; // 1.. 00
    
    for(;;){
        for (let q = 0; q < 2; q++) {
            for (let n = 0; n < dist; n++) {
                let nextPos = move();
                yield { n : fnNextNumber(nextPos), pos: nextPos} // 2 ... 1,0
            }
            dirIndex++;
            dirIndex = dirIndex % dir.length;
        }
        dist++;
    }    
}

function distanceTo(targetNumber) {
    for (let p of numberPlacement())
        if ( p.n === targetNumber )
            return Math.abs(p.pos[0]) + Math.abs(p.pos[1]);

}


function find(funcIsTarget, fnNextNumber) {
    let state = { };
    state[[0,0]] = 1
    for (let p of numberPlacement(p => fnNextNumber(p, state))) {
        state[p.pos] = p.n;
        if ( funcIsTarget(p.n) )
            return p;
    }
        

}

const expected = part => part === 1 ? 430 : 312453;

module.exports = {solve,expected};