async function greet(){
    //throw "Error 404";  //Throw keyword is used to throw some random errors.
    return "Yoo guys";
}

greet()
.then((res)=>{
    console.log("Promise was resolved");
    console.log(res);
})
.catch((err)=>{
    console.log("Promise was rejected", err);
});

// let demo = async () => {
//     return 1000;
// }
 