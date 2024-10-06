let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

//module to generate computer choice
const genCompChoice =()=>{
    const options =["rock","paper","scissiors"]; //creating an array for all options present
    const randIdx =Math.floor(Math.random()*3);// random number generation between 0 and 2 which act as array index 
    return options[randIdx];//return elemnt present at random index
}

//user choice
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });

//draw condition
const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="game is draw! play Again" ; //jab game draw ho jayega toh msg wale div ka text change ho jaye
    msg.style.backgroundColor="Black";//used to change the message background div color gto black
    msg.style.Color="White";
}
//creating show winner module
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;                        //update user score
        userScorePara.innerText=userScore;
        // console.log("you win ");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`  //jab user win ho toh msg wale div ka text change ho jaye
        msg.style.backgroundColor="Green";//used to change the message background div color to green
        msg.style.Color="White";
    
    }else{
        // console.log("youy lose");
        compScore++;                        //update computer score
        compScorePara.innerText=compScore;
        msg.innerText=`comp win! ${compChoice} beats ${userChoice}`   //jab comp win ho toh msg wale div ka text change ho jaye
        msg.style.backgroundColor="red";//used to change the message background div color gto red
        msg.style.Color="White";
    }
}


//module to show both user and computer choice and logic for play game
const playGame=(userChoice)=>{
    // console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

     //logic for playing game
    if(userChoice===compChoice){
        // call draw game module 
        drawGame(); 
    }else{
        let userWin=true;  //initially userWin ko true set kar diya
        if(userChoice==="rock"){
            //computer choice may be scissiors or paper , rock ho nhi sakta as rock hota toh phle bhi draw ho jata
            userWin=compChoice==="paper"?false:true;      
          } else if(userChoice==="paper"){
            //computer choice may be scissiors or rock , paper ho nhi sakta as paper hota toh phle hi draw ho jata
            userWin=compChoice==="scissiors"?false:true;      
          }else {
            userWin=compChoice==="rock"?false:true;
          }
          showWinner(userWin,userChoice,compChoice); // calling showWinner module
    };
};


});