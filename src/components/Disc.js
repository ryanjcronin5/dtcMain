import DiscCard from "./DiscCard.js"

export default function Disc(){
    return (
        <>
            <div id="prog" className="mt-4 text-white">
                <h1 className="text-2xl font-bold">Programming Languages</h1>
                <p className="font-light text-gray-400">Subtitle idk</p>

                <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5 first:pt-0 last:mb-0">
                {/*<div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">*/}
                    <DiscCard
                        title="The consequences of programming language development"
                        subtitle="The evolution of programming languages has far-reaching consequences that shape the way we create, manage, and maintain software systems. These consequences impact developers, businesses, and the technology landscape as a whole."
                        li1="Efficiency and Productivity"
                        li1Text="New programming languages often introduce more efficient and expressive ways to write code, enhancing developers' productivity and allowing them to accomplish tasks with fewer lines of code."
                        li2="Compatibility and Interoperability"
                        li2Text="The development of new languages can lead to challenges in compatibility and interoperability with existing systems, as different languages might not seamlessly interact or share resources."
                        li3="Learning Curve"
                        li3Text="The introduction of new programming languages requires developers to invest time and effort into learning the syntax, features, and best practices, potentially slowing down development initially."
                        li4="Innovation and Problem Solving"
                        li4Text="New languages can open up avenues for solving problems that were previously difficult to tackle. They might introduce novel concepts and paradigms that inspire innovative solutions."
                        li5="Community and Ecosystem"
                        li5Text="As programming languages gain traction, they attract communities of developers, leading to the creation of libraries, frameworks, and tools that enrich the development ecosystem."
                        li6="Long-Term Maintenance"
                        li6Text="With the continuous development of programming languages, businesses and developers face decisions about adopting new languages or sticking with existing ones. This choice can have long-term implications for software maintenance and support."
                        textOut="Programming language development significantly influences how software is designed, implemented, and maintained, shaping the technological landscape and influencing the strategies and decisions of developers and organisations."
                    />
                    <DiscCard
                        title="The responsibilities of technologists in programming language development"
                        subtitle="Technologists engaged in programming language development bear critical responsibilities that extend beyond code creation. Their decisions have profound implications for the developer community, industry standards, and the overall technology landscape."
                        li1="Usability and Accessibility"
                        li1Text="Technologists must prioritize creating languages that are intuitive and accessible, ensuring that developers of various skill levels can use them effectively."
                        li2="Safety and Security"
                        li2Text="Building languages with strong type systems and security features can help prevent common programming errors and vulnerabilities, enhancing the reliability of software."
                        li3="Documentation and Education"
                        li3Text="Providing comprehensive documentation and educational resources empowers developers to understand and adopt the language efficiently."
                        li4="Community Engagement"
                        li4Text="Fostering an inclusive and collaborative community around the language encourages knowledge-sharing, support, and the development of complementary tools."
                        li5="Evolvability"
                        li5Text="Technologists should design languages that can evolve without causing major disruptions, enabling the introduction of new features and improvements over time."
                        li6="Compatibility"
                        li6Text="Ensuring backward compatibility and smooth integration with existing technologies minimizes friction during adoption and migration."
                        textOut="In essence, technologists crafting programming languages carry the responsibility of shaping the foundation on which countless software systems will be built. Their decisions impact the efficiency, security, and creativity of developers, and their work can catalyze innovation across industries."
                    />
                    <DiscCard
                        title="Technological intervention challenges people's perceptions of what it means to be human"
                        subtitle="Technological intervention in various aspects of human life challenges and reshapes conventional perceptions of human existence, blurring the boundaries between the biological and the artificial. As technology becomes more integrated into our lives, it prompts contemplation and reevaluation of fundamental human attributes and capabilities."
                        li1="Enhanced Abilities"
                        li1Text="Technologies like prosthetics, brain-computer interfaces, and genetic engineering allow humans to surpass their natural limitations, leading to discussions about the essence of human potential."
                        li2="Digital Identities"
                        li2Text="Online presence, social media, and virtual reality create new dimensions of identity, raising questions about the authenticity and permanence of digital selves."
                        li3="Ethical Dilemmas"
                        li3Text="Technological interventions like gene editing and AI-driven decision-making prompt ethical debates on what interventions are acceptable and whether they compromise our inherent humanity."
                        li4="Transhumance"
                        li4Text="The pursuit of enhanced human capabilities through technology challenges notions of biological boundaries and sparks discussions about the merging of human and machine."
                        li5="Existential Questions"
                        li5Text="Automation and AI provoke reflections on the nature of work, purpose, and the role of humans in a world where machines perform tasks once thought uniquely human."
                        li6="Cultural Shifts"
                        li6Text="Changing interactions due to technology challenge cultural norms, impacting how we form relationships, share experiences, and express emotions."
                        textOut="In essence, technological interventions compel us to redefine our understanding of human nature, identity, and potential, fostering a profound and ongoing dialogue about the essence of being human in an increasingly technologically augmented world."
                    />
                    <DiscCard
                        title="How the consequences of the development has influenced the responsibilities of technologists"
                        subtitle="The consequences of technological development have significantly reshaped the responsibilities of technologists, placing them at the forefront of addressing new challenges and ethical considerations that arise from innovation. As technology becomes increasingly integrated into society, technologists are tasked with a broader range of duties that extend beyond technical proficiency."
                        li1="Ethical Considerations"
                        li1Text="Technologists must now navigate complex ethical dilemmas related to privacy, data security, algorithmic bias, and the potential societal impact of their creations."
                        li2="Sustainability and Environmental Impact"
                        li2Text="With growing awareness of environmental concerns, technologists are responsible for developing sustainable solutions and minimizing the ecological footprint of their technologies."
                        li3="User-Centered Design"
                        li3Text="Prioritizing user experience and accessibility has become paramount, requiring technologists to design technologies that cater to diverse needs and demographics."
                        li4="Social and Cultural Awareness"
                        li4Text="Technologists must be attuned to the cultural and social implications of their creations, addressing issues of representation and avoiding reinforcement of harmful stereotypes."
                        li5="Regulatory Compliance"
                        li5Text="As technology evolves, adherence to legal and regulatory frameworks becomes essential, necessitating a deeper understanding of the legal landscape."
                        li6="Long-Term Consequences"
                        li6Text="Technologists must anticipate and plan for the potential long-term effects of their innovations, ensuring that technologies remain viable and beneficial over time."
                        textOut="In essence, the consequences of technological development have transformed technologists into multidimensional professionals who must not only excel in technical skills but also navigate complex ethical, social, and environmental considerations to create technologies that positively contribute to society."
                    />
                    <DiscCard
                        title="The probable future developments to programming languages"
                        subtitle="The future of programming languages holds the promise of transformative innovations that will shape how developers create, deploy, and maintain software. Emerging trends and technologies are likely to drive these developments, paving the way for more efficient, versatile, and user-centric programming languages."
                        li1="Domain-Specific Languages (DSLs)"
                        li1Text="Programming languages tailored for specific industries or tasks will continue to rise, enhancing productivity by offering specialized solutions."
                        li2="AI-Driven Coding Assistance"
                        li2Text="AI-powered tools will provide real-time code suggestions, automated bug detection, and even generate code snippets based on natural language descriptions."
                        li3="Concurrency and Parallelism"
                        li3Text="Languages will increasingly support efficient utilization of multicore processors and distributed systems, enabling better performance."
                        li4="Quantum Computing Languages"
                        li4Text="As quantum computing advances, languages will emerge to harness its power, enabling developers to create quantum algorithms."
                        li5="Language Interoperability"
                        li5Text="Improved interoperability between languages will allow seamless integration of components written in different languages, enhancing flexibility."
                        li6="Privacy and Security Focus"
                        li6Text="Future languages may include built-in security features to mitigate vulnerabilities and protect user data by design."
                        textOut="In essence, the future of programming languages will be marked by adaptability to new technologies, streamlined development processes, and a stronger emphasis on collaboration between human developers and advanced AI systems."
                    />
                </div>
            </div>
            <div id="llm" className="mt-4 text-white">
                <hr className="w-full mt-8 md:h-2" alt="hr" />
                <h1 className="text-2xl font-bold">Large Language Models</h1>
                <p className="mt-2 font-light text-lg text-gray-400">
                    Large language models are essentially 'next word predictors', which use an algorithm to predict the next word of text, based on what it has already seen. This uses pre-trained data that analyses the text to predict the most likely answer based on probability. Then it continues to do this until the answer is complete.
                </p>
                
                <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5 first:pt-0 last:mb-0">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-4 flex-grow">
                        <p className="font-normal md:text-lg">
                            An LLM uses machine-learning natural language processing, NLP, to be trained. This is done by feeding the model with data input and output sets. Information is read, or content entered, and the output is based on what the algorithm predicts the next word will be. The input could be proprietary private data, or in the case of OpenAI chatbots like ChatGPT, whatever data is fed and found off of the internet.
                        </p>
                        <p className="mt-2 font-normal md:text-lg">
                            Language models have been present since 1966 with the release of ELIZA. ELIZA, an early chatbot, is often used as a cautionary tale in the discussion of AI, symbolising the scepticism that surrounds their capabilities. While historically relevant, it differs significantly from modern AI developments like LLMs. ELIZA's deterministic approach differs with the stochastic nature of LLMs, which utilise complex innovations such as deep learning and transformers. The chatbot revealed that humans tend to assign intelligence to nin-intelligent systems due to our limited understanding. All in all, ELIZA's significance lies in its historical context, underlining the challenges of defining consciousness with the field of cutting edge AI.  
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-3 flex-grow">
                        <p className="font-normal md:text-lg">
                            There are many challenges and implications associated with large language models, particularly related to biases, training data and prompt engineering.
                        </p>
                        <p className="mt-2 font-normal md:text-lg">
                            LLMs, such as ChatGPT, can hold biases based on the data they've ingested from the internet and developers. These biases, even if not intentional, can lead to gender or other forms of bias in responses, which can have real-world consequences if used in applications, such as hiring processes.
                        </p>
                        <p className="mt-2 font-normal md:text-lg">
                            LLMs are trained on massive amounts of data from various sources to produce human-like responses. However, there is push towards customising these models for specific tasks to reduce their reliance on vast datasets. An example of this is Google's PaLM 2 LLM, which uses more specific training data for advanced tasks.
                        </p>
                        <p className="mt-2 font-normal md:text-lg">
                            Prompt engineering is the process of creating and optimising text prompts to guide LLMs' responses towards desired outcomes. This is becoming an essential skill for IT and business professionals who want to tailor LLMs to their specific industries or organisations, leading to a need for prompt guides and possibly marketplaces for prompts.
                        </p>
                        <p className="mt-2 font-normal md:text-lg">
                            While larger LLMs can be expensive and resource-intensive to train, there is a growing understanding that smaller models trained on specific or targeted datasets can perform just as well or even better in these tasks, offering accuracy and cost advantages.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-3 flex-grow">
                        <p className="font-normal md:text-lg">
                            Large language models have become a dominant way to build AI systems, though these have been primarily used in English markets, leaving the world's other 7,000 languages left behind. Due to the English market for this tool being considered larger than other languages, development of English based systems have been the focus. Though one company has put their hat in the ring and developed BLOOM, BigScience Large Open-science Open-access Multilingual Language Model. BLOOM has 176 billion parameters, and is able to generate text in 46 natural languages and 13 programming languages. By having models that can aid different languages, the door is opened to allow more collaboration between languages and geographical groups.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5">
                <DiscCard
                    title="Ethical issues for large language models"
                    li1="Hallucination"
                    li1Text="The tendency to produce false or misleading information using their internal patterns and biases."
                    li2="Emergent behaviors"
                    li2Text="The possibility of formulating prolonged plans, pursuing undefined objectives, and striving to acquire authority or additional resources."
                    li3="Misuse"
                    li3Text="The potential for generating convincing text that can be used for nefarious purposes, such as disinformation campaigns or online harassment."
                    li4="Responsibility"
                    li4Text="The difficultly of assigning accountability and liability for the outputs generated by large language models."
                    li5="Risks of harm"
                    li5Text="The various social and ethical harms that can result from the use of large language models, such as bias, discrimination, privacy violation and manipulation."
                    li6="Education"
                    li6Text="The practical and ethical challenges of using large language models in education settings, such as quality assurance, pedagogical alignment and feedback provision."
                />
                <DiscCard
                    title="There can be bias in large language models"
                    subtitle="Bias is the tendency to favour or disfavour certain groups, individuals, or attributes over others, based on stereotypes or prejudices. Bias can affect the quality, fairness, and trustworthiness of the outputs generated by large language models. Bias can creep into large language models from various sources, such as:"
                    li1="Training data"
                    li1Text=""
                    li2="Model specifications"
                    li2Text=""
                    li3="Algorithmic constraints"
                    li3Text=""
                    li4="Product design"
                    li4Text=""
                />
                </div>
                <hr className="w-full mt-8 md:h-3" alt="hr" />
            </div>
        </>
    )
}
