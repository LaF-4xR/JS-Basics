let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function(){
    console.log("div clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation(); //THIS LINE STOPS EVENT BUBLING
    console.log("ul clicked");
});

for (i=1; i<=3; i++){   
    li.addEventListener("click", function(event){
        event.stopPropagation(); //THIS LINE STOPS EVENT BUBLING
        console.log("li clicked");
    });
}

