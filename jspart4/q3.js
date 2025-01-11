num = 1234;
temp = num;
let r;
c=0;
s=0;
for(let n = num; n > 0; n =  Math.floor(n/10)){
    c++;
    r = n%10;
    s = s+r;
}
console.log(c);
console.log(s);