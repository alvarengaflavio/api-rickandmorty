const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./database/mongo.database');
const characterRoute = require('./characters/character.route');
const userRoute = require('./users/user.route');
const authRoute = require('./auth/auth.route');
const swaggerRoute = require('./swagger/swagger.route');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT_PROD ?? process.env.PORT_DEV;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use('/characters', characterRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
