const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your Nicknames? ", (answer1) => {
  rl.question("What hobbies do you have? ", (answer2) => {
    rl.question("Whats your favorite spotify playlist? ", (answer3) => {
      rl.question("Whats you comfort food? ", (answer4) => {
        console.log(
          `Some people call me ${answer1}, but you gotta deserve it first. You can catch me ${answer2} on the rare occasion that i have free time. My ear balls are happy when ${answer3} is playing and I am cooking ${answer4}.`
        );
        rl.close();
      });
    });
  });
});
