import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleUsernameChange = (e) => {setUsername(e.target.value);};
    const handlePasswordChange = (e) => {setPassword(e.target.value);};
    const handleEmailChange = (e) => {setEmail(e.target.value);};
    const handleSignup = async (e) => {e.preventDefault(); try {const response = await axios.post('http://localhost:8000/signup.php', {username: username, email: email, password: password,}); setMessage(response.data.message);} catch (error) {console.error('Error signing up:', error);}};

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name:</label>
                    <input id="name" type="text" value={username} onChange={handleUsernameChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2 font-medium'>Email:</label>
                    <input id="email" type='text' value={email} onChange={handleEmailChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                </div>
                <div>
                    <label htmlFor='password' className='block mb-2 font-medium'>Password:</label>
                    <input id="password" type="password" value={password} onChange={handlePasswordChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                </div>
                <button type="submit">Signup</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default SignupForm;
