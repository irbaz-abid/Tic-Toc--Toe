let boxes = document.querySelectorAll(".box");

let reset= document.querySelector("#reset");

let newGame= document.querySelector(".newGame");
let msgCont= document.querySelector(".msgcont");
let msg= document.querySelector("#msg");
//winning patterns
let winPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnO=false;
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
          if(!turnO){
            box.innerText="X";
            turnO=true;
            box.style.color="green";
          }
          else{
             box.innerText="O";
             turnO=false;
             box.style.color="yellow"
          }
          box.disabled=true;
          ChkWinner();
    })
})
//disabled buttons when one winner is showed
const disableBtn =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//reset
const resetGame = ()=>{
     turnO=true;
     enable();
     msgCont.classList.add("hide");
}
//enable boxes
const enable = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//show
const show=(winner)=>{
  msg.innerText=`Congratulations! ${winner} is Winner`;
  msgCont.classList.remove("hide");
  disableBtn();
}
//accessing each pattern
const ChkWinner=()=>{
for(let pattern of winPat){
    //every position in boxes with that pattern
    let post1= boxes[pattern[0]].innerText;
    let post2= boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText;
    //comapring position to pattern winning
  //all position must be filled to check winner
    if(post1!="" && post2!="" && post3!=""){
        if(post1 === post2 && post2 === post3){
            console.log("Winner! is Player ",post1);
            show(post1);
        }
    }
}
}


//newGame & reset buttons

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);