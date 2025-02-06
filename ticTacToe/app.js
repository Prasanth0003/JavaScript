let boxes = document.querySelectorAll(".box");
let resetBUtton = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgContaner = document.querySelector(".msg-contaner");
let msg = document.querySelector("#msg");

let turno = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turno = true;
    enablebledBoxes();
    msgContaner.classList.add("hide");
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContaner.classList.remove("hide");
    disabledBoxes();
}

boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if(turno){
                box.innerText = "O";
                turno = false;
            }else{
                box.innerText = "X";
                turno = true;
            }
            box.disabled = true;
            checkWinner();
        });
});

const checkWinner = () => {
    for(let pattern of winPattern){
            let position1 = boxes[pattern[0]].innerText; 
            let position2 =boxes[pattern[1]].innerText; 
            let position3 =boxes[pattern[2]].innerText;

            if(position1 != "" && position2 !="" && position3 !=""){
                if(position1 == position2 && position2 == position3){
                    showWinner(position1);
                }
            }
    }
}

newGame.addEventListener("click", resetGame);
resetBUtton.addEventListener("click", resetGame);