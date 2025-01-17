let inp = document.querySelector("input");
let h = document.querySelector("h2");
inp.addEventListener("keyup", function(event){
    let p = inp.value.replace(/[^a-zA-Z\s]/g ,"");

    h.innerText = p;
})