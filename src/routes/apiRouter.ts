/**
 * Define all your API web-routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Router, Request, Response } from 'express';
import * as expressJwt from 'express-jwt';
import v1Router from './v1Router'

const router = Router();
router.get('/', (req: Request, res: Response)=>
{res.send("api")})
router.use('v1/', v1Router);

export default router;