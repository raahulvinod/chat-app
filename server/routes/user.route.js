import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { getUsersSideBar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', verifyToken, getUsersSideBar);

export default router;
