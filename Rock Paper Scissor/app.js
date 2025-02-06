let useScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGmae(userChoice); 
    });
});

const playGmae = (userChoice) =>{

    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;         
        }
        showWinner(userWin, compChoice, userChoice)
    }
};

const getCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIndex = Math.floor(Math.random()*3);
    return options[ranIndex];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, compChoice, userChoice) =>{

    if(userWin){
        useScore++;
        userScorepara.innerText = useScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScorepara.innerText = comScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};