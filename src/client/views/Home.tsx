import React, { useState, useEffect } from 'react';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';
import {useForm} from '../hooks/useForm';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const { values, handleChanges } = useForm();

    const [categories, setCategories] = useState<Categories[]>([]);

    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])
    let disabledButton = true;
    if(values.title && values.author && values.price && values.categoryid){
        disabledButton = false;
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values.title || !values.author || !values.price || !values.categoryid){
            alert('Please fill out all required fields!');
            return;
        }
        apiService('/api/books', 'POST', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid})
            .then(data => {
                history.push('/books')
            })
    }
    
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
                onChange={handleChanges}>
                    <option value="0">Choose Genre</option>
                    {categories.map((values) => (
                        <option value={values.id} key={values.id}>
                            {values.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSubmit} className="btn btn-primary mx-2" disabled={disabledButton} >Submit</button>
                <Link to="/profile" className="btn btn-primary mx-2">Profile</Link>
            </form>
        </RootLayout>
    )
}

export default Home;
