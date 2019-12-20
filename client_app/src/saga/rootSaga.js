import { all } from 'redux-saga/effects';
import { userSaga } from './userSaga';
function* rootSaga(){
    yield all([
        ...userSaga
    ])
}

// function* rootSaga(){
//     yield all([
//         fork(userSaga)
//     ])
// }

export default rootSaga;