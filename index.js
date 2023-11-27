import inquirer from 'inquirer';
let todo = [];
let loop = true;
while (loop) {
    let ans = await inquirer.prompt([{
            type: "input",
            message: "add in your todo",
            name: "todos",
        },
        {
            type: "confirm",
            message: "Select an operation",
            name: "addmore",
            default: false
        }
    ]);
    const { todos, addmore } = ans;
    console.log(ans);
    loop = addmore;
    if (todo) {
        todo.push(todos);
    }
    else {
        console.log("add valid input");
    }
}
console.log(todo);
if (todo.length > 0) {
    console.log("Your todo list: ");
    todo.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("No todos found");
}
