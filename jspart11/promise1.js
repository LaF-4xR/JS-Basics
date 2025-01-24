h1 = document.querySelector("body");

function colorChange(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.backgroundColor = color;
            resolve("color changed!");
        }, delay);
    });
}

colorChange("blue", 1000)
.then(() => {
    console.log("Color was changed to blue!");
    return colorChange("red", 1000);
})
.then(() => {
    console.log("Color was changed to red!");
    return colorChange("yellow", 1000);
})
.then(() => {
    console.log("Color was changed to yellow!");
    return colorChange("green", 1000);
})
.then(() => {
    console.log("Color was changed to green!");
    return colorChange("purple", 1000);
})
.then(() => {
    console.log("Color was changed to purple!");
    return colorChange("brown", 1000);
})
.then(() => {
    console.log("Color was changed to brown!");
})
.catch(() =>{
    console.log("Error occurred!");
});

//Promise method is used to write the codes of comeback hells to make it more compact, efficient and more readable and less confusing which can be very easy to understand for the programmer/user.