let arr = [1,2,3];
let a = 9;

const doubleAndReturnArgs = (arr,...a) => [
    ...arr,
    ...a.map((v) => v*2),
];

console.log(doubleAndReturnArgs);