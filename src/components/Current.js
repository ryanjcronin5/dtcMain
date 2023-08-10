import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CurrentCard from "./CurrentCard.js"

import javascript from "../assets/current/javascript.svg"
import python from "../assets/current/python.svg"
import html from "../assets/current/html.svg"
import csharp from "../assets/current/csharp.svg"
import sql from "../assets/current/sql.jpg"

export default function Current(){
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="current" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Current Programming Languages</h1>
            <p className="font-light text-gray-400">The following is a list of vital programming languages used in the modern world.</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <CurrentCard 
                        name="Javascript" 
                        subtitle="ECMAScript 2022" 
                        content="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries." 
                        img={javascript}
                    />
                    <CurrentCard 
                        name="Python" 
                        subtitle="3.11.2" 
                        content="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming." 
                        img={python}
                    />
                    <CurrentCard
                        name="HTML"
                        subtitle="5.3"
                        content="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
                        img={html}
                    />
                    <CurrentCard
                        name="C#"
                        subtitle="11.0"
                        content="C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented and component-oriented programming. C# can be used for mobile or desktop apps, cloud-based services, website and more."
                        img={csharp}
                    />
                    <CurrentCard
                        name="SQL"
                        subtitle="Microsoft SQL Server 2022"
                        content="Structured Query Language allows programmers to access and manipulate databases. Typically used alongside Apache or PHP, the simple and standardized syntax is very appealing to programmers."
                        img={sql}
                    />
                    

                </Slider>
            </div>
            <hr className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
