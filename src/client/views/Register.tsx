import React from 'react';
import { useHistory } from 'react-router';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const Register = () => {
    const history = useHistory();
    const { values, handleChanges } = useForm();
    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { name: values.name, email: values.email, password: values.password, role: 'guest'})
            .then(token =>{
                localStorage.setItem('token', token.token);
                history.push('/profile');
            })
    }
    return (
        <RootLayout>
            <form className="form-group">
            <label htmlFor="">Name</label>
                <input 
                name="name"
                value={values.name || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="">Email</label>
                <input 
                name="email"
                value={values.email || ''}
                onChange={handleChanges}
                type="email" 
                className="form-control" />
                <label htmlFor="">Password</label>
                <input
                name="password"
                value={values.password || ''}
                onChange={handleChanges} 
                type="password" 
                className="form-control" />
                <button onClick={handleRegister} className="btn btn-primary">Login</button>
            </form>
        </RootLayout>
    )
}

export default Register;
