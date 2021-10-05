import React, { useEffect, useState } from 'react';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';
import {useForm} from '../hooks/useForm';
import { useHistory, useParams } from 'react-router';

const EditDetails = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const { values, handleChanges, populate } = useForm();

    const [categories, setCategories] = useState<Categories[]>([]);

    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}/edit`, 'PUT', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid})
            .then(data => {
                history.push('/books')
            })
    }
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(values => {
                populate(values);
            })
    }, []);
    return (
        <RootLayout>
            <h1 className="text-primary text-left">home</h1>
            <form className="form-group">
                <label htmlFor="">Title</label>
                <input
                name="title"
                value={values.title || ''}
                onChange={handleChanges} 
                type="text" 
                className="form-control" />
                <label htmlFor="">Author</label>
                <input 
                name="author"
                value={values.author || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="">Price</label>
                <input 
                name="price"
                value={values.price || ''}
                onChange={handleChanges}
                type="number" 
                step=".01"
                className="form-control" />
                <select 
                className="form-select" 
                aria-label="Default select example" 
                name="categoryid"
                value={values.categoryid}
                onChange={handleChanges}>
                    <option value="0">Choose Genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </RootLayout>
    )
}

export default EditDetails;
