

import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { ModuleController } from '../controller/modules.controller';
import { modulesValidation } from '../validation/modules.validation';

const router = express.Router();

// Create Module
router.post(
  '/',
  validateRequest(modulesValidation.createModuleValidationSchema),
  ModuleController.createModule
);

// Get Modules by Course ID
router.get('/course/:courseId', ModuleController.getModulesByCourse);

// Update Module
router.put(
  '/:id',
  validateRequest(modulesValidation.createModuleValidationSchema),
  ModuleController.updateModule
);

// Delete Module
router.delete('/:id', ModuleController.deleteModule);

export const ModuleRoutes = router;
