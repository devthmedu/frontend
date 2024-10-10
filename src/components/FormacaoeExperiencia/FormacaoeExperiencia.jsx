import { useState } from "react";

const EducationTimeline = () => {
    const [steps] = useState([
        {
            icon: "briefcase",
            title: "Desenvolvedor de Software",
            institution: "Autônomo",
            date: "2024 | Atual",
            description: "Trabalho em projetos variados, desde aplicativos de redes sociais até ferramentas práticas, como geradores de faturas e sistemas de gerenciamento de documentos.",
        },
        {
            icon: "briefcase",
            title: "MRB Express",
            institution: "MRB Express",
            date: "2023",
            description: "Responsável pelo acompanhamento de cargas rodoviárias e aéreas, incluindo solicitações de coletas, embarques, manutenção e envio de last-mile.",
        },
        {
            icon: "graduation",
            title: "Faculdade em DevOps",
            institution: "Anhanguera",
            date: "2023 - 2026",
            description: "Atualmente, estou cursando a faculdade de Desenvolvimento de Operações na Anhanguera.",
        },
        {
            icon: "graduation",
            title: "Técnico em Cloud Computing",
            institution: "AWS",
            date: "2023 - 2024",
            description: "Essa formação me proporcionou habilidades práticas e teóricas, permitindo-me enfrentar desafios e desenvolver soluções inovadoras na área de tecnologia de nuvem.",
        },
    ]);

    return (
        <section className="py-14 bg-gray-50 dark:bg-[#111]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl text-center mx-auto mb-8">
                    <h3 className="text-gray-800 dark:text-gray-200 text-4xl font-bold sm:text-5x9 md:text-6x8">
                        formação e Experiências
                    </h3>
                </div>
                <div className="mt-12 flex flex-col lg:flex-row justify-between relative">
                    {/* Seção Experiência */}
                    <div className="flex flex-col w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
                        {steps.slice(0, 2).map((step, idx) => (
                            <div key={idx} className="mb-4 flex flex-col items-start relative">
                                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full">
                                    <div className="flex items-center mb-1">
                                        <img 
                                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Handshake.webp" 
                                            alt="Briefcase" 
                                            width="30" 
                                            height="30" 
                                            className="mr-2"
                                        />
                                        <h4 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h4>
                                        <span className="text-gray-600 dark:text-gray-300 ml-2">{step.date}</span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">{step.description}</p>
                                </div>
                                {idx < 1 && (
                                    <div className="absolute left-1/2 top-full h-8 w-1 bg-gray-300 dark:bg-gray-600"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Seção Educação */}
                    <div className="flex flex-col w-full lg:w-1/2 pl-4">
                        {steps.slice(2).map((step, idx) => (
                            <div key={idx} className="mb-4 flex flex-col items-start relative">
                                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full">
                                    <div className="flex items-center mb-1">
                                        <img 
                                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Graduation%20Cap.webp" 
                                            alt="Graduation Cap" 
                                            width="30" 
                                            height="30" 
                                            className="mr-2"
                                        />
                                        <h4 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h4>                                   
                                        <span className="text-gray-600 dark:text-gray-300 ml-2">{step.date}</span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">{step.description}</p>
                                </div>
                                {idx < 1 && (
                                    <div className="absolute left-1/2 top-full h-8 w-1 bg-gray-300 dark:bg-gray-600"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationTimeline;
