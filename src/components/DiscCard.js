import React, { useEffect, useRef } from 'react';

export default function DiscCard(props){
    const h1Ref = useRef(null);

    useEffect(() => {
      if (h1Ref.current) {
        const h1TextLength = h1Ref.current.textContent.length;
        const parentDiv = h1Ref.current.parentElement.parentElement;
        parentDiv.style.width = `${h1TextLength}ch`;
      }
    }, []);

    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="500" 
            data-aos-offset="100" 
            className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 flex-grow">
            <div className="mt-2">
                <h1 ref={h1Ref} className="font-bold md:text-xl">{props.title}</h1>
                <p className="mt-1 whitespace-pre-wrap font-light text-justify md:text-lg">{props.subtitle}</p>
                <ul className="list-decimal list-inside mt-2">
                    <li><b>{props.li1}</b>: {props.li1Text}</li>
                    <li><b>{props.li2}</b>: {props.li2Text}</li>
                    <li><b>{props.li3}</b>: {props.li3Text}</li>
                    <li><b>{props.li4}</b>: {props.li4Text}</li>
                    <li><b>{props.li5}</b>: {props.li5Text}</li>
                    <li><b>{props.li6}</b>: {props.li6Text}</li>
                </ul>
                <p className="mt-2 font-normal md:text-lg">{props.textOut}</p>
            </div>
        </div>
    )
}
