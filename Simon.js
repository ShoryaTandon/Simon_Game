let level =0;
let gameSeq=[];
let mySeq=[];
let started =false;
let p = document.querySelector("p");

let Buttons=["red", "blue", "green", "yellow"];



document.addEventListener("keydown", function(){
    if (started==false){
        console.log("game started");
        started=true;}
    levelUp();
  

});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },350);

}


function Over(body){
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over");
    },200);
    

}



function checkAns(idx){
    //  console.log("current level"+level);
    //  let idx =level-1;
     if (gameSeq[idx]===mySeq[idx]){
           if(gameSeq.length==mySeq.length){
            setTimeout(levelUp,1250);
           
           }
     }
     else{
        let body=document.querySelector("body");
        
        Over(body)

        p.innerHTML=`Game Over! Your Score Was <b>${level}<b><br>Press Any Key To Start`;
          level =0;
          gameSeq=[];
          mySeq=[];
         started =false;


     }


}



function levelUp(){
    mySeq=[];
    level++;
    p.innerText=`level ${level}`;
    let rand=Math.floor(Math.random()*4)//number
    let randBtn=Buttons[rand];//class name
    let btn=document.querySelector(`.${randBtn}`);//.class

    gameSeq.push(randBtn);
    // console.log(gameSeq);

    btnFlash(btn);
}

function buttonPress(){
    console.log("Button Pressed");
     let btn =this;
    //  console.log(this);

     let color=btn.getAttribute('id');
    //  console.log(color);
    mySeq.push(color);
    

     btnFlash(btn);

     checkAns(mySeq.length-1);

}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}