let arr = [18,19,30,6,3,0,43,56,12,34,69];
num = 10;

function getLarger(arr, num)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > num)
        {
            console.log(arr[i]);
        }
    }
}

getLarger(arr, num);