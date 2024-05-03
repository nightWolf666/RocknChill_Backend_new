import { Router } from "express";
import {getUsers,getUser,insertNewUser,updateUser} from '../controllers/userController.js';
//import {getUser,insertNewUser} from '../controllers/userController.js';



export const userRouter = Router();


userRouter.route('/').post(insertNewUser);
userRouter.route('/').get(getUsers);
userRouter.route('/:id').get(getUser).put(updateUser);

