import 'animate.css';
import { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Projetos.css';

const technologyImages = {
    HTML: '/icons-skill/html.svg',
    CSS: '/icons-skill/css.svg',
    JavaScript: '/icons-skill/js.svg',
    React: '/icons-skill/react.svg',
    Node: '/icons-skill/node.svg',
    MongoDB: '/icons-skill/mongodb.svg',
    Figma: '/icons-skill/figma.svg',
    Git: '/icons-skill/git.svg',
    Tailwindcss: '/icons-skill/tailwindcss.svg',
    Typescript: '/icons-skill/typescript.svg',
    Android: '/icons-skill/android.svg',
    Postman: '/icons-skill/postman.svg',
    Bootstrap: '/icons-skill/bootstrap.svg',
    Express: '/icons-skill/express.svg',
};

const ProjectCard = ({ project, onImageClick }) => (
    <article className="max-w-xl mx-auto mt-4 shadow-lg border rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 bg-white">
        <img
            src={project.img}
            loading="lazy"
            alt={project.title}
            className="w-full h-60 rounded-t-lg object-cover cursor-pointer"
            onClick={() => onImageClick(project.img)}
        />
        <div className="flex items-center mt-2 pt-3 px-4">
            <div className="flex-none w-12 h-12 rounded-full overflow-hidden shadow-md">
                <img src={project.favicon || '/path/to/universal-logo.png'} className="w-full h-full object-cover" alt={project.title} />
            </div>
            <div className="ml-3">
                <span className="block text-gray-900 font-semibold">{project.title}</span>
                <span className="block text-gray-500 text-sm">{project.date}</span>
            </div>
        </div>
        <div className="pt-3 px-4 mb-3">
            <p className="text-gray-600 text-sm mt-1">{project.desc}</p>
        </div>
        <div className="flex justify-center gap-3 mb-3 pb-3">
            {project.technologies.map((tech, idx) => (
                <span key={idx} className="flex items-center text-gray-500">
                    {technologyImages[tech] ? (
                        <img src={technologyImages[tech]} alt={tech} className="w-6 h-6 mr-1" />
                    ) : (
                        tech
                    )}
                </span>
            ))}
        </div>
        <div className="flex justify-center gap-4 mb-3 pb-3">
            <a href={project.githubLink} className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-1" /> Repositório
            </a>
            <a href={project.siteLink} className="text-blue-500 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="mr-1" /> Deploy
            </a>
        </div>
    </article>
);

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);
    const projects = [
        {
            title: 'App Criptomoeda',
            desc: 'Esta aplicação oferece aos usuários informações em tempo real sobre diversas criptomoedas, incluindo preços e gráficos históricos, utilizando a API CoinGecko para garantir dados atualizados e precisos.',
            img: '/portifolios/app-cripto.jpg',
            favicon: '/portifolios/favicon-projetos/money.webp',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            date: 'Maio de 2024',
            githubLink: 'https://github.com/devthmedu/App-Criptograficor',
            siteLink: 'https://app-criptografico.vercel.app/',
        },
        {
            title: 'Sistema de Gestão de Bilhetes',
            desc: 'O Sistema de Gestão de Bilhetes combina simplicidade e eficiência para oferecer uma experiência aprimorada na reserva de ingressos. Com um design responsivo e funcional, o sistema facilita a navegação e a compra de bilhetes online.',
            img: '/portifolios/Sistema-Gestão-de-Bilhetes.jpg',
            favicon: '/portifolios/favicon-projetos/Ticket.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Outubro de 2024',
            githubLink: 'https://github.com/devthmedu/Gest-o-de-Bilhetes',
            siteLink: 'https://devthmedu.github.io/Gest-o-de-Bilhetes/',
        },
        {
            title: 'Fome Burge',
            desc: 'Fome Burger é um sistema de cardápio online que facilita a visualização e a compra de hambúrgueres e bebidas. O projeto foi desenvolvido para oferecer uma experiência agradável e intuitiva ao usuário, permitindo escolhas rápidas e práticas.',
            img: '/portifolios/fome-burguer.jpg',
            favicon: '/portifolios/favicon-projetos/Hamburger.webp',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwindcss'],
            date: 'Agosto de 2024',
            githubLink: 'https://github.com/devthmedu/Fome-Burger',
            siteLink: 'https://fome-burguer.vercel.app/',
        },
        {
            title: 'Biblioteca-Digital',
            desc: 'O projeto Biblioteca-Digital é um sistema de gerenciamento que permite aos usuários adicionar, visualizar e gerenciar livros de forma intuitiva, tornando o acesso à literatura mais fácil e organizado.',
            img: '/portifolios/Biblioteca-Digital.jpg',
            favicon: '/portifolios/favicon-projetos/Books.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Outubro de 2024',
            githubLink: 'https://github.com/devthmedu/Biblioteca-Digital',
            siteLink: 'https://devthmedu.github.io/Biblioteca-Digital/',
        },
        {
            title: 'Calculadora de Gorjetas',
            desc: 'Esta calculadora de gorjetas responsiva ajuda os usuários a calcular o valor da gorjeta com base no total da conta, na qualidade do serviço e no número de pessoas. Inclui opções para aplicar descontos em pagamentos em dinheiro ou via Pix.',
            img: '/portifolios/calculadora-de-gorjetas.jpg',
            favicon: '/portifolios/favicon-projetos/Abacus.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Calculadora-de-Gorjetas',
            siteLink: 'https://devthmedu.github.io/Calculadora-de-Gorjetas/',
        },
        {
            title: 'Social para Pets',
            desc: 'Desenvolvido como parte do curso completo de React da Origamid, este projeto serve como uma rede social para amantes de animais, permitindo interação e compartilhamento de experiências.',
            img: '/portifolios/social-pets.png',
            favicon: '/portifolios/favicon-projetos/Dog Face.webp',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            date: 'Julho de 2024',
            githubLink: 'https://github.com/devthmedu/Red-Pets',
            siteLink: 'https://rede-pets.vercel.app/',
        },
        {
            title: 'Dieta.IA',
            desc: 'O Dieta.IA é um aplicativo inovador que ajuda os usuários a criar dietas personalizadas de forma eficiente e intuitiva, com sugestões baseadas em preferências alimentares e necessidades nutricionais.',
            img: '/portifolios/Dieta.ia-app-mobile.jpg',
            favicon: '/portifolios/favicon-projetos/dieta-ia.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Dieta_IA',
            siteLink: '#',
        },
        {
            title: 'Site Starbucks',
            desc: 'Este projeto simula uma página inicial do Starbucks, desenvolvida com HTML, CSS e JavaScript. A interface é totalmente responsiva, adaptando-se a diversos tamanhos de tela, de smartphones a desktops.',
            img: '/portifolios/site-starbucks.png',
            favicon: '/portifolios/favicon-projetos/starbucks.svg',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Projeto-Starbucks',
            siteLink: 'https://devthmedu.github.io/Projeto-Starbucks/',
        },
        {
            title: 'API Media Social',
            desc: 'Este projeto é um backend para uma rede social simples, onde os usuários podem se registrar, autenticar, criar postagens e visualizar suas informações. Construído com Node.js e MongoDB, o sistema utiliza JSON Web Token (JWT).',
            img: '/portifolios/Api-media-social.jpg',
            favicon: '/portifolios/favicon-projetos/api.svg',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Projeto-Starbucks',
            siteLink: 'https://devthmedu.github.io/Projeto-Starbucks/',
        },
        {
            title: 'Formulário de Contato com MongoDB',
            desc: 'Este aplicativo web é um formulário de contato construído com Node.js e MongoDB, que coleta e armazena informações dos usuários em um banco de dados, oferecendo feedback após o envio.',
            img: '/portifolios/Formulario-DB-Backend.jpg',
            favicon: '/portifolios/favicon-projetos/mongodb.svg',
            technologies: ['JavaScript', 'Bootstrap', 'Express', 'MongoDB'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Formulario-de-contato-com-db',
            siteLink: '#',
        },
    ];

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold animate__backInRight">Portfólio</h1>
                <p className="mt-3 text-gray-500">Projetos que desenvolvi e dos quais estou orgulhoso.</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} onImageClick={handleImageClick} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/todos-projetos" className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                    Ver Todos os Projetos
                </Link>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseImage}>
                    <img src={selectedImage} alt="Projeto" className="max-w-full max-h-full" />
                </div>
            )}
        </section>
    );
}
