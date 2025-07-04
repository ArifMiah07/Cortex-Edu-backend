import { Router } from "express";




const router = Router();

router.get('/admin', AdminController.getAllAdmin)
router.post('/admin', AdminController.createAdmin)

export const adminRoutes = router;
