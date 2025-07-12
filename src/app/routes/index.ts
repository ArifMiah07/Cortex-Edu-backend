import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { userRoutes } from './user.routes';
import { ModuleRoutes } from './modules.routes';
import { LectureRoutes } from './lectures.routes';
import { ProgressRoutes } from './progress.routes';
import { CourseRoutes } from './courses.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/modules',
    route: ModuleRoutes,
  },
   {
    path: '/lectures',
    route: LectureRoutes,
  },
    {
    path: '/progress',
    route: ProgressRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;