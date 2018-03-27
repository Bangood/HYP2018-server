/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
const UserSchema = new Mongoose.Schema({
  userName: String,
  password: String
});
export default Mongoose.model('user', UserSchema, 'user');