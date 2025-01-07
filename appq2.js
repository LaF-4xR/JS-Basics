let str = ["hello", "world!", "misss"];

// function concat() {
//     return str.join("");

// }

function concat(){
    let result = "";

    for(let i=0; i<str.length; i++){
        result = result + str[i];
    }
    return result;
}

console.log(concat(str));