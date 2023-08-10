import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LangCard from "./GroundCard.js"

import qBasic from "../assets/ground/qbasic.png"
import asm from "../assets/ground/asm.png"
import scheme from "../assets/ground/scheme.png"
import pascal from "../assets/ground/pascal.png"

export default function Ground() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="ground" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Low Level programming languages</h1>
            <p className="font-light text-gray-400">Mainly outdated now, but they laid the ground work for what was to come.</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <LangCard 
                        name="qBasic" 
                        subtitle="An IDE first appearing in 1991." 
                        content="
                            QBasic is an integrated development environment and interpreter for a variety of dialects of BASIC which are based on QuickBASIC. 
                            Code entered into the IDE is compiled to an intermediate representation, and this IR is immediately executed on demand within the IDE." 
                        img={qBasic} 
                    />
                    <LangCard
                        name="Assembly"
                        subtitle="The assembler language is the symbolic programming."
                        content="
                        Assembly language is often referred to simply as Assembly and commonly abbreviated as ASM or asm.
                        ASM is any low-level programming language with a very strong correspondence between the instructions in the language and the architecture's machine code instructions."
                        img={asm}
                    />
                    <LangCard
                        name="Scheme"
                        subtitle="A dialect of the Lisp programming language family."
                        content="
                        Scheme is a classic programming language, emphasising functional programming and domain-specific languages.
                        Known for its clean and minimalist design, Scheme is one of the longest lived and best studied dynamic languages."
                        img={scheme}
                    />
                    <LangCard
                        name="Pascal"
                        subtitle="Pascal often comes under attack as a language which should be dead."
                        content="
                        Pascal is a very clean programming language, which looks more like real languages in the sense that it uses real English words as keywords rather than random ASCII characters.
                        This is important in understanding existing code as well as debugging because people do not read individual characters but whole words."
                        img={pascal}
                    />
                </Slider>
            </div>
            <hr className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}