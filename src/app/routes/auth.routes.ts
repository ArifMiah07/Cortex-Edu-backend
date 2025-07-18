import { Router } from 'express';
import { UserAuth } from '../controller/auth.controller';


const authRouter = Router();

authRouter.post('/register', UserAuth.registerUser); 
authRouter.post('/login', UserAuth.loginUser);
authRouter.post('/logout',UserAuth.logoutUser);

export const authRoutes = authRouter;
