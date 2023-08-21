import DiscCard3 from "./DiscCard3.js"
import DiscCard4 from "./DiscCard4.js"
import DiscCard6 from "./DiscCard6.js"

export default function Disc(){
    return (
        <>
            <div id="prog" className="text-white scroll-my-24">
                <div className="flex flex-row">
                    <h1 className="text-xl md:text-2xl font-bold">Programming Languages</h1>
                    <p className="flex-1 text-right font-normal md:text-lg">3.8</p>
                </div>
                <p className="font-light text-gray-400">Subtitle idk</p>

                {/*<div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5 first:pt-0 last:mb-0">*/}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center pb-5 md:pb-12 gap-5">
                    <DiscCard6
                        title="The consequences of programming language development"
                        subtitle="As programming languages develop and evolve, there are far-reaching consequences that affect the ways that we design, manage and maintain software systems. These consequences impact developers, businesses, and in general, the technology sector."
                        li1="Efficiency and Productivity"
                        li1Text="New programming languages typically add more efficient and expressive ways to write code. This in turn enhances developers' productivity and allows them to do more with less lines of code."
                        li2="Compatibility and Interoperability"
                        li2Text="When updates or even new languages are released there are normally challenges with compatibility and interoperability. Meaning that developers have to stay on top of changes or even redesign systems due to the updates."
                        li3="Learning Curve"
                        li3Text="The introduction of new programming languages requires developers to spend time and effort learning the syntax, features, as well as the best practices. All of these may potentially slow down development upon release."
                        li4="Innovation and Problem Solving"
                        li4Text="New languages can provide the means for more complex problems solving that were previously difficult to tackle. These may only be small concepts or paradigms, but they could inspire pioneering solutions."
                        li5="Community and Ecosystem"
                        li5Text="As programming languages gain popularity, they attract developers, leading to libraries, frameworks, and tools that aid the developer community and ecosystem."
                        li6="Long-Term Maintenance"
                        li6Text="As programming languages continually evolve and develop, businesses and developers are faced with adopting the new tools presented to them, or stick with their current tools. This choice can have long-term implications for software maintenance and support."
                        textOut="Programming language development has a drastic influence on how software systems are designed, implemented, and maintained. The constant development shapes the technological landscape and influences the methods and decisions of developers and organisations."
                    />
                    <DiscCard6
                        title="The responsibilities of technologists in programming language development"
                        subtitle="Technologists involved in programming language development hold responsibilities that cover more than just code creation. Their decisions have far-reaching implications for the developer community, industry standards, and the overall technology landscape."
                        li1="Usability and Accessibility"
                        li1Text="Technologists have to prioritise accessibility and intuitive design when creating languages and updating existing ones. This ensures that the end users of various skill levels are able to use and understand them effectively."
                        li2="Safety and Security"
                        li2Text="By building languages that have strong type systems and security features can help limit and eliminate common programming errors and vulnerabilities, in turn improving the reliability of software produced by the language."
                        li3="Documentation and Education"
                        li3Text="Providing extensive and accessible documentation and educational resources aids and gives the developers the ability to understand and adopt the language efficiently."
                        li4="Community Engagement"
                        li4Text="Most programming languages have a strong collaborative and inclusive community behind them. Technologists need to ensure that this community is established for new languages. These communities encourage knowledge-sharing, support and can even push programmers to better themselves."
                        li5="Evolvability"
                        li5Text="Technologists need to design languages that can improve and evolve without causing major disruptions. This enables the introduction of new features that integrate seamlessly over time."
                        li6="Compatibility"
                        li6Text="Backward compatibility and smooth integration with existing technologies is important for technologist's to consider. This minimises possible issues during adoption and migration."
                        textOut="Technologists developing programming languages hold the responsibility of moulding the foundation for countless software systems to be created. Their decisions impact the efficiency, security and creativity of developers."
                    />
                    <DiscCard6
                        title="Technological intervention challenges people's perceptions of what it means to be human"
                        subtitle="The intervention of technological systems on human life challenges conventional perceptions of human existence. Blurring the lines between the biological and the artificial. As technology becomes more important in our lives, it prompts the re-evaluation of defining human characteristics."
                        li1="Enhanced Abilities"
                        li1Text="Technologies such as prosthetics, brain-computer interfaces, and genetic engineering allow humans to exceed their natural limitations. Leading to questions about proper use of these technologies."
                        li2="Digital Identities"
                        li2Text="Online presence, social media, and virtual reality create new domains and levels of identity. This raises questions about the means to authenticate and presentation of our digital selves."
                        li3="Ethical Dilemmas"
                        li3Text="Gene editing and AI-driven decision-making are examples of technological interventions that have raised ethical debates on what interventions are acceptable and whether they compromise our humanity but changing 'natural outcomes'."
                        li4="Transhumance"
                        li4Text="In the pursuit to enhance human capabilities through the means of technology, the notion of biological limitations and boundaries. This has sparked discussions about the merging of humans and machines."
                        li5="Existential Questions"
                        li5Text="Automation and AI systems raise questions about the role of humans. Automated systems are becoming more visible in fields that perform tasks once thought to be uniquely human."
                        li6="Cultural Shifts"
                        li6Text="Changing interactions due to technology will challenge cultural norms, impacting how we form relationships, share experiences, and express emotions."
                        textOut="Technological interventions push us to redefine our understanding of human nature, identity, and potential, sparking an ongoing dialogue about the essence of being human in an increasingly technologically augmented world"
                    />
                    <DiscCard6
                        title="How the consequences of the development has influenced the responsibilities of technologists"
                        subtitle="The consequences of technological development have significantly reshaped the responsibilities of technologists. They are now faced with addressing new challenges and ethical considerations that arise from innovation. As technology becomes increasingly integrated into society, technologists are tasked with a wider range of duties that extend beyond technical proficiency."
                        li1="Ethical Considerations"
                        li1Text="Technologists are faced with complex ethical dilemmas, regarding privacy, data security, algorithmic bias, as well the potential impact of their software."
                        li2="Sustainability and Environmental Impact"
                        li2Text="Growing awareness of environmental damage has triggered technologists to be conscious of the sustainable solutions and ways to minimise ecological footprint related to their technologies."
                        li3="User-Centred Design"
                        li3Text="User experience and accessibility have become increasingly prioritised. This requires technologists to design their outcomes to cater to a diverse range of needs and demographics."
                        li4="Social and Cultural Awareness"
                        li4Text="Technologists need to be aware of the cultural and social impacts of their outcomes. They need to address the issues of representation, avoiding the reinforcement of harmful stereotypes."
                        li5="Regulatory Compliance"
                        li5Text="As technologies change and evolve, legal and regulatory frameworks become essential, requiring a deeper understanding of the legal landscape."
                        li6="Long-Term Consequences"
                        li6Text="Technologists must be able to predict and plan for potential long-term effects of their outcomes, ensuring that technologies remain viable and beneficial over time."
                        textOut="The consequences of technological development have transformed technologists into professionals of various fields, who must not only be capable in their technical skills but also navigate complex ethical, social, and environmental considerations to create technologies that positively contribute to society."
                    />
                </div>
                    <DiscCard6
                        title="The probable future developments to programming languages"
                        subtitle="The future of programming languages holds the promise of incredible innovations and advances in technology. These will shape how developers create, deploy, and maintain software. Trends and technologies are likely to drive these developments, laying the way for more efficient, flexible, and user-focussed programming languages."
                        li1="Domain-Specific Languages (DSLs)"
                        li1Text="Programming languages tailored for specific industries or tasks will continue to appear, enhancing productivity by providing specialised solutions."
                        li2="AI-Driven Coding Assistance"
                        li2Text="AI-powered tools (such as GitHub Copilot) will provide real-time code suggestions, automated bug detection, and even generate code snippets based on natural language descriptions"
                        li3="Concurrency and Parallelism"
                        li3Text="Languages should increasingly support the proper utilisation of multicore processors and distributed systems, enabling better performance."
                        li4="Quantum Computing Languages"
                        li4Text="As quantum computing advances, languages will emerge to harness their power, enabling developers to create quantum algorithms."
                        li5="Language Interoperability"
                        li5Text="Improved interoperability between languages will allow seamless integration of components written in different languages, enhancing flexibility and time management."
                        li6="Privacy and Security Focus"
                        li6Text="Future languages may include built-in security features to mitigate vulnerabilities and protect user data by design."
                        textOut="The future of programming languages will be defined by adaptability to new technologies, streamlined development processes, and a stronger emphasis on collaboration between human developers and advanced AI systems."
                    />
            </div>
            <div id="llm" className="mt-4 text-white scroll-my-24">
                <hr className="w-full mt-8 md:h-2" alt="hr" />
                <div className="flex flex-row">
                    <h1 className="text-xl md:text-2xl font-bold">Large Language Models</h1>
                    <p className="flex-1 text-right font-normal md:text-lg">3.9</p>
                </div>
                
                <p className="font-light text-gray-400">Large language models are essentially 'next word predictors', which use an algorithm to predict the next word of text, based on what it has already seen. This uses pre-trained data that analyses the text to predict the most likely answer based on probability. Then it continues to do this until the answer is complete.</p>

                <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5 first:pt-0 last:mb-0">
                    <div data-aos={window.innerWidth > 768 ? "fade-up" : null} data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-4 flex-grow">
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">An LLM uses machine-learning natural language processing, NLP, to be trained. This is done by feeding the model with data input and output sets. Information is read, or content entered, and the output is based on what the algorithm predicts the next word will be. The input could be proprietary private data, or in the case of OpenAI chatbots like ChatGPT, whatever data is fed and found off of the internet.</p>
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">Language models have been present since 1966 with the release of ELIZA. ELIZA, an early chatbot, is often used as a cautionary tale in the discussion of AI, symbolising the scepticism that surrounds their capabilities. While historically relevant, it differs significantly from modern AI developments like LLMs. ELIZA's deterministic approach differs with the stochastic nature of LLMs, which utilise complex innovations such as deep learning and transformers. The chatbot revealed that humans tend to assign intelligence to nin-intelligent systems due to our limited understanding. All in all, ELIZA's significance lies in its historical context, underlining the challenges of defining consciousness with the field of cutting edge AI.</p>
                    </div>
                    <div data-aos={window.innerWidth > 768 ? "fade-up" : null} data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-3 flex-grow">
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">There are many challenges and implications associated with large language models, particularly related to biases, training data and prompt engineering.</p>
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">LLMs, such as ChatGPT, can hold biases based on the data they've ingested from the internet and developers. These biases, even if not intentional, can lead to gender or other forms of bias in responses, which can have real-world consequences if used in applications, such as hiring processes.</p>
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">LLMs are trained on massive amounts of data from various sources to produce human-like responses. However, there is push towards customising these models for specific tasks to reduce their reliance on vast datasets. An example of this is Google's PaLM 2 LLM, which uses more specific training data for advanced tasks.</p>
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">Prompt engineering is the process of creating and optimising text prompts to guide LLMs' responses towards desired outcomes. This is becoming an essential skill for IT and business professionals who want to tailor LLMs to their specific industries or organisations, leading to a need for prompt guides and possibly marketplaces for prompts.</p>
                        <p className="font-normal mt-4 md:mt-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">While larger LLMs can be expensive and resource-intensive to train, there is a growing understanding that smaller models trained on specific or targeted datasets can perform just as well or even better in these tasks, offering accuracy and cost advantages.</p>
                    </div>
                    <div data-aos={window.innerWidth > 768 ? "fade-up" : null} data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-fit h-fit bg-dark-200 rounded-md py-4 px-4 m-3 flex-grow">   
                        <p className="font-normal my-4 md:my-2 text-sm md:text-lg tracking-wide md:tracking-normal md:text-justify">Large language models have become a dominant way to build AI systems, though these have been primarily used in English markets, leaving the world's other 7,000 languages left behind. Due to the English market for this tool being considered larger than other languages, development of English based systems have been the focus. Though one company has put their hat in the ring and developed BLOOM, BigScience Large Open-science Open-access Multilingual Language Model. BLOOM has 176 billion parameters, and is able to generate text in 46 natural languages and 13 programming languages. By having models that can aid different languages, the door is opened to allow more collaboration between languages and geographical groups.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-center pb-5 md:pb-12 gap-5">
                    <DiscCard6 
                        title="Ethical issues for large language models"
                        subtitle="Like all technology, large language models are affected by ethical issues. Developers need to ensure that they address and be aware of these issues as their models gain attention."
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
                    <DiscCard4
                        title="There can be bias in large language models"
                        subtitle="Bias is the tendency to favour or disfavour certain groups, individuals, or attributes over others, based on stereotypes or prejudices. Bias can affect the quality, fairness, and trustworthiness of the outputs generated by large language models. Bias can creep into large language models from various sources, such as:"
                        li1="Training data"
                        li1Text="The data used to train large language models may reflect the biases present in society or in the sources from which data was collected."
                        li2="Model specifications"
                        li2Text="The choices made in designing and building large language models, such as the architecture, the objective function and hyperparameters, may introduce or amplify biases."
                        li3="Algorithmic constraints"
                        li3Text="The limitations and trade-offs inherent in the algorithms used to train and optimise large language models, such as sampling methods and pruning techniques, may affect the distribution and representation of biases."
                        li4="Product design"
                        li4Text="The decisions made in deploying and using large language models for specific applications or domains, such as the user interface, the feedback mechanism and the policy frameworks, may influence or expose biases."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-center pb-5 md:pb-12 gap-5">
                    <DiscCard4 
                        title="Training data can cause biases in results of large language models"
                        subtitle="There can be bias in large language models. Bias is the tendency to favour or disfavour certain groups, individuals, or attributes over others, based on stereotypes or prejudices. Bias can affect the quality, fairness, and trustworthiness of the outputs generated by large language models. Bias can creep into large language models from various sources, such as:"
                        li1="Training data"
                        li1Text="The data used to train large language models may reflect the biases present in society or in the sources from which that data was collected."
                        li2="Model specifications"
                        li2Text="The choices made in designing and building large language models, such as the architecture, the objective function and the hyperparameters, may introduce or amplify biases."
                        li3="Algorithmic constraints"
                        li3Text="The limitations and trade-offs inherent in the algorithms used to train and optimise large language models, such as sampling methods and pruning techniques, may affect the distribution and representation of biases."
                        li4="Product design"
                        li4Text="The decisions made in deploying and using large language models for specific applications or domains, such as the user interface, the feedback mechanism and the policy framework, may influence or expose biases."
                    />
                    <DiscCard3
                        title="Risks to privacy and security"
                        subtitle="Large language models are powerful tools that can generate natural language from various inputs, but they also pose some privacy and security risks. Some of these risks are:"
                        li1="Data leakage"
                        li1Text="Large languages models can potentially reveal sensitive information from their training data, such as personal names, addresses or passwords."
                        li2="Dark data misuse"
                        li2Text="Large language models can consume any kind of input data, including unstructured or hidden data that may contain confidential or proprietary information."
                        li3="Shadow AI"
                        li3Text="Large language models can be used by unauthorized users or malicious actors to create fake or misleading content, such as phishing emails, fake news or deepfakes."
                        textOut="To mitigate these risks, it is important to use LLMs responsibly and securely, such as by applying data sanitization, encryption, access control, auditing, and verification techniques."
                    />
                </div>
                <hr className="w-full mt-8 md:h-3" alt="hr" />
            </div>
        </>
    )
}
