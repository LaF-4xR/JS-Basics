gameSeq = [];
userSeq = [];

btns = ["red", "green", "blue", "yellow"];
h2=document.querySelector("h3");

let started = false;
level = 0;

document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;

    h2.innerText = `Level ${level}`;
    randIdx = Math.floor(Math.random()*4);
    randColor = btns[randIdx];
    randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);
}

function userFlash(){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    console.log(this);
    btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
        {
            console.log("Correct");
            setTimeout(levelUp, 250);
        }
    }
    else
    {
        console.log("Incorrect");
        h2.innerHTML = `Game Over! Your score is ${level}<br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}