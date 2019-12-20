import * as Types from '../../constants/user';
const initialState = {
    error: false,
    message: '',
    loading: false,
    data: null
}
function userReducer(state = initialState, action){
    switch(action.type){
        case Types.REGISTER_FORM:
            return {...state, loading: true}
        case Types.REGISTER_FORM_SUCCESS:
            let {error, message, data} = action.data;
            return {error, message, loading: false, data}
        case Types.REGISTER_FORM_FAIL:
            return {...state, error: true, message: 'Error!!!', loading: false}
        default:
            return state
    }
  }
  
  export default userReducer
  