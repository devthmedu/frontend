import 'animate.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx'; // Importando o Footer
import Header from '../Nav/Nav.jsx'; // Importando o Header
import './Inicio.css';

const About = () => {
    const [state, setState] = useState(false);

    return (
        <>
            <Header /> {/* Adicionando o Header aqui */}
            <section className="mt-24 mb-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-10 mt-10">
                    <h1 className="text-gray-800 dark:text-gray-200 font-bold text-4xl md:text-5xl animate__animated animate__backInDown flex items-center justify-center">
                        Olá, Bem-vindo ao meu site!
                        <img 
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Alien%20Monster.webp" 
                            alt="Honeybee" 
                            width="50" 
                            height="50" 
                            className="ml-2"
                        />
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Explore os meus projetos e soluções personalizadas que atendem às suas necessidades.
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0">
                    <Link to="/Formulario" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto transition duration-300 hover:bg-indigo-700">
                        Contato
                    </Link>
                    <Link to="/Portfolio" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow-lg block sm:w-auto flex items-center justify-center">
                        Conhecer meu trabalho   
                        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Sparkles.webp" alt="Sparkles" width="35" height="35" className="ml-2" />
                    </Link>
                </div>
            </section>
            <Footer /> {/* Adicionando o Footer aqui */}
        </>
    );
};

export default About;
