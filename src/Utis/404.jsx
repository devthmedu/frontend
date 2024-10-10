import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const navegacoes = [
        {
            icon: (
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/House.webp" alt="Casa" width="40" height="40" />
            ),
            title: "Retornar ao Início",
            desc: "Descubra diversos recursos disponíveis.",
            href: "/"
        },
        {
            icon: (
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Man%20Technologist.webp" alt="Homem Tecnólogo" width="40" height="40" />
            ),
            title: "Ajuda",
            desc: "Acesse suporte e assistência aqui.",
            href: "/Formulario"
        }
    ];

    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-gray-600">
                    <div className="space-y-3 text-center">
                        <h3 className="text-indigo-600 font-semibold">Erro 404</h3>
                        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">Página Não Encontrada</p>
                        <p>Desculpe, a página que você está tentando acessar não foi encontrada ou foi removida.</p>
                    </div>
                    <div className="mt-12">
                        <ul className="divide-y">
                            {navegacoes.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 py-6">
                                    <div className="flex-none w-14 h-14 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-gray-800 font-medium">{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <Link to={item.href} className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                                            Saiba mais
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
