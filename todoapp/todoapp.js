let btn = document.querySelector(".add");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let bt = document.querySelector(".Del");


btn.addEventListener("click", function(event){
    
    if(inp.value.trim() === "")
    {
    console.log("hello");
    }else {
        let h = document.createElement("li");
        h.innerText = inp.value + " ";
        console.log(h);
        ul.appendChild(h);
        inp.value = "";
        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        h.appendChild(delBtn);
    }
})

bt.addEventListener("click", function(){
    ul.innerText = "";
})

ul.addEventListener("click", function(e){
    if(e.target.nodeName === "BUTTON"){
        let li = e.target.parentNode;
        li.remove();
    }
})
