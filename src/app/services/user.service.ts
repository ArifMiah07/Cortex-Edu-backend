import { TUser } from '../interface/user.interface';
import { User } from '../model/user.model';



// create an user
const createUserIntoDb = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

// get all users
const getAllUsersFromDb = async () => {
  const result = await User.find();
  return result;
};

export const userServices = {
  createUserIntoDb,
  getAllUsersFromDb,
};
