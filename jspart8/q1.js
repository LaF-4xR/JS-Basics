let arr = [1,2,3,4,5];

const h = arr.map((arr) => arr * arr);
console.log(h);

const p = h.reduce((res,el) => (res + el));
console.log(p);

let avg = p/arr.length;
console.log(avg);