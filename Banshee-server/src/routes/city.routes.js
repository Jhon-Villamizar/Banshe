import { Router } from 'express';
import { getAllData, getOneData, createRegister, updateRegister, getByStateData } from '../controllers/city.controller';
const router = Router();

router.get('/', getAllData);
router.post('/create', createRegister);
router.put('/update', updateRegister);
router.post('/read', getOneData);
router.post('/getByState', getByStateData);

export default router;