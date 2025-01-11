arr = [12,14,16,80,28];
let temp = 0;
for(let i = 0; i<=arr.length;i++)
{
    if(arr[i] > temp)
    {
        temp = arr[i];
    }
}
console.log(`Largest number is ${temp}`);