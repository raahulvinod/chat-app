import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

import connectDb from './config/dbConnect.js';
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import userRoute from './routes/user.route.js';
import { app, server } from './socket/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.ORIGIN || 'http://localhost:3000';

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// CORS configuration
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);

// Route configurations
app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRoute);

// Start server
server.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
