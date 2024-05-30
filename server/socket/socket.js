import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST'],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != 'undefined') userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  socket.emit('getOnlineUsers', Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and serer side.
  socket.on('disconnect', (socket) => {
    console.log('a user disconnected', socket.id);
    delete userSocketMap[userId];
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
