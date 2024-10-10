import 'animate.css';
import { Footer } from 'flowbite-react';
import { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Header from '../Nav/Nav';

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
    <article className="max-w-sm mx-auto mt-4 shadow-lg border rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 bg-white">
        <img
            src={project.img}
            loading="lazy"
            alt={project.title}
            className="w-full h-100 md:h-50 rounded-t-lg object-cover cursor-pointer"
            onClick={() => onImageClick(project.img)}
        />
        <div className="flex items-center mt-3 pt-3 px-3">
            <div className="flex-none w-12 h-12 rounded-full overflow-hidden shadow-md">
                <img src={project.favicon || '/path/to/universal-logo.png'} className="w-full h-full object-cover" alt={project.title} />
            </div>
            <div className="ml-2">
                <span className="block text-gray-900 font-semibold">{project.title}</span>
                <span className="block text-gray-500 text-sm">{project.date}</span>
            </div>
        </div>
        <div className="pt-3 px-4 mb-3">
            <p className="text-gray-600 text-sm mt-3">{project.desc}</p>
        </div>
        <div className="flex justify-center gap-1 mb-2 pb-2 flex-wrap">
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
const ProjectsPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('javascript');


   const projects = {
    html: [
        {
            title: 'Academia Bluefit',
            desc: 'Academia Bluefit é uma plataforma completa voltada para a saúde e bem-estar. O projeto inclui uma calculadora de IMC, formulários de contato, blogs sobre fitness e uma interface interativa com animações e elementos dinâmicos, proporcionando uma experiência agradável e envolvente para os usuários.',
            img: '/portifolios/Bluefit.jpg',
            favicon: '/portifolios/favicon-projetos/musculos.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Junho de 2024',
            githubLink: 'https://github.com/devthmedu/Academia-Bluefit',
            siteLink: 'https://devthmedu.github.io/Academia-Bluefit/',
        },
        {
            title: 'Modo Escuro',
            desc: 'Este projeto demonstra a implementação de um sistema de alternância entre modo claro e modo escuro em uma página web simples. A funcionalidade visa melhorar a experiência do usuário, oferecendo conforto visual em diferentes condições de iluminação.',
            img: '/portifolios/modo-escuro.jpg',
            favicon: '/portifolios/favicon-projetos/sol.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Outubro de 2024',
            githubLink: 'https://github.com/devthmedu/Modo-Dark',
            siteLink: 'https://devthmedu.github.io/Modo-Dark/',
        },
    ],
    css: [
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
            title: 'Site Fanta',
            desc: 'Este projeto recria o site da Fanta com um design vibrante e interativo, capturando a essência da marca. O foco está em proporcionar uma experiência envolvente ao usuário, destacando os produtos da Fanta e promovendo sua identidade visual única.',
            img: '/portifolios/site-fanta.jpg',
            favicon: '/portifolios/favicon-projetos/refri.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Site_Fanta',
            siteLink: 'https://fanta-seven.vercel.app/',
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
            title: 'App de Clima',
            desc: 'Desenvolvido com React e Vite, este aplicativo fornece previsões meteorológicas em tempo real. Os usuários podem buscar cidades e visualizar as condições climáticas atuais, além de previsões futuras, em uma interface simples e eficiente.',
            img: '/portifolios/App-clima.jpg',
            favicon: '/portifolios/favicon-projetos/clima.webp',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            date: 'Maio de 2024',
            githubLink: 'https://github.com/devthmedu/Weather-App',
            siteLink: '#',
        },
        {
            title: 'Receitas Criativa',
            desc: 'Receitas Criativa é uma plataforma dinâmica e intuitiva, desenvolvida com React e Vite, que oferece inspiração para suas próximas refeições. O aplicativo combina diversos componentes para proporcionar uma experiência fluida e envolvente ao usuário.',
            img: '/portifolios/Receitas-Criativa.jpg',
            favicon: '/portifolios/favicon-projetos/Cooking.webp',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            date: 'Abril de 2024',
            githubLink: 'https://github.com/devthmedu/Receita-Criativa-',
            siteLink: 'https://cozinha-criativa-pied.vercel.app/',
        },
        {
            title: 'Barbershop',
            desc: 'O projeto Barbearia visa aprimorar o atendimento ao cliente, apresentando serviços e permitindo reservas por API e WhatsApp, além de incluir um formulário de contato integrado para maior comodidade.',
            img: '/portifolios/Barbearia-Luxe.jpg',
            favicon: '/portifolios/favicon-projetos/barbeiro.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            date: 'Abril de 2024',
            githubLink: 'https://github.com/devthmedu/-Luxe-Barbershop',
            siteLink: 'https://barbearia-luxe.vercel.app/',
        },
        {
            title: 'Clock & Charm',
            desc: 'Clock&Charm é um aplicativo web projetado para gerenciar o tempo e criar lembretes personalizados. Com uma interface amigável, os usuários podem definir alarmes, cronômetros e lembretes de forma prática e eficiente.',
            img: '/portifolios/Clock&Charm.jpg',
            favicon: '/portifolios/favicon-projetos/Clock.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Abril de 2024',
            githubLink: 'https://github.com/devthmedu/ClockeCharm',
            siteLink: 'https://clockcharm.vercel.app/',
        },
        {
            title: 'iPhone 14 Pro',
            desc: 'Este projeto apresenta uma página inspirada na Apple, destacando animações dos modelos do iPhone 14 Pro em suas diversas cores. Desenvolvido com HTML, CSS e JavaScript, o site utiliza controle de versão no Git.',
            img: '/portifolios/iphone-pro.png',
            favicon: '/portifolios/favicon-projetos/Mobile-Phone.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Dezembro de 2023',
            githubLink: 'https://github.com/thmedu/LandingPage-iPhone--14pro',
            siteLink: 'https://apple14pro.netlify.app/',
        },
        {
            title: 'Call of Duty: WWII',
            desc: 'Este projeto recria o site do jogo Call of Duty: WWII, utilizando HTML e CSS. O objetivo é capturar a essência visual e funcional do site original, proporcionando aos fãs uma experiência semelhante à atmosfera da Segunda Guerra Mundial.',
            img: '/portifolios/call-od-duty.jpg',
            favicon: '/portifolios/favicon-projetos/capacete.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Dezembro de 2023',
            githubLink: 'https://github.com/thmedu/Call-of-Duty-wwii',
            siteLink: 'https://thmedu.github.io/Call-of-Duty-wwii/',
        },
    ],
    javascript: [
        {
            title: 'Biblioteca-Digital',
            desc: 'O projeto é um sistema de gerenciamento de biblioteca digital que permite aos usuários adicionar, visualizar e gerenciar livros de forma simples e intuitiva.',
            img: '/portifolios/Biblioteca-Digital.jpg',
            favicon: '/portifolios/favicon-projetos/book.svg',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Outubro de 2024',
            githubLink: 'https://github.com/devthmedu/Biblioteca-Digital',
            siteLink: 'https://devthmedu.github.io/Biblioteca-Digital/',
        },
        {
            title: 'Calculadora',
            desc: 'Uma calculadora web simples e eficiente que permite realizar operações matemáticas básicas, desenvolvida com HTML, CSS e JavaScript, visando praticidade e usabilidade.',
            img: '/portifolios/Calculadora.jpg',
            favicon: '/portifolios/favicon-projetos/calculator.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/calculadora',
            siteLink: 'https://devthmedu.github.io/calculadora/',
        },
        {
            title: 'Pokedex',
            desc: 'Uma Pokedex interativa que permite pesquisar e visualizar detalhes sobre diferentes Pokémon, utilizando a API do PokéAPI para fornecer dados atualizados.',
            img: '/portifolios/Pokedex.jpg',
            favicon: '/portifolios/favicon-projetos/pokemon.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Pokedex',
            siteLink: 'https://devthmedu.github.io/Pokedex/',
        },
        {
            title: 'Jogo da Forca',
            desc: 'O Jogo da Forca é uma implementação divertida do clássico jogo, onde os usuários podem adivinhar letras para descobrir uma palavra secreta. O projeto foi desenvolvido com HTML, CSS e JavaScript.',
            img: '/portifolios/Jogo-da-Forca.jpg',
            favicon: '/portifolios/favicon-projetos/forca.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Jogo-da-Forca',
            siteLink: 'https://devthmedu.github.io/Jogo-da-Forca/',
        },
        {
            title: 'Jogo da Memória',
            desc: 'Um jogo de memória simples, onde os usuários devem encontrar pares de cartas iguais. Desenvolvido com HTML, CSS e JavaScript, o projeto oferece uma experiência interativa e divertida.',
            img: '/portifolios/Jogo-da-memoria.jpg',
            favicon: '/portifolios/favicon-projetos/memoria.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Jogo-da-Memoria',
            siteLink: 'https://devthmedu.github.io/Jogo-da-Memoria/',
        },
        {
            title: 'Quiz',
            desc: 'Um quiz interativo que desafia os usuários com perguntas variadas. O projeto foi desenvolvido com HTML, CSS e JavaScript, visando oferecer diversão e aprendizado.',
            img: '/portifolios/quiz.jpg',
            favicon: '/portifolios/favicon-projetos/quiz.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Quiz',
            siteLink: 'https://devthmedu.github.io/Quiz/',
        },
        {
            title: 'Tic Tac Toe',
            desc: 'Um clássico jogo da velha, onde os usuários podem jogar contra o computador ou entre si. O projeto foi implementado com HTML, CSS e JavaScript, proporcionando uma experiência nostálgica.',
            img: '/portifolios/Tic-Tac-Toe.jpg',
            favicon: '/portifolios/favicon-projetos/tic-tac-toe.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/TicTacToe',
            siteLink: 'https://devthmedu.github.io/TicTacToe/',
        },
    ],
    mobile: [
        {
            title: 'Dieta.IA',
            desc: 'Dieta.IA é um aplicativo revolucionário que utiliza inteligência artificial para criar planos alimentares personalizados, promovendo uma alimentação saudável e balanceada de forma prática e eficiente.',
            img: '/portifolios/Dieta.ia-app-mobile.jpg',
            favicon: '/portifolios/favicon-projetos/dieta-ia.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Dieta_IA',
            siteLink: '#',
        },
        {
            title: 'App de Viagens',
            desc: 'Um aplicativo de viagens que ajuda os usuários a planejar suas aventuras, oferecendo informações sobre destinos, reservas e dicas de viagem. Desenvolvido para facilitar o planejamento e tornar as viagens mais agradáveis.',
            img: '/portifolios/App-de-Viagens.jpg',
            favicon: '/portifolios/favicon-projetos/viagem.webp',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/App-de-Viagens',
            siteLink: '#',
        },
    ],
    typescript: [
        {
            title: 'Customer Insights',
            desc: 'Com uma interface amigável e informações detalhadas, o Customer Insights permite aos usuários visualizar dados sobre clientes de forma intuitiva e eficiente, facilitando a análise e a tomada de decisões.',
            img: '/portifolios/Customer-Insights.jpg',
            favicon: '/portifolios/favicon-projetos/insights.svg',
            technologies: ['TypeScript', 'CSS', 'JavaScript'],
            date: 'Julho de 2024',
            githubLink: 'https://github.com/devthmedu/Customer-Insights',
            siteLink: 'https://customer-insights.vercel.app/',
        },
        {
            title: 'Gerador de Senhas',
            desc: 'Um gerador de senhas robusto que permite aos usuários criar senhas seguras e aleatórias, com opções de personalização para atender às necessidades específicas de segurança.',
            img: '/portifolios/gerador-de-senha.jpg',
            favicon: '/portifolios/favicon-projetos/senha.webp',
            technologies: ['TypeScript', 'HTML', 'CSS'],
            date: 'Junho de 2024',
            githubLink: 'https://github.com/devthmedu/Gerador-de-Senhas',
            siteLink: 'https://devthmedu.github.io/Gerador-de-Senhas/',
        },
    ],
    database: [
        {
            title: 'Formulário de Contato com MongoDB',
            desc: 'Este aplicativo web é um formulário de contato construído com Node.js e MongoDB, permitindo que os usuários enviem mensagens e recebam respostas de forma rápida e eficiente.',
            img: '/portifolios/Formulario-DB-Backend.jpg',
            favicon: '/portifolios/favicon-projetos/mongodb.svg',
            technologies: ['JavaScript', 'Bootstrap', 'Express', 'MongoDB'],
            date: 'Setembro de 2024',
            githubLink: 'https://github.com/devthmedu/Formulario-de-contato-com-db',
            siteLink: '#',
        },
    ],
};

const handleImageClick = (img) => {
    setSelectedImage(img);
};

const handleCloseImage = () => {
    setSelectedImage(null);
};

const handleCategoryChange = (category) => {
    setSelectedCategory(category);
};

return (
    <>
        <Header />
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold animate__backInRight">Portfólio</h1>
                <p className="mt-3 text-gray-500">Projetos que eu desenvolvi e estou orgulhoso.</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 mt-8">
                {Object.keys(projects).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`py-2 px-4 rounded transition duration-300 ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projects[selectedCategory].map((project, index) => (
                    <ProjectCard key={index} project={project} onImageClick={handleImageClick} />
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseImage}>
                    <img src={selectedImage} alt="Projeto" className="max-w-full max-h-full object-contain p-4" />
                </div>
            )}
        </section>
        <Footer />
    </>
);
};

export default ProjectsPage;
