let allSquares = document.querySelectorAll('.square');
let gameCount = 1;
console.log(allSquares);
let winmessage = document.querySelector("#win");
let gameOver = false;

allSquares.forEach(function (square) {
    square.addEventListener("click", changeSquare);
});

//change the square to X or O
function changeSquare(e) {
    clearBoard();
    if (gameCount % 2 == 0) {
        if (e.target.textContent == 'X' || e.target.textContent == 'O') {
            alert("Sorry, someone already used this Square, please Select Another!")
        } else {
            e.target.textContent = 'O';
            gameCount++;
        }

    } else {
        if (e.target.textContent == 'X' || e.target.textContent == 'O') {
            alert("Sorry, someone already used this Square, please Select Another!")
        } else {
            e.target.textContent = 'X';
            gameCount++;
        }
    }
    //check to see if winner
    checkWinner();
    console.log(gameCount);
}

//clear board funtion to clear playing ground if game is over
function clearBoard() {
    console.log("STUCK HERE");
    let s1 = document.querySelector("#one");
    let s2 = document.querySelector("#two");
    let s3 = document.querySelector("#three");
    let s4 = document.querySelector("#four");
    let s5 = document.querySelector("#five");
    let s6 = document.querySelector("#six");
    let s7 = document.querySelector("#seven");
    let s8 = document.querySelector("#eight");
    let s9 = document.querySelector("#nine");
    console.log(s1);
    console.log(winmessage.textContent);
    if (gameOver == true) {
        console.log("Need to be in this if statement!");
        s1.textContent = ' ';
        s2.textContent = ' ';
        s3.textContent = ' ';
        s4.textContent = ' ';
        s5.textContent = ' ';
        s6.textContent = ' ';
        s7.textContent = ' ';
        s8.textContent = ' ';
        s9.textContent = ' ';
        winmessage.textContent = ' ';
        gameOver = false;
        gameCount = 1;
    }
}

//check squares to see if there is a winner
function checkWinner() {
    let s1 = document.querySelector("#one").textContent;
    let s2 = document.querySelector("#two").textContent;
    let s3 = document.querySelector("#three").textContent;
    let s4 = document.querySelector("#four").textContent;
    let s5 = document.querySelector("#five").textContent;
    let s6 = document.querySelector("#six").textContent;
    let s7 = document.querySelector("#seven").textContent;
    let s8 = document.querySelector("#eight").textContent;
    let s9 = document.querySelector("#nine").textContent;

    if (s1 == 'X' && s2 == 'X' && s3 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s1 == 'X' && s4 == 'X' && s7 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s3 == 'X' && s6 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s7 == 'X' && s8 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s1 == 'X' && s5 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s3 == 'X' && s5 == 'X' && s7 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s2 == 'X' && s5 == 'X' && s8 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s4 == 'X' && s5 == 'X' && s6 == 'X') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s1 == 'O' && s4 == 'O' && s7 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s3 == 'O' && s6 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s7 == 'O' && s8 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s1 == 'O' && s5 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s3 == 'O' && s5 == 'O' && s7 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s2 == 'O' && s5 == 'O' && s8 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (s4 == 'O' && s5 == 'O' && s6 == 'O') {
        winmessage.textContent = "Someone has Won!";
        gameOver = true;
    } else if (gameCount == 10) {
        winmessage.textContent = "Draw!";
        gameOver = true;
    }

}