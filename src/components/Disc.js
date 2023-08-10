import DiscCard from "./DiscCard.js"

export default function Disc(){
    return (
        <div id="disc" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Discussion</h1>
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
                    textOut="In essence, programming language development significantly influences how software is designed, implemented, and maintained, shaping the technological landscape and influencing the strategies and decisions of developers and organizations."
                />
                <DiscCard className="hover:"
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
                    li1Text="Technologists must now navigate complex ethical dilemmas related to privacy, data security, algorithmic bias, and the potential societal impact of their creations.    "
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
                    textOut="In essence, the future of programming languages will be marked by adaptability to new technologies, streamlined development processes, and a stronger emphasis on collaboration between human developers and advanced AI systems.  "
                />
            </div>
            <hr className="w-full mt-8 md:h-2" alt="hr" />
            <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5 first:pt-0 last:mb-0">

            </div>
        </div>
    )
}
