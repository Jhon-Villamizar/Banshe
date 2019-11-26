import { Router } from 'express';
import { getAllData, getOneData, createRegister, updateRegister, getByCountryData } from '../controllers/state.controller';
const router = Router();

router.get('/', getAllData);
router.post('/create', createRegister);
router.put('/update', updateRegister);
router.post('/read', getOneData);
router.post('/getByCountry', getByCountryData);

export default router;