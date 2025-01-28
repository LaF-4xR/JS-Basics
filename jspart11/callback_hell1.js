h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("blue", 1000, () => {
    changeColor("red", 1000, () => {
        changeColor("yellow", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("purple", 1000, () => {
                    changeColor("brown", 1000);
                });
            }); 
        });
    });
});

//Callback Nesting -> Callback hells