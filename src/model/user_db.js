const db = require('./model');
const schema = {
    user_name: { type: mongoose.SchemaTypes.String, required: true },
    email: { type: mongoose.SchemaTypes.String, required: true },
    password: { 
        type: mongoose.SchemaTypes.String, 
        required: true, 
        select: false
    }
};
const collectionName = "user";
const userSchema = new Schema(schema);
const User = db.model(collectionName, userSchema);
module.exports = User;