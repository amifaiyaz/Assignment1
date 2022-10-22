/*Name:Faiyaz Muhammad
Student id: 301227442
Date: october 7th 2022*/

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

let localStrategy = passportLocal.Strategy;

import User from './models/user.js';

import mongoose from 'mongoose';

import { MongoURI, Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'
import contactsRouter from './routes/contacts.route.server.js';
import authRouter from './routes/auth.route.server.js';

const app = express();

// Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));


app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/', contactsRouter);
app.use('/', authRouter);


export default app;