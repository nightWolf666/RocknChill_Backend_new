import express from 'express';
import { userRouter }  from './routes/userRouter.js';
import { eventRouter }  from './routes/eventRouter.js';
import { errorHandler }  from './middleware/errorHandler.js';
import * as path from 'path';
import cors from 'cors';

const app = express();
app.use(cors({origin:'*'}));
app.use(express.static('.'));
app.use('/images', express.static('images'));

// app.set("views", './views');
// app.set("view engine", "pug");

console.log('Hi there')
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/user", userRouter);
app.use("/event", eventRouter);


app.use(errorHandler);

// app.get('*', (req,res) => {
//   res.status(404);
// })

export default app;