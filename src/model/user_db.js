const db = require('./model');
const schema = {
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { 
        type: String, 
        required: true, 
        select: false
    }
};
const collectionName = "user";
const userSchema = new db.Schema(schema);
const User = db.model(collectionName, userSchema);
module.exports = User;