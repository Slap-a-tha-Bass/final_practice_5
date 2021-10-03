import * as express from 'express';
import booksRouter from './books';
import usersRouter from './users';
import categoriesRouter from './categories';

const router = express.Router();

router.use('/books', booksRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);

export default router;