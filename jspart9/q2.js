let b = document.createElement('button');
let input = document.createElement('input');
b.innerText = "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(b);

b.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");