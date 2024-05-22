import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDb from './config/dbConnect.js';
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import userRoute from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
