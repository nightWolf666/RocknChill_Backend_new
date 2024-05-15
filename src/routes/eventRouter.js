import { Router } from "express";
import {getEvents,getEvent,insertNewEvent,updateEvent,deleteEvent} from '../controllers/eventController.js';
//import {getUser,insertNewUser} from '../controllers/userController.js';



export const eventRouter = Router();


eventRouter.route('/').post(insertNewEvent);
eventRouter.route('/user/:id').get(getEvents);
eventRouter.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent);

