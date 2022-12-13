import { menProducts } from "./products.js";

for(let i=0;i<menProducts.length;i++)
{

    let newDiv=document.createElement("div")
    newDiv.innerHTML=`
        <div class="content-card">
            <div class="content image">
                <img src="${menProducts[i].pictures[0]}" alt="">
            </div>
            <div class="name">${menProducts[i].productName}</div>
            <div class="price">${menProducts[i].price}</div>
            </div>

        </div>
      

    `

    newDiv.onclick=()=>
    {
        sessionStorage.setItem("currentItem",JSON.stringify(menProducts[i]))
        location.href="http://127.0.0.1:5501/product-details.html"
    }


    let mainContinerDiv=document.getElementsByClassName("main-container")[0]
    mainContinerDiv.append(newDiv)
}
