import * as Types from '../constants/user';

export const actRegisterForm = (data) => {
    return {
        type: Types.REGISTER_FORM,
        payload: data
    }
}
export const actRegisterFormSuccess = (data) => {
    return {
        type: Types.REGISTER_FORM_SUCCESS,
        payload: data
    }
}
export const actRegisterFormFail = (err) => {
    return {
        type: Types.REGISTER_FORM_FAIL,
        payload: err
    }
}