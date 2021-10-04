import React from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';
import RootLayout from './RootLayout';

const BookCard = ({ id, title, author, price, isPreview }: Books ) => {
    return (
        <RootLayout>
            <div className="card">
                <h1 className="card-header">{title}</h1>
                <div className="card-body">
                    <h3 className="card-text">{author}</h3>
                    <p className="card-text">{price}</p>
                </div>
                <div className="d-flex justify-content-center">
                    {isPreview && <Link className="btn btn-primary mx-2" to={`/edit/${id}`}>Edit</Link>}
                    {isPreview && <button className="btn btn-primary mx-2" >Delete</button>}
                </div>
            </div>
        </RootLayout>
    )
}

export default BookCard;
