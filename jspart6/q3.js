let arr = ["India", "United Kingdom","dakobd", "UAE"];
console.log(arr);

function longCountry(arr) {
    let lc = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > lc.length)
        {
            lc = arr[i];
        }
    }
    return lc;
}

console.log(longCountry(arr));