import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signup.php', {
                username: username,
                password: password,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit">Signup</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default SignupForm;
