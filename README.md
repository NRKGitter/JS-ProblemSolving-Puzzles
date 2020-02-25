"# JS-ProblemSolving-Puzzles" 
**********************************   Inspired by Mark Heath ****************

node index.js

Creating a Solver Framework – index.js

I'm using JavaScript to solve this year’s Advent of Code challenges. The entry point is index.js which does a few things for me:

Parses command line arguments so I can run a specific challenge or all of them
Reads the data from the input.txt file for each challenge into an array with a line per string
Outputs the results unit test style showing whether the answers returned match the correct answers for my input
My index.js file has dependencies on two modules. One is the built-in fs module, which gives us file system access. And the other is the chalk npm package, giving us an easy way to output coloured text in the console.

To install the chalk package, I need to enter npm install chalk at the command line and my package.json file will get updated with chalk as a dependency:


