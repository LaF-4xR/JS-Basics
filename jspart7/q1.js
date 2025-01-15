let arr = [20,20,20,20,20,20,20];
let a=0;
const arrayAverage = (arr) => {
    let s = 0;
    let avg = 0;
    for(let i=0; i<arr.length; i++)
    {
        s += arr[i];
    }
    avg = s / arr.length;
    return avg;
    // console.log(avg);
}

// arrayAverage(arr);
console.log(arrayAverage(arr, a));