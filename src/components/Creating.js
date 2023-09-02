import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CreatingCard from "./CreatingCard";
import { useState, useEffect } from "react";

import react from "../assets/creating/react.png";
import tailwind from "../assets/creating/tailwindcss.png";
import xampp from "../assets/creating/xampp.png";


export default function Creating() {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [autoPlay, setautoplay] = useState(true);
    function scaleWidth(x) {if(x.matches) {setSlidesToShow(1); setautoplay(false);} else {setSlidesToShow(3); setautoplay(true);}}
    useEffect(() => {var x = window.matchMedia("(max-width: 700px"); x.addEventListener('change', scaleWidth); scaleWidth(x); return () => {x.removeEventListener('change', scaleWidth);};}, []);
    var settings = {dots: false, autoplay: autoPlay, infinite: true, slidesToShow: slidesToShow, slidesToScroll: 1};

    return (
        <div id="creating" className="mt-4 text-white scroll-my-24">
            <h1 className="text-xl text-center md:text-2xl font-bold">Tools used to make this website</h1>
            <div className="mt-4">
                <Slider {...settings}>
                    <CreatingCard name="Reactjs" subtitle="React 18" content="I choose to use Reactjs for this project as it is (to me) a new tool. Working with the different files and components provided a challenge that I would otherwise have not faced with HTML. Some issues arose when I had to connect to php and sql, but XAMPP was able to fix those issues." img={react}/>
                    <CreatingCard name="Tailwindcss" subtitle="Tailwind 3.2" content="I have grown accustomed to using this framework, it allows me to easily change css attributes from the html elements directly."img={tailwind}/>
                    <CreatingCard name="XAMPP" subtitle="Stable release 8.2.4" content="XAMPP allowed me to connect to a phpmyadmin page, rather than projectspace." img={xampp}/>
                </Slider>
                <p className="mt-4">For list of dependencies refer to <a className="text-blue-600 visited:text-purple-600 target:shadow-lg" href="https://raw.githubusercontent.com/ryanjcronin5/dtcMain/main/package.json">package.json</a></p>
            </div>
            <hr className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}