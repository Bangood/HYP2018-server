/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import Validate from 'mongoose-validator';
import Bcrypt from 'bcrypt';

const saltRounds = 10;

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: Validate({
      validator: 'isEmail',
      message: 'is not valid'
    })
  },
  hashed_password: String,
  admin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
    versionKey: false,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    toJSON: {
      transform($doc, $res) {
        delete $res.hashed_password;
      }
    }
  });

UserSchema.virtual('password')
  .set(function setPassword($value) { this._password = $value; })
  .get(function getPassword() { return this._password; });

UserSchema.virtual('confirm_password')
  .set(function setConfirmPassword($value) { this._confirm_password = $value; })
  .get(function getConfirmPassword() { return this._confirm_password; });

UserSchema.pre('validate', function preValidate(next) {

  if (!this.hashed_password && !this.password) {
    this.invalidate('password', 'is required');
  } else if (this.password.length < 6) {
    this.invalidate('password', 'must be at least 5 characters');
  } else if (this.password !== this.confirm_password) {
    this.invalidate('password', 'doesn\'t match the confirmation password');
  }

  next();
});

UserSchema.pre('save', async function ($next) {
  if (!this.password) {
    return $next();
  }
  try {
    const salt = await Bcrypt.genSalt(saltRounds);
    this.hashed_password = await Bcrypt.hash(this.password, salt);
    $next();
  } catch ($err) {
    $next($err);
  }
});

UserSchema.methods.comparePassword = async function ($password) {
  const isMatch = await Bcrypt.compare($password, this.hashed_password)
    .catch(() => false);
  return isMatch;
};

UserSchema.statics.findByName = async function ($email) {
  const user = await this.findOne({
    email: $email
  });
  return user;
};

export default Mongoose.model('user', UserSchema, 'user');