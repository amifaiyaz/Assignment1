/*Name:Faiyaz Muhammad
Student id: 301227442
Date: october 7th 2022*/

import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import { Secret } from "../config/config.js";

import indexRouter from './routes/index.route.server.js';

const app = express();

app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false})); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); 

app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

app.use('/', indexRouter);

export default app;