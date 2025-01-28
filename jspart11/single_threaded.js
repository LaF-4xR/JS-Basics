setTimeout(()=>{
    console.log('setTimeout 1');
},2000);

setTimeout(()=>{
    console.log('setTimeout 2');
},4000);

console.log("Hello World!");

//This is because js can only perform one task at a time and the setTimeout function is used to print something after a delay.
//So in JS it does not waits it immediately performs the function but the browser waits to print it in the console after the delay. 