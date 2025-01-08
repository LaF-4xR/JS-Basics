// pop = "S";
// if(pop == "XL"){
//     console.log("Price is 250");
// }
// else if(pop == "L"){
//     console.log("Price is 200");
// }
// else if(pop == "M"){
//     console.log("Price is 100");
// }
// else{
//     console.log("Price is 50");
// }
let marks = 40;
if(marks == 40 )
{
    console.log("Passed");
    if(marks >= 90)
    {
        console.log("You got an O");
    } 
    else if(marks <=89 && marks >=80){
        console.log("You got an E");
    }
    else if(marks <= 79 && marks >= 70){
        console.log("You got a A");
    }
    else if(marks <= 69 && marks >=60)
        {
            console.log("You got a B");
        }
    else if(marks <= 59 && marks >=50){
        console.log("You got a C");
    }
    else if(marks <= 49 && marks >=40){
        console.log("You got a D");
    }
}
else {
    console.log("Failed");
}