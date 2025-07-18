import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
  const token = req.cookies.authToken;


  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET!);
    (req as any).user = decoded;
    next();
  } catch (error: any) {
    console.log(error);
    res.status(403).json({ message: 'Invalid or expired token' });
    return;
  }
};
