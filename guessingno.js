let user = prompt("Enter the Range: ");
num = user;
random = Math.floor(Math.random() * num) + 1;
guess = prompt("Guess your Number: ");
// console.log(random);
while (true) {
    if (guess == "quit") {
        console.log("You Quit!");
        break;
    }
    if (guess == random){
        console.log(random);
        console.log("You have guessed the correct number. It was", random);
        break;
    }
    else if(guess > random){
        guess = prompt("You have guessed a larger number. Guess a smaller one");
    }
    else if(guess < random){
        guess = prompt("You have guessed a smaller number. Guess a larger one");
    }
    // else{
    //     guess = prompt("Try Again");
    // }

}