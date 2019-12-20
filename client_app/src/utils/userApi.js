import api from './api';
const userApi = {
    initAddUserForm: (data) => {
        return api.post('/register', data).then( r => r).catch( err => err);
    }
}

export default userApi;