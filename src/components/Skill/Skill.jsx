import './Skill.css';

export default () => {
    const skills = [
        { src: "/icons-skill/angular.svg", alt: "Angular" },
        { src: "/icons-skill/babel.svg", alt: "Babel" },
        { src: "/icons-skill/bootstrap.svg", alt: "Bootstrap" },
        { src: "/icons-skill/css.svg", alt: "CSS" },
        { src: "/icons-skill/eslint.svg", alt: "ESLint" },
        { src: "/icons-skill/figma.svg", alt: "Figma" },
        { src: "/icons-skill/gimp.svg", alt: "GIMP" },
        { src: "/icons-skill/git.svg", alt: "Git" },
        { src: "/icons-skill/nextjs.svg", alt: "Next.js" },
        { src: "/icons-skill/react.svg", alt: "React" },
        { src: "/icons-skill/no.svg", alt: "No" },
        { src: "/icons-skill/typescript.svg", alt: "TypeScript" },
        { src: "/icons-skill/js.svg", alt: "JavaScript" },
        { src: "/icons-skill/mongodb.svg", alt: "MongoDB" },
        { src: "/icons-skill/tailwindcss.svg", alt: "Tailwind CSS" },
        { src: "/icons-skill/html.svg", alt: "HTML" },
    ];

    return (
        <div className="py-14 bg-gray-50 dark:bg-[#111]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
                        Minhas Skills
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        Tecnologias e Ferramentas Profissionais
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 lg:grid-cols-8">
                        {skills.map((icon, idx) => (
                            <li key={idx} className="flex justify-center">
                                <div className="flex flex-col items-center transition-all duration-200 transform hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 p-4 rounded-lg">
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-16 h-16 mb-2 transition-transform duration-200 hover:scale-110"
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm">{icon.alt}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
