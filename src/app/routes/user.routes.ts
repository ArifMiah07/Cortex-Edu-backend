import { Router } from "express";
import { userControllers } from "../controller/user.controller";
import { userValidation } from "../validation/user.validation";
import validateRequest from "../middlewares/validateRequest";

const router = Router();

// create user
router.post('/users', validateRequest(userValidation.createUserValidation), userControllers.createUser);
// get all users
router.get('/users', userControllers.getAllUsers);



export const userRoutes = router;