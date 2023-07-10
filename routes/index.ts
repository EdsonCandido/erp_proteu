import { Router } from 'express';

import usersRouter from './users' 
import sessionRouter from './session';
const routers = Router();

/* GET home page. */
routers.get('/', function(req, res, next) {
  res.status(200).json({data: null, message: 'API ERP'});

});

routers.use('/users/', usersRouter);
routers.use('/session/', sessionRouter);

export {routers};
