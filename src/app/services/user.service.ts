import AppError from '../errors/AppError';
import { TUser } from '../interface/user.interface';
import { User } from '../model/user.model';
import httpStatus from 'http-status';


// create an user
const createUserIntoDb = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

// get all users
const getAllUsersFromDb = async () => {
  const result = await User.find({
    role: 'user'
  });
  if(result.length === 0){
    throw new AppError(httpStatus.NOT_FOUND, 'No User Found!');
  }
  return result;
};
// get all admins
const getAllAdminsFromDb = async () => {
  const result = await User.find({
    role: 'admin'
  });
  return result;
};




export const userServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getAllAdminsFromDb,
};
