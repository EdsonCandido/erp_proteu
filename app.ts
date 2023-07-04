import express  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { createStream } from 'rotating-file-stream';
import morgan from 'morgan';

import cors from 'cors';

import {routers} from './routes';


var app = express();

const accessLogStream = createStream('access.log', {
    size: "10M", // rotate every 10 MegaBytes written
    // interval: "1d", // rotate daily
    compress: "gzip", // compress rotated files
    path: path.join(__dirname, 'logs')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routers);

export {app} ;
