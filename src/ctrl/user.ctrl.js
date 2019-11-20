const bcrypt = require('bcryptjs');
const User = require('../model/user_db');

const initFindUser = async (userName) => {
    const result = await User.findOne({ user_name: userName.toLowerCase().trim() }).lean().exec().then(r => r )
    return result;
}
module.exports = {
    initRegisterMember: async (req, res) => {
        const { body } = req;
        if(!body || Object.keys(body).length === 0){
            res.status(404).json({
                error: true,
                message: 'Lỗi... Thiếu dữ liệu!',
                data: null
            })
            return false;
        }
        if(body.userEmail === '' || body.userName === '' 
        || body.userPassword === '' || body.userPasswordConfirm === ''){
            res.status(200).json({
                error: true,
                message: 'Lỗi... Vui lòng điền đầy đủ thông tin!',
                data: null
            });
            return false;
        }
        if( body.userPassword !== body.userPasswordConfirm){
            res.status(200).json({
                error: true,
                message: 'Lỗi... Nhập lại mật khẩu không chính xác!',
                data: null
            });
            return false;
        }
        console.log(body);
        const item = await initFindUser(body.userName).then(r => r);
        if(item){
            res.status(200).json({
                error: true,
                message: 'Lỗi... Tên đăng nhập đã tồn tại!',
                data: null
            });
            return false;
        }
        console.log('Item: ', item)
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(body.userPassword, salt, function(err, hash) {
                const newUser = new User({
                    user_name: body.userName.toLowerCase().trim(),
                    email: body.userEmail.trim(),
                    password: hash
                })
                newUser.save()
                    .then( newUser => {
                        console.log('newUser: ', newUser)
                        res.status(200).json({
                            error: false,
                            message: 'Đăng ký tài khoản thành công...',
                            data: {
                                userName: newUser.user_name,
                                userEmail: newUser.email
                            }
                        })
                    })
                    .catch( err => console.log(err))
            });
        });
    }
}