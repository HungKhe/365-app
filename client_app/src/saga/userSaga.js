import { call, put, takeEvery, delay } from 'redux-saga/effects';
import * as Types from '../constants/user';
import userApi from '../utils/userApi';

function* sgWordAddUserForm({payload}) {
    yield delay(2000);
    console.log('payload: ', payload)
    try {
       const result = yield call(userApi.initAddUserForm, payload);
       yield put({type: Types.REGISTER_FORM_SUCCESS, data: result});
    } catch (e) {
       yield put({type: Types.REGISTER_FORM_FAIL, data: e});
    }
}
export const userSaga = [
    takeEvery(Types.REGISTER_FORM, sgWordAddUserForm)
]