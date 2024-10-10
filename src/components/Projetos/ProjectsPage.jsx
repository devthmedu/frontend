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
    Node: '/icons-skill/no.svg',
    MongoDB: '/icons-skill/mongodb.svg',
    Figma: '/icons-skill/figma.svg',
    Git: '/icons-skill/git.svg',
    Tailwindcss: '/icons-skill/tailwindcss.svg',
    Typescript: '/icons-skill/typescript.svg',
    Android: '/icons-skill/android.svg',
    Postman: '/icons-skill/postman.svg',
    Express: '/icons-skill/express.svg',
    Bootstrap: '/icons-skill/bootstrap.svg',
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
                img: '/public/portifolios/call-od-duty.jpg',
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
                img: '/public/portifolios/Biblioteca-Digital.jpg',
                favicon: '/public/portifolios/favicon-projetos/book.svg',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Outubro de 2024',
                githubLink: 'https://github.com/devthmedu/Biblioteca-Digital',
                siteLink: 'https://devthmedu.github.io/Biblioteca-Digital/',
            },
            {
                title: 'Calculadora de Gorjetas',
                desc: 'Esta é uma calculadora de gorjetas responsiva que ajuda os usuários a calcular o valor da gorjeta com base no total da conta, na qualidade do serviço e no número de pessoas. Inclui também a opção de aplicar descontos para pagamentos em dinheiro ou via Pix.',
                img: '/public/portifolios/calculadora-de-gorjetas.jpg',
                favicon: '/public/portifolios/favicon-projetos/calculator.svg',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/Calculadora-de-Gorjetas',
                siteLink: 'https://devthmedu.github.io/Calculadora-de-Gorjetas/',
            },
            {
                title: 'App Criptomoeda',
                desc: 'Esta aplicação permite aos usuários visualizar informações em tempo real sobre diversas criptomoedas, incluindo preços e gráficos históricos, utilizando a API CoinGecko para dados atualizados.',
                img: '/public/portifolios/app-cripto.jpg',
                favicon: '/public/portifolios/favicon-projetos/coins.svg',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/App-Criptograficor',
                siteLink: 'https://app-criptografico.vercel.app/',
            },
            {
                title: 'Site Starbucks',
                desc: 'Este projeto simula uma página inicial do Starbucks, desenvolvida com HTML, CSS e JavaScript. A interface é totalmente responsiva, adaptando-se a diversos tamanhos de tela, de smartphones a desktops.',
                img: '/public/portifolios/site-starbucks.png',
                favicon: '/public/portifolios/favicon-projetos/starbucks.svg',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/Projeto-Starbucks',
                siteLink: 'https://devthmedu.github.io/Projeto-Starbucks/',
            },
            {
                title: 'API Media Social',
                desc: 'Este projeto é um backend para uma rede social simples, onde os usuários podem se registrar, autenticar, criar postagens e visualizar suas informações. Construído com Node.js e MongoDB, o sistema utiliza JSON Web Token (JWT).',
                img: '/public/portifolios/Api-media-social.jpg',
                favicon: '/public/portifolios/favicon-projetos/api.svg',
                technologies: ['JavaScript', 'Node.js', 'MongoDB'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/Projeto-Starbucks',
                siteLink: 'https://devthmedu.github.io/Projeto-Starbucks/',
            },
            {
                title: 'Sistema de Pesquisa',
                desc: 'Este projeto é um formulário em React que coleta informações dos usuários por meio de um conjunto de perguntas.',
                img: '/public/portifolios/formulario-de-perguntas.jpg',
                favicon: '/public/portifolios/favicon-projetos/question.svg',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                date: 'Agosto de 2024',
                githubLink: 'https://github.com/devthmedu/Sistema-de-Pesquisa',
                siteLink: 'https://sistema-de-pesquisa.vercel.app/',
            },
            {
                title: 'Social para Pets',
                desc: 'Este projeto foi desenvolvido como parte do curso completo de React da Origamid, sendo aplicado como projeto final.',
                img: '/public/portifolios/social-pets.png',
                favicon: '/public/portifolios/favicon-projetos/pet.svg',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                date: 'Julho de 2024',
                githubLink: 'https://github.com/devthmedu/Red-Pets',
                siteLink: 'https://rede-pets.vercel.app/',
            },
            {
                title: 'Fantastic Beasts',
                desc: 'O projeto Fantastic Animals foi desenvolvido como parte do curso JavaScript da Origamid. É um site interativo que permite que você explore informações detalhadas sobre diferentes criaturas fantásticas.',
                img: '/public/portifolios/animais-fantasticos.jpg',
                favicon: '/public/portifolios/favicon-projetos/animal.svg',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Julho de 2024',
                githubLink: 'https://github.com/devthmedu/Fantastic-Beasts',
                siteLink: 'https://rede-pets.vercel.app/',
            },
            {
                title: 'Encurtador de Links',
                desc: 'Este projeto é um encurtador de links simples construído com React. Ele permite que os usuários encurtem URLs longas em links mais curtos e gerenciáveis.',
                img: '/public/portifolios/encurtador-de-link.jpg',
                favicon: '/public/portifolios/favicon-projetos/link.svg',
                technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
                date: 'Julho de 2024',
                githubLink: 'https://github.com/devthmedu/Link-shortener-using-React',
                siteLink: 'https://link-shortener-using-react.vercel.app/',
            },
        ],

       mobile: [
            {
                title: 'Dieta.IA',
                desc: 'Dieta.IA é um aplicativo revolucionário que permite aos usuários criar dietas personalizadas de forma eficiente. Com uma interface intuitiva e sugestões adaptadas a preferências alimentares e necessidades nutricionais individuais, o aplicativo visa facilitar a adoção de hábitos alimentares saudáveis e sustentáveis.',
                img: '/portifolios/Dieta.ia-app-mobile.jpg',
                favicon: '/portifolios/favicon-projetos/dieta-ia.png',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/Dieta_IA',
                siteLink: '#',
            },
            {
                title: 'App Calculadora',
                desc: 'Uma calculadora simples desenvolvida em React Native, com funcionalidades básicas de adição, subtração, multiplicação e divisão. Esta aplicação apresenta uma interface amigável e animações para uma melhor experiência do usuário.',
                img: '/public/portifolios/App-mobile-Calculadora.jpg',
                favicon: '/public/portifolios/favicon-projetos/calculator.svg',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                date: 'Setembro de 2024',
                githubLink: 'https://github.com/devthmedu/app_calculadora',
                siteLink: '#',
            },
        ],
        typescript: [
            {
                title: 'Customer Insights',
                desc: 'Com uma interface amigável e informações detalhadas, você poderá entender melhor o comportamento dos seus clientes e melhorar suas estratégias de interação e engajamento.',
                img: '/public/portifolios/Customer-Insights.jpg',
                favicon: '/public/portifolios/favicon-projetos/insights.svg',
                technologies: ['TypeScript', 'CSS', 'JavaScript'],
                date: 'Julho de 2024',
                githubLink: 'https://github.com/devthmedu/Customer-Insights',
                siteLink: 'https://customer-insights.vercel.app/',
            },
            {
                title: 'Eduardo zap gpt',
                desc: 'Eduardo-zap-gpt é um assistente virtual amigável e descontraído, projetado para oferecer suporte e responder perguntas de maneira simpática e informal.',
                img: '/public/portifolios/Customer-Insights.jpg',
                favicon: '/public/portifolios/favicon-projetos/chat.svg',
                technologies: ['TypeScript', 'CSS', 'JavaScript'],
                date: 'Julho de 2024',
                githubLink: 'https://github.com/devthmedu/eduardo-zap-gpt',
                siteLink: '',
            },
        ],
        database: [
            {
                title: 'Formulário de Contato com MongoDB',
                desc: 'Este aplicativo web é um formulário de contato construído com Node.js e MongoDB, que coleta e armazena informações dos usuários em um banco de dados, oferecendo feedback após o envio.',
                img: '/public/portifolios/Formulario-DB-Backend.jpg',
                favicon: '/public/portifolios/favicon-projetos/mongodb.svg',
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
