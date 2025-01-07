let todo = ["hello"];

let req = prompt("Enter your req: ");

while(true)
{
    if(req == "quit")
    {
        console.log("You have quitted");
        break;
    }
    else if(req == "list"){
        for(let i = 0; i<todo.length; i++)
        {
            console.log(todo[i]);
        }
    }
    else if(req == "add"){
        let task = prompt("Enter your task: ");
        todo.push(task);
    }
    else if(req == "delete"){
        let del = prompt("Enter the task index you want to delete: ");
        todo.splice(del, 1);
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Enter your follwing req: ");
}
