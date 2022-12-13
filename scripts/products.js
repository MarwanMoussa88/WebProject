

export let GetProductByID=(id)=>
{
    for(let i=0;i<menProducts.length;i++)
    {
        if(id==menProducts[i].productID)
        {
            return menProducts[i]
        }
    }
    for(let i=0;i<womenProducts.length;i++)
    {
        if(id==womenProducts[i].productID)
        {
            return womenProducts[i]
        }
    }
    return null
}


export let menProducts=[
    {
        productID:"0",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
        ],
        size:"",
        quantity:""
    },
    {
        productID:"1",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
        ],
  
    },
    {
        productID:"2",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
            "clothes/teeshirt1.jpg",
        ],

    },
]
export let womenProducts=[
    {
        productID:"3",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
        ],

    },
    {
        productID:"4",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
        ],
        
    },
    {
        productID:"5",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
        ],

    },
    {
        productID:"6",
        productName:"Hooded Puffer Jacket",
        price:"50$",
        pictures:[
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
            "clothes/dress.jpg",
        ],

    },
]

