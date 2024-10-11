import express from 'express';
import { getAllStudents, addStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents); 
router.post('/', addStudent);   
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent); 

export default router;