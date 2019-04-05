function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// generate balls
     function generateBalls() {
    const numberOfBalls = 7;
    let balls = [];
    randomHeavyBall = getRandomInt(numberOfBalls) + 1;
  
    for (let i = 1; i <= numberOfBalls; i++) {
      balls.push({
        ball: "Ball" + i,
        weight: i != randomHeavyBall ? 1 : 2
      });
    }
  
    return balls;
}

// Scale if left(X) or right(Y) side is heavier
  function scale(balls, X, Y) {
    console.log("Reshenie:");
    console.log("Postavih ", X.length, "topcheta ot lqvo ", X);
    console.log("Postavih ", Y.length, "topcheta ot dqsno ", Y);
    let leftSum = 0;
    let rightSum = 0;
  
    for (let i = 0; i < X.length; i++) {
      console.log("X: ", balls[X[i] - 1]);
      leftSum += balls[X[i] - 1].weight;
    }
  
    for (let i = 0; i < Y.length; i++) {
      console.log("Y: ", balls[Y[i] - 1]);
      rightSum += balls[Y[i] - 1].weight;
    }
     if (leftSum == rightSum){
      console.log("Rezultat: rawni sa, topcheto otwyn e po tejko");
    } else if(balls[X[0] - 1].weight > balls[X[1] - 1].weight){
      console.log("TopkaX 1 e po-golqma");
    } else if(balls[X[0] - 1].weight < balls[X[1] - 1].weight){
      console.log("TopkaX 2 e po-golqma");
    } else if(balls[X[0] - 1].weight = balls[X[1] - 1].weight){
      console.log("Rezultat:Topka X1 i X2 sa rawni, topcheto otwyn(X3) e po tejko");
    } else if(balls[Y[0] - 1] > balls[Y[1] - 1]){
      console.log("TopkaY 1 e po-golqma");
    } else if (balls[Y[0] - 1] < balls[Y[1] - 1]){
      console.log("TopkaY 2 e po-golqma");
    } else if(balls[Y[0] - 1].weight = balls[Y[1] - 1].weight){
      console.log("Rezultat: Topka Y1 i Y2 sa rawni, topcheto otwyn(Y3) e po tejko");
    }
   
}


let randomHeavyBall;
let balls = generateBalls();
console.log("Generirah 7 topcheta!");

console.log("Po tejkoto topche e ", randomHeavyBall);
let chosenLeftBalls = [];
let chosenRightBalls = [];

const ballsToAddToScale = 3;
console.log("Postaweni topcheta otlqwo", ballsToAddToScale, "Postaweni topcheta otdqsno", ballsToAddToScale);

while (chosenLeftBalls.length < ballsToAddToScale) {
  let chosenBall = getRandomInt(7) + 1;
  if (!chosenLeftBalls.includes(chosenBall)) {
    chosenLeftBalls.push(chosenBall);
  }
}

while (chosenRightBalls.length < ballsToAddToScale) {
  let chosenBall = getRandomInt(7) + 1;
  if (
    !chosenLeftBalls.includes(chosenBall) &&
    !chosenRightBalls.includes(chosenBall)
  ) {
    chosenRightBalls.push(chosenBall);
  }
}

console.log("Topcheta lqwa wezna", chosenLeftBalls);
console.log("Topcheta dqsna wezna", chosenRightBalls);

scale(balls, chosenLeftBalls, chosenRightBalls);