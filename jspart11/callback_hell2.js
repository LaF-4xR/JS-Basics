function savetoDB(data, success, failure){
    let speed = Math.floor(Math.random() * 10) + 1
    if(speed > 4){
        success();
    } else {
        failure();
    }
}

savetoDB(
    "Hello",
    () => {
        console.log("Success: Your data was saved");
        savetoDB(
            "hello world",
            () => {
                console.log("Success2: data2 saved");
                savetoDB(
                    "HELLO WORLD!!", 
                    () => {
                        console.log("Success3: data3 saved");
                    },
                    () => {
                        console.log("Failure3: Weak connection");
                    }
                );
            },
            () => {
                console.log("Failure2: Weak connection");
            }
        );
    },
    () => {
        console.log("Failure: Weak connection");
    }
);

// Callback Nesting -> Callback Hell