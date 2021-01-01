import express from 'express';
import { indexPage, secondIndexPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/2', secondIndexPage);

export default indexRouter;