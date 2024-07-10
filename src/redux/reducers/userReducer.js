import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAIL} from '../actions/actionTypes'

const initialState = {
    users :[],
    isloading : '',
    error : false
}

const userReducer = (state = initialState,action)=>{
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,isloading:true
            }
            case FETCH_USERS_SUCCESS:
                return {
                    users : action.data,isloading:false,error:false
                }
            case FETCH_USERS_FAIL:
                return {
                    users:[],isloading:false,error:action.error
                }
            default:
                return state
    }
}
export default userReducer;
