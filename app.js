let allSquares = document.querySelectorAll('.square');
let gameCount = 1;
console.log(allSquares);
let winmessage = document.querySelector("#win");

allSquares.forEach(function (square) {
    square.addEventListener("click", changeSquare);
});

function changeSquare(e) {
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
    checkWinner();
    console.log(gameCount);
}

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
    } else if (s1 == 'X' && s4 == 'X' && s7 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s3 == 'X' && s6 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s7 == 'X' && s8 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s1 == 'X' && s5 == 'X' && s9 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s3 == 'X' && s5 == 'X' && s7 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s2 == 'X' && s5 == 'X' && s8 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s4 == 'X' && s5 == 'X' && s6 == 'X') {
        winmessage.textContent = "Someone has Won!";
    } else if (s1 == 'O' && s4 == 'O' && s7 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s3 == 'O' && s6 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s7 == 'O' && s8 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s1 == 'O' && s5 == 'O' && s9 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s3 == 'O' && s5 == 'O' && s7 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s2 == 'O' && s5 == 'O' && s8 == 'O') {
        winmessage.textContent = "Someone has Won!";
    } else if (s4 == 'O' && s5 == 'O' && s6 == 'O') {
        winmessage.textContent = "Someone has Won!";
    }else if (gameCount == 10) {
        winmessage.textContent = "Draw!";
    }

}

// if (winmessage.textContent == 'Someone Has Won!' || winmessage.textContent == 'Draw!') {
//     allSquares.forEach(function (square) {
//         square.textContent = ' ';
//         console.log("In If Statement")
//     })
// }