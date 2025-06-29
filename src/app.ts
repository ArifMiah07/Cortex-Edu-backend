import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';
const app : Application = express();

app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        credentials: true,
    }
))


app.use('/api/v1', router);

app.get('/', (req: Request, res: Response)=> {
    res.send('Cortex Server is running...');
})

app.use(globalErrorHandler);

export default app;
