import { Router } from "express";
import { userControllers } from "../controller/user.controller";


const router = Router();

// create user
router.post('/users', userControllers.createUser);
// get all users
router.get('/users', userControllers.getAllUsers);



export const userRoutes = router;