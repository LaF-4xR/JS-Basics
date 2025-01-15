const obj = {
    message: 'Hello World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(obj.logMessage, 1000);