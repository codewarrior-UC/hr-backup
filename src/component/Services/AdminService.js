class AdminService
{
  
    AdminLogin(data)
    {
        return fetch(" https://devapi.rupyo.in/users/login ",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

    
  
} 

export default new AdminService()

 