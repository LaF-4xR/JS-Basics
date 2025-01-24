function savetoDB(data){
    return new Promise((resolve, reject) =>{
        let speed = Math.floor(Math.random() * 10) + 1;
        if(speed > 4){
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    }); 
}

savetoDB("Hello")
.then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDB("hello world");
})
.then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDB("HELLO WORLD");
})
.then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
});

//Promise method is used to write the codes of comeback hells to make it more compact, efficient and more readable and less confusing which can be very easy to understand for the programmer/user.