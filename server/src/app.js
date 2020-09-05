/* eslint-disable import/no-extraneous-dependencies */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import routes from './routes/index';
import ErrorHandler from './helpers/errors';

const app = express();
const { logErrors } = ErrorHandler;

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', routes);
app.use(logErrors);

export default app;
