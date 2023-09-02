import React, { useState, useEffect } from 'react';

function FeedbackDisplay() {
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {fetch('http://localhost:8000/getFeedback.php').then(response => response.json()).then(data => {setFeedback(data); setIsLoading(false);}).catch(error => {console.error("Error fetching data:", error); setIsLoading(false);});}, []);

    return (
        <div className='mt-4 text-white'>
            <hr className="w-full mt-8 md:h-2" alt="hr" />
            {isLoading ? (
                <p className='hover:bg-dark w-full h-fit bg-dark-200 rounded-md py-4 px-4 my-2 md:my-4 md:w-1/2 md:m-auto md:px-40'>Loading...</p>
            ) : feedback.length === 0 ? (
                <p className='hover:bg-dark w-full h-fit bg-dark-200 rounded-md py-4 px-4 my-2 md:my-4 md:w-1/2 md:m-auto text-center'>No feedback records available.</p>
            ) : (
                feedback.map(item => (
                    <div key={item.id} className='hover:bg-dark w-full h-fit bg-dark-200 rounded-md py-4 px-4 my-2 md:my-4 md:w-1/2 md:m-auto md:px-32'>
                        <p className='md:text-lg text-center md:text-left'>{item.fullname}:</p>
                        <p className='md:text-lg font-light text-center md:text-left'>{item.subject}</p>
                        <p className='text-justify font-light md:text-left'>{item.msg}</p>
                    </div>
                ))
            )}
            <hr className="w-full md:h-2" alt="hr" />
        </div>
    );
}

export default FeedbackDisplay;
