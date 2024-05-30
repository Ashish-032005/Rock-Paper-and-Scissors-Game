let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const msg=document.getElementById('msg');
const choices=document.querySelectorAll(".choice");
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw, Play again";
    msg.style.backgroundColor="#081b31";
}
const getCompChoice=()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    const CompChoice=getCompChoice();
    if(userChoice===CompChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors/paper
            userWin = CompChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock/scissors
            userWin = CompChoice==="scissors"?false:true;
        }else{
            //rock/paper
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
}
const showWinner=(userWin, userChoice, CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.innerText=`You Win! Your ${userChoice} beats ${CompChoice}`;      
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.innerText=`You Lose! ${CompChoice} beats ${userChoice}`;
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

