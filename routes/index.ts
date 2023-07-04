import { Router } from 'express';

import usersRouter from './users' 
const routers = Router();

/* GET home page. */
routers.get('/', function(req, res, next) {

  // res.render('index', { title: 'Express' });
  res.status(200).json({data: null, message: 'API ERP'});

});

routers.use('/users/', usersRouter);

export {routers};
