import express from 'express';
import { indexPage, secondIndexPage, messagesPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/2', secondIndexPage);
indexRouter.get('/messages', messagesPage)

export default indexRouter;