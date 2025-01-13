let str = "The singing of Latin brought purer";

function vowelsCount(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        {
            c++;
        }
    }
    console.log(`The no. of vowels in the str is ${c}.`);
}

vowelsCount(str);