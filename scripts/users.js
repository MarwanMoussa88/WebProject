

export let users=[
    {
        firstName:"marwan",
        lastName:"Moussa",
        email:"maromoussa88@gmail.com",
        username:"marwan",
        password:"123456",
        cart:[{product:{},quantity:2,size:"medium"}]
    },
    {
        firstName:"Rahaf",
        lastName:"Hossam",
        email:"testing@gmail.com",
        username:"Rahaf",
        password:"123456",
        cart:[],
    },
    {
        firstName:"Rania",
        lastName:"Shahin",
        email:"test@gmail.com",
        username:"Rania",
        password:"123456",
        cart:[],
    },
    
    
]

export let checkUsername=(username)=>
{
    for(let i=0;i<users.length;i++)
    {
        
        if(username===users[i].username)
        {
            return true
        }

    }
    return false
}


export let CheckUsers= (username,password)=>{

    for(let i=0;i<users.length;i++)
    {
        
        if(username===users[i].username&&password===users[i].password)
        {
            return true
        }

    }
    return false
}

export let getCurrentUser= (username,password)=>{

    for(let i=0;i<users.length;i++)
    {
        
        if(username===users[i].username&&password===users[i].password)
        {
            return users[i]
        }

    }
    return null
}

export let getCurrentUserByID=(id)=>
{
    for(let i=0;i<users.length;i++)
    {
        if(id===users[i].id)
        {
            return users[i]
        }

    }
    return null
}