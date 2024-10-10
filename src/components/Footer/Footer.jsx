import React from 'react';

const Footer = () => {
    const footerNavs = [
        { href: 'https://www.linkedin.com/in/devthm/', name: 'LinkedIn' },
        { href: 'https://github.com/devthmedu', name: 'GitHub' },
        { href: 'https://www.instagram.com/devthmedu', name: 'Instagram' },
    ];

    return (
        <footer className="pt-10 bg-gray-100 dark:bg-[#111]" role="contentinfo">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-400 md:px-8">
                <div className="mt-10 py-10 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between">
                    <p aria-label="Direitos autorais" className="text-center sm:text-left">
                        © 2024 Thomas Eduardo. Todos os direitos reservados.
                    </p>
                    <nav aria-label="Navegação do rodapé" className="mt-6 sm:mt-0">
                        <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:text-sm">
                            {footerNavs.map((item, idx) => (
                                <li key={idx} className="text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 duration-150">
                                    <a href={item.href} title={`Visite meu perfil no ${item.name}`} target="_blank" rel="noopener noreferrer">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
