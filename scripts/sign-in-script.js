import { CheckUsers ,getCurrentUser} from "./users.js";


let usernameInput=document.getElementsByClassName("input")[0]
let passwordInput=document.getElementsByClassName("input")[1]

let loginButton=document.getElementsByClassName("button")[0]




loginButton.onclick=()=>{

    if(CheckUsers(usernameInput.value,passwordInput.value))
    {
        alert("Successful Login")
        sessionStorage.setItem("currentUser",JSON.stringify(getCurrentUser(usernameInput.value,passwordInput.value)))
        
        location.href="http://127.0.0.1:5501/home.html"
    }
    else
    {
       alert("Invalid Username or Password")
    }
}