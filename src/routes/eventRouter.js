import { Router } from "express";
import {getEvents,getEvent,insertNewEvent,updateEvent} from '../controllers/eventController.js';
//import {getUser,insertNewUser} from '../controllers/userController.js';



export const eventRouter = Router();


eventRouter.route('/').post(insertNewEvent);
eventRouter.route('/').get(getEvents);
eventRouter.route('/:id').get(getEvent).put(updateEvent);

