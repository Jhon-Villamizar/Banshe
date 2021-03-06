import { Router } from 'express';
import { getAllData, getOneData, createRegister, updateRegister } from '../controllers/seller.controller';
const router = Router();

router.get('/', getAllData);
router.post('/create', createRegister);
router.put('/update', updateRegister);
router.post('/read', getOneData);

export default router;