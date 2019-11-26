import { Router } from 'express';
import { getAllData, getOneData, createRegister, updateRegister, getByClientData } from '../controllers/visit.controller';
const router = Router();

router.get('/', getAllData);
router.post('/create', createRegister);
router.put('/update', updateRegister);
router.post('/read', getOneData);
router.post('/getByClient', getByClientData);

export default router;