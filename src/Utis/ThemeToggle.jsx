import React, { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const body = document.body;
        body.className = isDarkMode ? 'dark-mode' : 'light-mode';

        // Atualizar favicon
        const favicon = document.getElementById('favicon');
        favicon.href = isDarkMode ? './assets/lua.webp' : './assets/sol.webp';

        // Atualizar estilos dos textos e outros elementos
        const textElements = document.querySelectorAll('.theme-text');
        textElements.forEach(element => {
            element.style.color = isDarkMode ? '#eaeaea' : '#101010'; // Defina as cores apropriadas
        });

        // Adicionar lógica para o footer ou outros elementos, se necessário
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.backgroundColor = isDarkMode ? '#222' : '#f8f9fa'; // Defina as cores do footer
        }

    }, [isDarkMode]);

    return (
        <div>
            <h1 className="theme-text">{isDarkMode ? "Modo Escuro está LIGADO" : "Modo Escuro está DESLIGADO"}</h1>
            <button onClick={toggleTheme} className="theme-text">
                {isDarkMode ? "Tema Claro" : "Tema Escuro"}
            </button>
        </div>
    );
};

export default ThemeToggle;
