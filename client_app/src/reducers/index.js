import { combineReducers } from 'redux';
import userRegister from './user/register';
const rootReducer = combineReducers({
    userRegister
})
export default rootReducer;