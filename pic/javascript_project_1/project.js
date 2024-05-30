let userScore=0;
let compScore=0;
let you_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let choices=document.querySelectorAll(".choice");

let genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const option=Math.floor(Math.random()*3);
    return options[option];
}

let playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    console.log(`user choice = ${userChoice}\n computer choice = ${compChoice}`);
    // console.log(compChoice);
    if(userChoice==compChoice){
        msg.innerText="Draw";
        msg.style.backgroundColor="rgb(5, 5, 58)";   
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin= compChoice=="scissor"?false:true;
        }
        else if(userChoice=="paper"){
            userWin= compChoice=="rock"?true:false;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        if(userWin==true){
            userScore+=1;
        }
        else{
            compScore+=1;
        }
        result(userWin,compChoice,userChoice);
        console.log(userWin);
    }    
}

let result=(userWin,compChoice,userChoice)=>{
    if(userWin==true){
        you_score.innerHTML=userScore;
        msg.innerText=`You won Computer Selected ${compChoice}`;
        msg.style.backgroundColor="Green";
        msg.style.color="White";
    }
    else{
        comp_score.innerHTML=compScore;
        msg.innerText=`You Loose Computer Selected ${compChoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="White";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // User choice
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
}
)