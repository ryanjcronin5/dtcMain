import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const isFormFilled = username && password;

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!isFormFilled) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/login.php', {
                username: username,
                password: password,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="px-6 lg:px-48 xl:px-72 bg-dark-500 h-screen">
            <div className="text-white">
                <div className="w-full bg-dark-200 rounded-md py-4 px-4">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block mb-2 font-medium">Name:
                            </label>
                            <input 
                                id="name"  
                                type="text" 
                                value={username} 
                                onChange={handleUsernameChange} 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                                required 
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="psw"
                                className="block mb-2 font-medium">Password:
                            </label>
                            <input 
                                id="psw"
                                type="password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                                required 
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            {isFormFilled ? (
                                <div className="transition hover:translate-y-[-8px]">
                                    <button 
                                        type="submit" 
                                        className="mt-7 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Send message
                                    </button>
                                </div>
                            ) : (
                                <p className="mt-7 text-gray-400">Fill in all fields to submit.</p>
                            )}
                        </div>
                    </form>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
