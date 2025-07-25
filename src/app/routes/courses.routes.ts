import { Router } from 'express';
import { courseController } from '../controller/courses.controller';
import validateRequest from '../middlewares/validateRequest';
import { courseValidation } from '../validation/courses.validation';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

// create course
router.post('/create-course', requireAuth ,validateRequest(courseValidation.createCourseValidationSchema), courseController.createCourse);//admin
// get all course
router.get('/all-courses', courseController.getAllCourses);
// get a single course
router.get('/single-course/:courseId', requireAuth, courseController.getSingleCourse);
// update a course
router.patch('/update-course/:courseId', requireAuth, validateRequest(courseValidation.updateCourseValidationSchema) ,courseController.updateCourse);//admin
// delete a course
router.delete('/delete-course/:courseId',requireAuth, courseController.deleteCourse);

export const CourseRoutes = router;
