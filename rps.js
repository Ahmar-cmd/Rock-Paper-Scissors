let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
        playgame(userchoice);
    })
})

const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    let compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);
    //whos gonna win
    if(userchoice===compchoice){
      gamedraw();  //game is draw
    }
    else{
      let  userwin=true;
      if(userchoice==="rock"){
       //scissors,paper
       userwin= compchoice==="scissors"?true:false;
      }
      else if(userchoice==="paper"){
        //scissors,rock
        userwin= compchoice==="rock"?true:false;
      }
      else{
           //rock,paper
          userwin= compchoice==="paper"?true:false;
      }showwinner(userwin,userchoice,compchoice);
      }
      
    }
        //generate computer choice fun
const gencompchoice=()=>{
   const options=["rock","paper","scissors"]
   const randidx=Math.floor(Math.random() * 3)
   return options[randidx]
}
       //game draw fun 
const gamedraw=(userchoice,compchoice)=>{
    console.log("The game is draw");
    msg.innerText = `The game is draw.Play Again.`;
    msg.style.backgroundColor = "#081b31";
}  
       //show winner fun
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin==true){
        ++userscore;
        uscore.innerText=userscore;
        console.log("you are the winner");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        ++compscore;
        cscore.innerText=compscore;
        console.log("you are the losser");
        msg.innerText = `You Lose!  ${compchoice}  beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}