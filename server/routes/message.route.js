import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express();

router.get('/:id', verifyToken, getMessages);
router.post('/send/:id', verifyToken, sendMessage);

export default router;
