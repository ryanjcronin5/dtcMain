import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function FeedbackForm() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const isFormFilled = fullname && email && subject && message;
    const handleFullNameChange = (e) => {setFullName(e.target.value);};
    const handleEmailChange = (e) => {setEmail(e.target.value);};
    const handleSubjectChange = (e) => {setSubject(e.target.value);};
    const handleMessageChange = (e) => {setMessage(e.target.value);};
    const handleSubmit = async (e) => {e.preventDefault(); if (!isFormFilled) {alert("Please fill in all fields before submitting."); return;} const form = e.target; try {const response = await fetch(form.action, {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded",}, body: new URLSearchParams(new FormData(form)),}); if (response.ok) {const data = await response.text(); setResult(data); alert("Thank you, your message has been sent."); console.log(result);} else {console.error("Error:", response.status, response.statusText);}} catch (error) {console.error("Error submitting the form:", error);}};
    
    return (
        <div id="form" className="mt-4 text-white">
            <div className="hover:bg-dark w-full h-fit bg-dark-200 rounded-md py-4 px-4">
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                        <p className="mb-2 font-light text-center text-gray-300 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">Also, sign in to see feedback you've given.<Link to="/login" className="bg-gray-700 rounded-full md:whitespace-nowrap mx-2 px-4 py-0.5 border-dark-400 border-4">Login</Link></p>
                        
                        <form action="http://localhost:8000/insert.php" method="post" onSubmit={(event) => handleSubmit(event)} className="space-y-8">
                            <div>
                                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                                <input type="text" id="fullName" name="full_name" value={fullname} onChange={handleFullNameChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                                <input type="email" id="email" name="email"value={email} onChange={handleEmailChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" name="subject" value={subject} onChange={handleSubjectChange} className="block p-3 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" name="message" value={message} onChange={handleMessageChange} className="block p-2.5 w-full resize-none text-sm text-gray-300 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 md:resize-auto" placeholder="Leave a comment..."/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className=" transition hover:translate-y-[-10px]">
                                    {isFormFilled ? (
                                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={(event) => handleSubmit(event)}>Send message</button>
                                    ) : (
                                        <p className="text-gray-400">Fill in all fields to submit.</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}