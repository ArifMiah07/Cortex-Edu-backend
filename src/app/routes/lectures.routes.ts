

import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { lectureValidation } from '../validation/lectures.validation';
import { LectureController } from '../controller/lectures.controller';


const router = express.Router();

// Create Lecture
router.post(
  '/',
  validateRequest(lectureValidation.createLectureValidationSchema),
  LectureController.createLecture
);

// Get all Lectures (optionally filterable)
router.get('/', LectureController.getAllLectures);

// Get Lectures by Course
router.get('/course/:courseId', LectureController.getLecturesByCourse);

// Get Lectures by Module
router.get('/module/:moduleId', LectureController.getLecturesByModule);

// Update Lecture
router.put(
  '/:id',
  validateRequest(lectureValidation.updateLectureValidationSchema),
  LectureController.updateLecture
);

// Delete Lecture
router.delete('/:id', LectureController.deleteLecture);

export const LectureRoutes = router;
