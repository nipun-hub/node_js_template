import express from 'express';
import userController from '../controllers/user.controller.js';

const useRouter = express.Router();

// Complete routes for user operations
useRouter.get('/', userController.getAllUsers);
useRouter.get('/:id', userController.getUserById);
useRouter.post('/', userController.createUser);
useRouter.put('/:id', userController.updateUser);
useRouter.delete('/:id', userController.deleteUser);

export default useRouter;

