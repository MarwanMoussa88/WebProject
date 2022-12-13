import { getCurrentUser,users } from "./users.js"

let currentProduct=JSON.parse(sessionStorage.getItem("currentItem"))
let currentSize=""
let quantity=""
let userObject=JSON.parse(sessionStorage.getItem("currentUser"))

//console.log(currentUser)
for(let i=0;i<document.getElementsByClassName("side-picture").length;i++)
{
    document.getElementsByClassName("side-picture")[i].src=currentProduct.pictures[i]
    
}
document.getElementById("main-picture").src=currentProduct.pictures[4]

//get size
for(let i=0;i<document.getElementsByClassName("button").length;i++)
{
    document.getElementsByClassName("button")[i].onclick=()=>
    {
        currentSize=document.getElementsByClassName("button")[i].innerHTML
    }
}

document.getElementsByClassName("add-to-bag-button")[0].onclick=()=>
{
    
    
    quantity=document.getElementsByClassName("quantity-number")[0].value
    if(quantity<0 || quantity==="")
    {
        alert("Select Valid Quantity")
    }
    else if(currentSize==="")
    {
        alert("Select a size")
    }
    else
    {
        if(userObject===null)
        {
            alert("Please Sign in First")
            location.href="http://127.0.0.1:5501/sign-in.html"
        }
        else
        {
            let currentUser=getCurrentUser(userObject.username,userObject.password)
            alert("Added to cart Successfully")
            //console.log(currentProduct)
            //currentUser.cart.push({product:currentProduct,quantity:quantity,size:currentSize})
            //sessionStorage.setItem("currentUser2",JSON.stringify(currentUser))
            //console.log(currentUser)
            console.log(users[0])
            users[0].cart.push({product:currentProduct,quantity:quantity,size:currentSize})
            console.log(users[0].cart)
        }

        
    }   
}

