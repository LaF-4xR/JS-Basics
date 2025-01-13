start = 5;
end = 11;

function rangeRandom(start, end) {
    let diff = end - start;
    let ans = Math.floor(Math.random() * diff) + start;
    console.log(ans);
}

rangeRandom(start, end);