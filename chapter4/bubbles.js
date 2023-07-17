var scores = [60, 50, 60, 58, 54, 54,     
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, 
   .25, .29, .27, .22, .31, .25, .25, .33, 
   .21, .25, .25, .25, .28, .25, .24, .22,
   .20, .25, .30, .25, .24, .25, .25, .25, 
   .27, .25, .26, .29];

// decare 2x variables with no values 
var highScore, bestSolutions;


// Calls function, scores is an argument, assigns return value to highScore variable //
highScore = printAndGetHighScore(scores);

// Prints length of scores
console.log("Bubbles tests: " + scores.length);

// Prints highest bubble score 
console.log("Highest bubble score: " + highScore);


// Calls function with scores and highscore as arguments
bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

// Computes and prints the most cost effective of the best solutions using scores, costs and highscore
mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");

// Func creates a function and uses scores as a parameter and returns the highScore
// Func starts a loop over the element scores, assigns a string to the var output which is the bubble solution and its score
// Prints the output, checks if current score is > than highscore variable, if it is then it updates highscore variable
function printAndGetHighScore(scores) {
var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
output = "Bubble solution #" + i + " score: " + scores[i];
console.log(output);
if (scores[i] > highScore) {
  highScore = scores[i];
}
}
return highScore;
}

// Func make, scores and highscore are parameters, returns bestSolutions
// Var bestSolutions is empty, creates a loop using scores, checks if scores == highScore
// If true the 'i' is added to the bestSolutions
// The push() effectively adds 'i' to bestSolutions, this allows bestSolutions to keep track of the bubble solutions with the highest score
// For example, if the scores array is [60, 50, 60, 58, 54], and the highScore is 60, the bestSolutions array would contain the indices of the two solutions with a score of 60, which are 0 and 2. Therefore, the bestSolutions array would be [0, 2].
function getBestResults(scores, highScore) {
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
if (scores[i] == highScore) {
  bestSolutions.push(i);
}
}
return bestSolutions;
}

// Func defined, scores, costs and highScore are parameters 
// Loop checks if score == highScore, if true checks current cost is lower than the cost var, if true updates index and cost vars
function getMostCostEffectiveSolution(scores, costs, highScore) {
var cost = 100; // Higher than any of the costs
var index;

for (var i = 0; i < scores.length; i++) {
if (scores[i] == highScore) {
  if (cost > costs[i]) {
      index = i;
      cost = costs[i];
  }
}
}
return index;
}

