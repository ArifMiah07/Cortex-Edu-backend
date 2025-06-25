import { Schema } from 'mongoose';
import { TUser } from '../interface/user.interface';

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
  },
  needPasswordChange: {
    type: Boolean,
    default: true,
  },
  email:{
    type: String,
    required: true,
    
  }
});
