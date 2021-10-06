import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import { apiService } from '../utils/api-service';

const Books = () => {

    const [books, setBooks] = useState<Books[]>([]);
    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data));
    }, [])
    return (
        <div className="text-center">
            <h1 className="text-primary mt-2">books</h1>
            {books.map((book) => (
                <Link key={book.id} to={`/books/${book.id}`}><BookCard {...book} /></Link>
            ))}
        </div>
    )
}

export default Books;
