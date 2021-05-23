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

function playGame(turns) {
    var chances = turns;
    var won = 0;
    var randomNumer = Math.floor(Math.random()*10);
    console.log(randomNumer);
    var boxes = document.querySelectorAll(".boxes");
    var message = document.querySelector(".title");
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            if(chances > 0 && won == 0) {
                chances --
                var guess = this.innerHTML;
                if(guess < randomNumer) {
                    message.innerHTML = "Lower: " + chances + " chances left"; 
                } else if(guess > randomNumer) {
                    message.innerHTML = "Upper: " + chances + " chances left"
                } else {
                    message.innerHTML = "Congrats You Won!";
                    won = 1;
                }
            }
            if(chances <= 0 && won == 0) {
                message.innerHTML = "You Lost: 0 chances left."
            }
        })
    }
}

button = document.querySelector(".btn");
button.addEventListener("click", function(){
    document.querySelector(".title").innerHTML = "Guess A Number";
    this.innerHTML = "Restart";
    startGame();
});
