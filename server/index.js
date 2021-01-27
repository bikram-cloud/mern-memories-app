import express from 'express';
import cors from 'cors';
import colors from 'colors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config({ path: './config/config.env' });

const app = express();

connectDB();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 9000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
