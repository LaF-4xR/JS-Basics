h1 = document.querySelector("body");

function colorChange(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

async function change(){
    await colorChange("blue", 1000);
    await colorChange("red", 1000);
    await colorChange("yellow", 1000);
    await colorChange("green", 1000);
    await colorChange("purple", 1000);
    await colorChange("brown", 1000);
}

change();  //Usage of Async and Await makes the codes of promises and callback hells more compact

// colorChange("blue", 1000)
// .then(() => {
//     console.log("Color was changed to blue!");
//     return colorChange("red", 1000);
// })
// .then(() => {
//     console.log("Color was changed to red!");
//     return colorChange("yellow", 1000);
// })
// .then(() => {
//     console.log("Color was changed to yellow!");
//     return colorChange("green", 1000);
// })
// .then(() => {
//     console.log("Color was changed to green!");
//     return colorChange("purple", 1000);
// })
// .then(() => {
//     console.log("Color was changed to purple!");
//     return colorChange("brown", 1000);
// })
// .then(() => {
//     console.log("Color was changed to brown!");
// })
// .catch(() =>{
//     console.log("Error occurred!");
// });
