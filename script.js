function startGame() {
    while(1) {
        var turns = prompt("Number of Guesses (1-10)");
        if(turns > 0 && turns <= 10) {
            break;
        } else {
            alert("Please Enter a valid number of turns");
        }
    }
    playGame(turns);
}

function handleClick(randomNumber, chances, guess, won, message) {
    if(chances > 0 && won == 0) {
        if(guess < randomNumber) {
            message.innerHTML = "Smaller: " + chances + " chances left"; 
        } else if(guess > randomNumber) {
            message.innerHTML = "Greater: " + chances + " chances left"
        } else {
            message.innerHTML = "Congrats You Won!";
            won = 1;
        }
    }
    if(chances <= 0 && won == 0) {
        message.innerHTML = "You Lost: 0 chances left."
    }
}

function numberToWord(num) {
    if(num == 0){
        return "zero";
    } else if(num == 1) {
        return "one";
    } else if (num == 2) {
        return "two";
    } else if (num == 3) {
        return "three";
    } else if (num == 4) {
        return "four";
    } else if (num == 5) {
        return "five";
    } else if (num == 6) {
        return "six";
    } else if (num == 7) {
        return "seven";
    } else if (num == 8) {
        return "eight";
    } else if (num == 9) {
        return "nine";
    }
}

function press(key) {

    if(key == " ") {
        var space = document.querySelector(".btn");
        space.classList.add("pressedSubmit");
        setTimeout(function() {
            space.classList.remove("pressedSubmit");
        }, 100);
    } else {
        var pressedKey = document.querySelector("." + numberToWord(key));
        pressedKey.classList.add("pressed");
        setTimeout(function() {
            pressedKey.classList.remove("pressed");
        }, 100);
    }
}

function playGame(turns) {
    var chances = turns;
    var won = 0;
    var randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    var boxes = document.querySelectorAll(".boxes");
    var message = document.querySelector(".title");
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            chances --;
            var guess = this.innerHTML;
            handleClick(randomNumber, chances, guess, won, message);
            press(guess);
        })
    }
    document.addEventListener("keydown", function(event) {
        var guess = event.key;
        if(guess >= 0 && guess <= 9 && guess != " ") {
            chances --;
            handleClick(randomNumber, chances, guess, won, message);
            press(guess);
        }
    } )
}

button = document.querySelector(".btn");
button.addEventListener("click", function(){
    press(" ")
    document.querySelector(".title").innerHTML = "Guess A Number";
    this.innerHTML = "Restart";
    startGame();
});

document.addEventListener("keydown", function(event) {
    if(event.key == " ") {
        press(" ");
        document.querySelector(".title").innerHTML = "Guess A Number";
        this.innerHTML = "Restart";
        startGame();
    }
})
