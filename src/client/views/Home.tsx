import React, { useState, useEffect } from 'react';
import { Categories } from '../../../types';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';
import {useForm} from '../hooks/useForm';

const Home = () => {
    const { values, handleChanges } = useForm();

    const [categories, setCategories] = useState<Categories[]>([]);

    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])

    return (
        <RootLayout>
            <h1 className="text-primary text-left">home</h1>
            <form className="form-group">
                <label htmlFor="">Title</label>
                <input
                name="title"
                value={values.title}
                onChange={handleChanges} 
                type="text" 
                className="form-control" />
                <label htmlFor="">Author</label>
                <input 
                name="author"
                value={values.author}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="">Price</label>
                <input 
                name="price"
                value={values.price}
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
                <button className="btn btn-primary">Submit</button>
            </form>
        </RootLayout>
    )
}

export default Home;