import React from 'react';
import { useHistory } from 'react-router';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const Login = () => {
    const history = useHistory();
    const { values, handleChanges } = useForm();
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email: values.email, password: values.password, role: 'guest'})
            .then(token =>{
                localStorage.setItem('token', token);
                history.push('/profile');
            })
    }
    let disabledButton = true;
    if(values.email && values.password){
        disabledButton = false;
    }
    return (
        <RootLayout>
            <form className="form-group">
                <h1 className="text-primary">login</h1>
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
                <button onClick={handleLogin} className="btn btn-primary" disabled={disabledButton}>Login</button>
            </form>
        </RootLayout>
    )
}

export default Login;
