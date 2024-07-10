import { BUY_LAPTOP, FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes"
import { BUY_MOBILE } from "./actionTypes"
import axios from 'axios';

 export const buyLaptop=() =>{
    return{
        type : BUY_LAPTOP
    }
}
export const buyMobile =() =>{
    return {
        type : BUY_MOBILE   
    }
}
 export const fetchUserRequest =() =>{
    return {
        type : FETCH_USERS_REQUEST
    }
 }
 export const fetchUserSuccess =(users) =>{
    return {
        type : FETCH_USERS_SUCCESS,
        data : users
    }
 }
 export const fetchUserFail =(error) =>{
    return {
        type : FETCH_USERS_FAIL,
        data : error
    }
 }

 export const fetchUsers = () =>{
    
        return function (dispatch){
            dispatch(fetchUserRequest());
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                let users = response.data.map(user => user.id);
                console.log(users)
                
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUserFail(error))
            })
        }
 }