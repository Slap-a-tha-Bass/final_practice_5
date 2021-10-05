import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState<Users['id']>();
    useEffect(() => {
        apiService('/api/users')
            .then(data => setUser(data))
    }, []);
    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <RootLayout>
            <div className="card">
                <div className="card-header">{user}</div>
                <div className="card-body">
                    <Link to="/" className="btn btn-primary mx-2">Home</Link>
                    <button onClick={handleSignOut} className="btn btn-primary mx-2">Sign out</button>
                </div>
            </div>
        </RootLayout>
    )
}

export default Profile;
