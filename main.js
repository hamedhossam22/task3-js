//Task:(choose the right answer)

//1- B
//2- B
//3- D
//4- D
//5- B
//6- A
//7- A
//8- A
//9- D


//CRUD OPERATIONS

const users = [{
    username : "ahmed",
    password : "12345"
},
{
    username : "mohamed",
    password : "67890"
},
];

function addUser(){
  
    let newUsername = prompt("Enter username")
    let newPassword = prompt("Enter password")
 const newUser = {
    username : newUsername,
    password : newPassword
  }
  users.push(newUser)
  showUsers()
}

function showUsers(){
    console.clear()
    for(let i = 0; i < users.length; i++){
        console.log(`${i+1}- Username: ${users[i].username} => Password: ${users[i].password}`)
    }
}

showUsers()

function deleteUser(){
   const index = +prompt("Enter User Number") - 1
   users.splice(index, 1)
   showUsers()
}

function updateUser() {
    const itemIndex = prompt("Enter User Number:") - 1;

    const newUsername = prompt("Enter new username:");
    const newPassword = prompt("Enter new password:");

    const newUser = {
        username: newUsername,
        password: newPassword,
    };

    users.splice(itemIndex, 1, newUser);
    showUsers();
}

