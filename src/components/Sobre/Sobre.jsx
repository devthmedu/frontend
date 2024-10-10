import 'animate.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Education from '../CursosCertificados.jsx/CursosCertificados';
import Estatísticas from '../Estatísticas/Estatísticas';
import Certification from '../FormacaoeExperiencia/FormacaoeExperiencia';
import Projects from '../Projetos/Projetos';
import Skill from '../Skill/Skill';
import './Sobre.css';

const What = () => {
    const features = [
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp',
            title: "Desenvolvimento Web",
            desc: "Sou um desenvolvedor web com experiência em JavaScript, Node.js e React."
        },
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Mobile%20Phone.webp',
            title: "Desenvolvimento Mobile",
            desc: "Estou aprendendo a criar aplicativos mobile que são atraentes e funcionais."
        },
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Locked%20With%20Key.webp',
            title: "Segurança de Datacenter",
            desc: "Trabalho com APIs para facilitar a troca de dados entre aplicações."
        },
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Light%20Bulb.webp',
            title: "Inovação",
            desc: "Busco novas abordagens e tecnologias para inovar em projetos."
        },
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Check%20Mark%20Button.webp',
            title: "Seguro para Usar",
            desc: "Desenvolvo soluções que priorizam segurança e eficiência."
        },
        {
            icon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp',
            title: "Flexível",
            desc: "Pronto para aprender novas tecnologias e adaptar-me às necessidades."
        },
    ];

    const renderFeatures = () => {
        return features.map((item) => (
            <li key={item.title} className="bg-white dark:bg-gray-800 space-y-3 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                <div className="flex justify-center pb-3">
                    <img src={item.icon} alt={item.title} className="w-16 h-16 transition-transform duration-300 transform hover:scale-125" />
                </div>
                <h4 className="text-lg text-gray-800 dark:text-white font-semibold text-center">
                    {item.title}
                </h4>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    {item.desc}
                </p>
            </li>
        ));
    };

    const renderComponents = () => {
        try {
            return (
                <>
                    <Estatísticas />
                    <Education />
                    <Certification />
                    <Skill />
                    <Projects />
                </>
            );
        } catch (error) {
            console.error("Erro ao carregar os componentes:", error);
            return (
                <div className="max-w-screen-xl mx-auto px-4 text-center text-red-600">
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        Ocorreu um erro ao carregar os componentes. Tente novamente mais tarde.
                    </p>
                </div>
            );
        }
    };

    return (
        <>
            <section className="mt-14 mx-auto max-w-screen-xl pb-4 px-4 flex flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0 lg:mr-8">
                    <img 
                        src="/fotos-pessoais/perfil-2.png" 
                        alt="Perfil de Thomas Eduardo" 
                        className="w-full h-auto max-w-xs mx-auto rounded-lg transition-transform duration-300 transform hover:scale-110"
                    />
                </div>
                <div className="flex-4 space-y-9 sm:text-center lg:text-left">
                    <h1 className="flex items-center text-gray-700 dark:text-white font-bold text-5xl md:text-5xl">
                        Olá! Eu sou Thomas Eduardo
                        <img 
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Rocket.webp" 
                            alt="Rocket" 
                            width="35" 
                            height="35" 
                            className="ml-3 animate__animated animate__bounce"
                        />
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-2">
                        Sou um desenvolvedor web com experiência em JavaScript, Node.js e React. Tenho um histórico em projetos que abrangem frontend e backend, buscando soluções práticas para necessidades reais. Valorizo a colaboração em equipe e estou sempre aprendendo.
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/devthm/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-10 h-10 text-indigo-600 hover:text-indigo-800 transition-transform duration-300 transform hover:scale-125 hover:rotate-9" />
                        </a>
                        <a href="https://github.com/devthmedu" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-10 h-10 text-indigo-600 hover:text-indigo-800 transition-transform duration-300 transform hover:scale-125 hover:rotate-9" />
                        </a>
                        <a href="https://www.instagram.com/devthmedu/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-10 h-10 text-indigo-600 hover:text-indigo-800 transition-transform duration-300 transform hover:scale-125 hover:rotate-9" />
                        </a>
                    </div>
                </div>
            </section>
            
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-400 md:px-8">
                    <div className="relative max-w-2xl mx-auto sm:text-center">
                        <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
                            O que faço?
                        </h3>
                        <p className="mt-3 max-w-xl mx-auto">
                            Busco soluções práticas para necessidades reais e valorizo a colaboração em equipe.
                        </p>
                    </div>
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {renderFeatures()}
                        </ul>
                    </div>
                </div>
            </section>
            {renderComponents()}
        </>
    );
};

export default What;
