import express from 'express';
import cors from 'cors';

const port = process.env.PORT_PROD ?? 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
