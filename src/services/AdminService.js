class AdminService
{
 
    // AdminLogin(data)
    // {
    //     return fetch(" https://devapi.rupyo.in/users/login ",{
    //         method : "POST",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(data)
    //     })
    // }
    AdminLogin(data)
    {
        return fetch(" https://updatedgiftthink.herokuapp.com/users/login ",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }


    createemployee (data)
        {
            return fetch("https://updatedgiftthink-app.herokuapp.com/employees/createemployee",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
        }

    employeelist()
    {
        return fetch("https://devapi.rupyo.in/employees/employeeslist",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },            
        })
    }

    employeerlist()
    {
        return fetch("https://devapi.rupyo.in/employers/employerslist",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }, 
        })
    }

    adminlist()
    {
        return fetch("https://devapi.rupyo.in/users/rupyoadminlist",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }, 
        })
    }

    companyname()
     {
        return fetch("https://devapi.rupyo.in/employers/companyname", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
    }

    placeorder()
     {
        return fetch("https://updatedgiftthink.herokuapp.com/orders/placeorder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
    }
    
    orderslist()
    {
       return fetch("https://updatedgiftthink.herokuapp.com/orders/orderslist", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
           },
       })
   }

    // findbirthdayaniversaryjoiningdate()
    //  {
    //     return fetch("https://updatedgiftthink.herokuapp.com/eployees/findbirthdayaniversaryjoiningdate", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${localStorage.getItem('token')}`
    //         },
    //     })
    // }
}




export default new AdminService();




