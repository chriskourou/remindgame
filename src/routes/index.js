import express from 'express';
import { indexPage, secondIndexPage, messagesPage, addMessage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/2', secondIndexPage);
indexRouter.get('/messages', messagesPage)
indexRouter.post('/messages', addMessage);

export default indexRouter;