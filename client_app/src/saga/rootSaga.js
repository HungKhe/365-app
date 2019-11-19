import { all } from 'redux-saga/effects';
import userSage from './userSaga';
function* rootSaga(){
    yield all([
        userSage
    ])
}

export default rootSaga;