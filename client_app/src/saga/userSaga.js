import { call, put, takeEvery, delay } from 'redux-saga/effects';
import * as Types from '../constants/user';
import userApi from '../utils/userApi';

function* sgWordAddUserForm({payload}) {
    delay(2000)
    try {
       const result = yield call(userApi.initAddUserForm, payload.data);
       yield put({type: Types.REGISTER_FORM_SUCCESS, data: result});
    } catch (e) {
       yield put({type: Types.REGISTER_FORM_FAIL, data: e});
    }
}
function* userSaga() {
    yield takeEvery(Types.REGISTER_FORM, sgWordAddUserForm);
}

export default userSaga;