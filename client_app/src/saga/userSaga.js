import { call, put, takeEvery, delay } from 'redux-saga/effects';
import * as Types from '../constants/user';
import userApi from '../utils/userApi';

function* sgWordAddUserForm({payload}) {
    yield delay(2000);
    // console.log('payload: ', payload)
    try {
       const result = yield call(userApi.initAddUserForm, payload);
       console.log('result: ', result)
       yield put({type: Types.REGISTER_FORM_SUCCESS, data: result.data});
    } catch (e) {
       yield put({type: Types.REGISTER_FORM_FAIL, data: e});
    }
}
export const userSaga = [
    takeEvery(Types.REGISTER_FORM, sgWordAddUserForm)
]

// export default function* userSaga(){
//     yield takeEvery(Types.REGISTER_FORM, sgWordAddUserForm)
// }