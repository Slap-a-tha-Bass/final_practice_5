import * as express from 'express';
import { Books } from '../../../../types';
import { get_books, get_one_book, edit_book, post_book, delete_book } from '../../db/queries/books';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await get_books();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error: error.sqlMessage})
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [book] = await get_one_book(Number(id));
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error fetching book", error: error.sqlMessage})
    }
});
router.post('/', async (req, res) => {
    let id = 0;
    const { title, author, price, categoryid } = req.body;
    const newBook: Books = { title, author, price, categoryid };
    try {
        await post_book(newBook, id++);
        res.json({ message: "Book created!", id});
    } catch (error) {
        res.status(500).json({ message: "Error posting books", error: error.sqlMessage})
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, price, categoryid } = req.body;
    const editBook: Books = { title, author, price, categoryid };
    try {
        await edit_book(editBook, Number(id));
        res.json({ message: "Book edited"});
    } catch (error) {
        res.status(500).json({ message: "Error editing books", error: error.sqlMessage})
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await delete_book(Number(id));
        res.json({ message: "Book deleted!"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting books", error: error.sqlMessage})
    }
});

export default router;