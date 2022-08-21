import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database/mongo.database.js';
import {} from 'dotenv/config';

const port = process.env.PORT_PROD ?? process.env.PORT_DEV;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
