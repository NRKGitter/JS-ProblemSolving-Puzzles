function solve(input, path){
    var steps = input.map(Number);
    console.log(`steps...${steps}`);
    return countStepsUntilExit(steps, path === 1 ? () => 1 : n => (n>=3)?-1:1);
}

// 0,3,0,1,-3
function countStepsUntilExit (steps, updateOffset) {
    let currentIndex = 0;
    let stepCount = 0;
    while (currentIndex >= 0 && currentIndex < steps.length){
        let skip = steps[currentIndex];
        steps[currentIndex] += updateOffset(skip);
        // if ( skip === 0 )
        //     currentIndex += 1;
        // else
        //     currentIndex += skip;
        currentIndex+=skip;
        console.log(`currentIndex...${currentIndex}`);
        stepCount++;
    }
    console.log(`steps...${steps}`);
    return stepCount;
}


const expected = part => part === 1 ? 378980 : 26889114;

module.exports = {solve,expected }; //,countStepsUntilExit}; 