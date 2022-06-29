const boxes = document.querySelectorAll('.box');
const btn = document.querySelector('.game-btn');
const one = document.querySelector('.box-1');
const two = document.querySelector('.box-2');
const three = document.querySelector('.box-3');
const four = document.querySelector('.box-4');
const five = document.querySelector('.box-5');
const six = document.querySelector('.box-6');
const seven = document.querySelector('.box-7');
const eight = document.querySelector('.box-8');
const nine = document.querySelector('.box-9');
const display = document.querySelector('#display');

const player1 = {
    hasPlayed: false,
    xArray: [],
}
const player2 = {
    hasPlayed: false,
    oArray: [],
}



// ADD PLAYER NAMES ---------------------//

const input1 = document.querySelector('#player1');
const input2 = document.querySelector('#player2');
const tag1 = document.querySelector('#play1');
const tag2 = document.querySelector('#play2');

input1.addEventListener('input', () => {
    tag1.textContent = input1.value;
})
input2.addEventListener('input', () => {
    tag2.textContent = input2.value;
})

//------------------------------------//


// FUNCTIONS -------------->
function checking() {

    // Horizontally
    if (one.textContent === "X"
        && two.textContent === "X"
        && three.textContent === "X") {
        youWin()
    } else if (four.textContent === "X"
        && five.textContent === "X"
        && six.textContent === "X") {
        youWin()
    } else if (seven.textContent === "X"
        && eight.textContent === "X"
        && nine.textContent === "X") {
        youWin();
        // Vertically
    } else if (one.textContent === "X"
        && four.textContent === "X"
        && seven.textContent === "X") {
        youWin()
    } else if (two.textContent === "X"
        && five.textContent === "X"
        && eight.textContent === "X") {
        youWin()
    } else if (three.textContent === "X"
        && six.textContent === "X"
        && nine.textContent === "X") {
        youWin();
        // Diagonally 
    } else if (one.textContent === "X"
        && five.textContent === "X"
        && nine.textContent === "X") {
        youWin()
    } else if (three.textContent === "X"
        && five.textContent === "X"
        && seven.textContent === "X") {
        youWin()
    }
    //  else {
    //     draw()
    // }

    //------------CHECKING Os---------------//

    // Horizontally
    if (one.textContent === "O"
        && two.textContent === "O"
        && three.textContent === "O") {
        youLose()
    } else if (four.textContent === "O"
        && five.textContent === "O"
        && six.textContent === "O") {
        youLose()

    } else if (seven.textContent === "O"
        && eight.textContent === "O"
        && nine.textContent === "O") {
        youLose();
        // Vertically 
    } else if (one.textContent === "O"
        && four.textContent === "O"
        && seven.textContent === "O") {
        youLose()
    } else if (two.textContent === "O"
        && five.textContent === "O"
        && eight.textContent === "O") {
        youLose()
    } else if (three.textContent === "O"
        && six.textContent === "O"
        && nine.textContent === "O") {
        youLose();
        // Diagonally 
    } else if (one.textContent === "O"
        && five.textContent === "O"
        && nine.textContent === "O") {
        youLose()
    } else if (three.textContent === "O"
        && five.textContent === "O"
        && seven.textContent === "O") {
        youLose()
    }
    // else {
    //     draw();
    // }


}
//------
function youWin() {

    setTimeout(() => {
        display.textContent = `${tag1.textContent.toUpperCase()} WINS !!!`;
        display.classList.toggle('success');
    }, 1000)
    setTimeout(() => {
        display.textContent = " ";
        display.classList.toggle('success');
        gameOver();
    }, 3000)

}
function youLose() {

    setTimeout(() => {
        display.textContent = `${tag2.textContent.toUpperCase()} WINS !!!`;
        display.classList.toggle('loss');
    }, 1000)
    setTimeout(() => {
        display.textContent = " ";
        display.classList.toggle('loss');
        gameOver();
    }, 3000)

}

function draw() {
    setTimeout(() => {
        display.classList.toggle('draw');
        display.textContent = `DRAW !!!`;
    }, 2000)
    setTimeout(() => {
        display.classList.toggle('draw');
        display.textContent = " ";
        gameOver();
    }, 3000)
}

function gameOver() {

    for (let box of boxes) {

        // Reset Board
        box.textContent = "";
        box.style.color = "white";

        // Reset Players
        player1.hasPlayed = false;
        player2.hasPlayed = false;
        tag1.textContent = 'Player X';
        tag2.textContent = 'Player O';
        input1.value = '';
        input2.value = '';

        // Reset ClassLists
        box.classList.remove('clicked');
    }
}
//------------

function addMarks() {

    boxes.forEach(box => {
        box.addEventListener('click', () => {

            // Checks if button is already clicked
            if (box.classList.contains('clicked')) {
                console.log('this box is clicked');
            } else if (player1.hasPlayed === false) {

                // Add Xs
                box.textContent = 'X';
                box.style.color = "red";

                // Player Turns
                player1.hasPlayed = true;
                player2.hasPlayed = false;
                console.log(player1.hasPlayed);
                console.log(player2.hasPlayed);

                // Add Class List Clicked
                box.classList.add('clicked');
                console.log(box.className);
            } else if (player1.hasPlayed === true) {
                // checking();
                // Add Os
                box.textContent = 'O';


                // Player Turns
                player1.hasPlayed = false;
                player2.hasPlayed = true;

                // Add class list Clicked
                box.classList.add('clicked');
                console.log(box.className);
            }
            checking();
        })
    });
}


function resetBoard() {
    btn.addEventListener('click', () => {
        boxes.forEach(box => {
            // function gameOver() {

            //     // Reset Board
            //     box.textContent = "";

            //     // Reset Players
            //     player1.hasPlayed = false;
            //     player2.hasPlayed = false;
            //     tag1.textContent = 'Player X';
            //     tag2.textContent = 'Player O';
            //     input1.value = '';
            //     input2.value = '';

            //     // Reset ClassLists
            //     box.classList.remove('clicked');
            // }
            gameOver();
        });
    })

}














resetBoard();
addMarks();