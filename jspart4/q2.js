num = 1234;
temp = num;
c=0;
for(let n = num; n > 0; n =  Math.floor(n/10)){
    c++;
}
console.log(c);