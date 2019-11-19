import * as Types from '../constants/user';
const initialState = {
    error: false,
    message: '',
    loading: false
}
function userReducer(state = initialState, action){
    switch(action.type){
        case Types.REGISTER_FORM:
            console.log(action);
            return {...state}
        case Types.REGISTER_FORM_SUCCESS:
            console.log(action);
            return {...state}
        case Types.REGISTER_FORM_FAIL:
            console.log(action);
            return {...state}
        default:
            return state
    }
  }
  
  export default userReducer
  