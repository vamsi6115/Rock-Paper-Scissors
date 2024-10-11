let your =0;
let computer=0;
let you=document.querySelector("#your");
let com=document.querySelector("#comp");
const msg =document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const computerchoice = () =>{
    const options =["rock","paper","scissors"];
    let value =Math.floor(Math.random()*3);
    return options[value];
};
let showwinner =(userwin,choiceid,compchoice) => {
    if (userwin) {
        your++;
        you.innerText=your;
        msg.innerText=`you win! your ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
   
    } else{
        computer++;
        com.innerText=computer;
        msg.innerText=`you lose! your ${choiceid} lose to ${compchoice}`;
        msg.style.backgroundColor = "red";
        
        
    }
};
let drawgame = () => {
   msg.innerText="game is draw"; 
   msg.style.backgroundColor = "purple";
};
const playgame = (choiceid) =>{
    

 const compchoice=computerchoice();
 
 if(choiceid === compchoice){
    drawgame();
 }else{
    let userwin=true;
    if(choiceid ==="rock"){
        userwin=compchoice==="paper"? false:true;
    }else if(choiceid==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }else {
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,choiceid,compchoice);
 }
};
 
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    });
});