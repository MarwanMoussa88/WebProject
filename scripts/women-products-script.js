import { womenProducts} from "./products.js";

for(let i=0;i<womenProducts.length;i++)
{

    let newDiv=document.createElement("div")
    newDiv.innerHTML=`
        <div class="content-card">
            <div class="content image">
                <img src="${womenProducts[i].pictures[0]}" alt="">
            </div>
            <div class="name">${womenProducts[i].productName}</div>
            <div class="price">${womenProducts[i].price}</div>
            </div>

        </div>    
    `
    newDiv.onclick=()=>
    {
        location.href="http://127.0.0.1:5501/product-details.html"
    }
 


    let mainContinerDiv=document.getElementsByClassName("main-container")[0]
    mainContinerDiv.append(newDiv)
}