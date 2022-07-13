import types from "../ActionTypes";

export default function(state={loginstatus:false},action)
{
    console.log("RED : " , action)
    switch(action.type)
    {
        case types.TYPE_LOGIN : 
                return {...action.payload,loginstatus:true}   
        case types.TYPE_LOGOUT : 
                return {...action.payload,loginstatus:false}    
        default : return state
    }
}