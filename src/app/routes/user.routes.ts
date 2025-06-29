import { Router } from "express";
import { userControllers } from "../controller/user.controller";
import { userValidation } from "../validation/user.validation";
import validateRequest from "../middlewares/validateRequest";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

// create user
router.post('/users', requireAuth , validateRequest(userValidation.createUserValidation), userControllers.createUser);
// get all users
router.get('/users', userControllers.getAllUsers);



export const userRoutes = router;