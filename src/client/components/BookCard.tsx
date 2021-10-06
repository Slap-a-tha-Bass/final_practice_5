import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';
import RootLayout from './RootLayout';

const BookCard = ({ id, title, author, price, isPreview, categoryid }: Books ) => {
    const history = useHistory();
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(confirm(`Are you sure you want to delete ${title} by ${author}?`)){
            apiService(`/api/books/${id}/delete`, 'DELETE', { title, author, price, categoryid })
                .then(data => {
                    history.push('/books')
                })
        }
    }
    return (
        <RootLayout>
            <div className="card border shadow m-3">
                <h1 className="card-header">{title}</h1>
                <div className="card-body">
                    <h3 className="card-text">{author}</h3>
                    <p className="card-text">{price}</p>
                </div>
                <div className="d-flex justify-content-center">
                    {isPreview && <Link className="btn btn-primary mx-2" to={`/edit/${id}`}>Edit</Link>}
                    {isPreview && <button onClick={handleDelete} className="btn btn-primary mx-2" >Delete</button>}
                </div>
            </div>
        </RootLayout>
    )
}

export default BookCard;
