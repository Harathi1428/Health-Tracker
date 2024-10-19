const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
          username: String,
              email: String,
             password: String
        });
const user=mongoose.model('user',UserSchema)
module.exports=user;