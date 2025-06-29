import { model, Schema } from 'mongoose';
import { TUser } from '../interface/user.interface';
import config from '../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    userId: {
      type: String,
      required:[ true, 'user id is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [ true, 'password is required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: [ true, 'role is required'],
    },
    email: {
      type: String,
      required: [ true, 'email is required'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

// 

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // only hash if password is new or changed

  try {
    const saltRounds = Number(config.SALT_ROUND) || 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err as Error);
  }
});


export const User = model<TUser>('User', userSchema) 