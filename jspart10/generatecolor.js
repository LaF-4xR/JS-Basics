let btn = document.querySelector("button")
btn.addEventListener("click", function() {
    let color = getRandomColor();
    h3.innerText = color;
    div.style.background = color;
    console.log(`The rgb value is ${color}`);
});
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

function getRandomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    color = `rgb(${red}, ${green}, ${blue})`
    return color;
}