import express from 'express';
import dotenv from 'dotenv';

import authRoute from './routes/auth.route.js';
import connectDb from './config/dbConnect.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
