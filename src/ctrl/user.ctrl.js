const bcrypt = require('bcryptjs');
const User = require('../model/user_db');

const initFindUser = async (userName) => {
    const result = await User.findOne({ user_name: userName }).select('name').lean().exec(dt => dt).catch( err => err);
    return result;
}
module.exports = {
    initRegisterMember: async (req, res) => {
        const { body } = req;
        const item = await initFindUser(body.userName).then(r => r);
        console.log('Item: ', item)
        res.status(200).json({
            message: 'abc'
        })
        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(body.userPassword, salt, function(err, hash) {
        //         const newUser = new User({
        //             user_name: body.userName,
        //             email: body.userEmail,
        //             password: hash
        //         })
        //         newUser.save()
        //             .then( newUser => res.json(newUser))
        //             .catch( err => console.log(err))
        //     });
        // });
    }
}