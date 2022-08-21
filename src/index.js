import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database/mongo.database.js';
import {} from 'dotenv/config';
import { router as characterRoute } from './characters/character.route.js';
import { router as userRoute } from './users/user.route.js';

const port = process.env.PORT_PROD ?? process.env.PORT_DEV;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use('/characters', characterRoute);
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
