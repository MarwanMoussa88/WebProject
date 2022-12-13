import { users,CheckUsers,checkUsername } from "./users.js";


let firstNameInput=document.getElementsByClassName("input")[0]
let lastNameInput=document.getElementsByClassName("input")[1]
let usernameInput=document.getElementsByClassName("input")[2]
let emailInput=document.getElementsByClassName("input")[3]
let passwordInput=document.getElementsByClassName("input")[4]
let signUpButton=document.getElementsByClassName("button")[0]

let firstNameFlag=false
let lastNameFlag=false
let usernameFlag=false
let emailFlag=false
let passowrdFlag=false
let regexName=/^[a-z ,.'-]+$/i
let regexEmail = /^[a-zA-Z0-9_\.]{2,}@[a-zA-Z]+.[a-zA-Z]+$/

signUpButton.onclick=()=>
{
    if(!regexName.test(firstNameInput.value))
    {
        alert("Enter a valid First Name")
        firstNameFlag=false
    }
    else
    {
        firstNameFlag=true
    }
    if(!regexName.test(lastNameInput.value))
    {
        alert("Enter a valid Last Name")
        lastNameFlag=false
    }
    else
    {
        lastNameFlag=true
    }
    if(!regexEmail.test(emailInput.value))
    {
        alert("Enter a valid Email")
        emailFlag=false
    }
    else
    {
        emailFlag=true
    }
    if(usernameInput.value==="")
    {
        alert("Enter a valid username")
    }
    else if(checkUsername(usernameInput.value))
    {
        alert("username is already taken")
    }
    else
    {
        usernameFlag=true
    }
    if(passwordInput.value==="")
    {
        alert("enter a valid password")
    }
    else
    {
        passowrdFlag=true
    }

    if(firstNameFlag&&lastNameFlag&&emailFlag&&usernameFlag&&passowrdFlag)
    {
        alert("register successfully")
        users.push({
                firstName:firstNameInput.value,
                lastName:lastNameInput.value,
                email:emailInput.value,
                username:usernameInput.value,
                password:passwordInput.value,
                cart:[]
            })

    }
    


}

