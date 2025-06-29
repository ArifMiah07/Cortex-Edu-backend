import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/routes/user.routes';
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        credentials: true,
    }
))


app.use('/api/v1/', userRoutes);

app.get('/', (req: Request, res: Response)=> {
    res.send('Cortex Server is running...');
})


export default app;
