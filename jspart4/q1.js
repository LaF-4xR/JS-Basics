arr = [12,3,2,4,2,4,2,];

num = 2;
console.log("Before deleting: ");
for(let i = 0; i < arr.length; i++)
{
        console.log(arr[i]);
    if(num == arr[i])
    {
        arr.splice(i,1);
    }
}
console.log("After deleting: ");
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}