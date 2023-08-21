import React, { useState } from 'react';

export default function DiscCard3(props) {
    const [expandedList, setExpandedList] = useState(null);

    const toggleExpanded = (index) => {
        if (expandedList === index) {
            setExpandedList(null);
        } else {
            setExpandedList(index);
        }
    };

    return (
        <div data-aos={window.innerWidth > 768 ? 'fade-up' : null} data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-full bg-dark-200 rounded-md py-4 px-4 md:m-4 flex-grow tracking-wide md:tracking-normal text-boxColor">
            <div>
                <h1 className="font-mono md:text-lg lg:text-xl capitalize text-yellow-300 relative">{props.title}<span style={{display: 'inline-block', width: '0.6em', height: '3px', backgroundColor: '#fbbf24', marginLeft: '2px', animation: 'pulse 1.5s infinite',}}></span></h1>
                <p className="mt-1 font-light text-left md:text-left lg:text-justify text-sm md:text-lg">{props.subtitle}</p>
                <ul className="text-sm md:text-base">
                    {Array.from({ length: 3 }, (_, index) => (
                        <li key={index} className={`mt-2 md:mt-2 lg:mt-1 cursor-pointer bg-dark-400 rounded-md p-2 ${expandedList === index ? 'font-bold' : ''} ${expandedList === index ? 'bg-dark-50' : 'hover:bg-dark-50'}`} onClick={() => toggleExpanded(index)}>{props[`li${index + 1}`]}{expandedList === index && (<div className="mt-1 font-normal text-sm md:text-base">{props[`li${index + 1}Text`]}</div>)}</li>
                    ))}
                </ul>
                <p className="mt-2 font-light text-left md:text-left lg:text-justify text-sm md:text-lg">{props.textOut}</p>
            </div>
        </div>
    );
}