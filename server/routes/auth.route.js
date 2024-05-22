import express from 'express';

import { login, logut, signup } from '../controllers/auth.controller.js';

const router = express();

router.post('/login', login);

router.post('/signup', signup);

router.post('/logout', logut);

export default router;
