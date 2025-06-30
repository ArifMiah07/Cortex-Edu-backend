

import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { progressValidation } from '../validation/progress.validation';
import { ProgressController } from '../controller/progress.controller';

const router = express.Router();

// Get progress for a user & course
router.get('/course/:courseId', ProgressController.getUserProgress);

// Mark lecture as complete (sequential unlock)
router.post(
  '/complete',
  validateRequest(progressValidation.createProgressValidationSchema),
  ProgressController.markLectureComplete
);

// Update progress
router.put(
  '/update',
  validateRequest(progressValidation.updateProgressValidationSchema),
  ProgressController.updateProgress
);

export const ProgressRoutes = router;
