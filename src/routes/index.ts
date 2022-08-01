import {Router} from 'express';
const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser, regexp } from '../controllers/index.controller';


router.get('/test', (req, res) => res.send('hello world'));
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);
router.get('/regexp', regexp);

export default router;