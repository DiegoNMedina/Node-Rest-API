import { Router } from  'express' ;
import { getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controllers.js';

const router = Router();

router.get('/employees', getEmployee)

router.post('/employees', createEmployee)

router.put('/employees/', updateEmployee)

router.delete('/employees/', deleteEmployee)

export default router;