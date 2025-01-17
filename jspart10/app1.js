let btn = document.querySelector("button");
let inp = document.querySelector("input");
let c = document.querySelector("#c");
btn.addEventListener("mouseout", function(){
    console.log("Mouse is out of the button");
})

inp.addEventListener("keypress", function(event){
    console.log(`${event.key} is pressed`);
    console.log(`Key code is ${event.code}`);
    console.dir(event)
})

c.addEventListener("scroll", function(){
    console.log("Scrolling is happening");
})

btn.addEventListener("load", function(){
    console.log("Button is loaded");
})