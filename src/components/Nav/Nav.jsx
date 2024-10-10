import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const ProfileDropDown = ({ className, isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Início", path: "/" },
        { title: "Sobre", path: "/Portfolio" },
        { title: "Projetos", path: "/Projetos" },
        { title: "Contato", path: "/Formulario" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleDropDown);
        return () => document.removeEventListener('click', handleDropDown);
    }, []);

    return (
        <div className={`relative ${className}`}>
            <div className="flex items-center space-x-4">
                <button 
                    ref={profileRef} 
                    className={`w-10 h-10 outline-none rounded-full ring-offset-2 ring-2 ${isDarkMode ? 'ring-gray-700' : 'ring-gray-200'} lg:focus:ring-indigo-600`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    <img src="/fotos-pessoais/Thomas.jpg" className="w-full h-full rounded-full" alt="Thomas Eduardo" />
                </button>
                <div className="lg:hidden">
                    <span className={`block ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Thomas Eduardo</span>
                    <span className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>developer.thomas@outlook.com.br</span>
                </div>
            </div>
            {isOpen && (
                <ul className={`absolute top-12 left-0 mt-1 space-y-1 lg:w-52 lg:shadow-md lg:rounded-md lg:text-sm ${isDarkMode ? 'bg-[#111]' : 'bg-white'}`}>
                    {navigation.map((item, idx) => (
                        <li key={idx}>
                            <Link 
                                className={`block ${isDarkMode ? 'text-white' : 'text-gray-600'} lg:hover:bg-gray-50 lg:p-1`} 
                                to={item.path} 
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            className={`block ${isDarkMode ? 'text-white' : 'text-gray-600'} lg:hover:bg-gray-50 lg:p-1`}
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? "Tema Claro" : "Tema Escuro"}
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

const Nav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuState, setMenuState] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.className = !isDarkMode ? 'dark-mode' : 'light-mode'; // Altera a classe do body
    };

    const paths = {
        "Início": "/",
        "Sobre": "/Portfolio",
        "Projetos": "/Projetos",
        "Contato": "/Formulario"
    };

    return (
        <nav className={`border-b ${isDarkMode ? 'bg-[#111]' : 'bg-white'} transition-colors duration-300`}>
            <div className="flex items-center justify-between py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-1 flex items-center space-x-6">
                    <ProfileDropDown className="hidden lg:block" isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    <button 
                        className={`outline-none text-gray-400 block lg:hidden`}
                        onClick={() => setMenuState(!menuState)}
                        aria-label="Toggle menu"
                        aria-expanded={menuState}
                    >
                        {menuState ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="flex-none lg:flex-initial">
                    <img src="/favicon/favicon-claro.png" width={50} height={50} alt="Logo" />
                </div>
            </div>
            {menuState && (
                <div className={`block lg:hidden ${isDarkMode ? 'bg-[#111]' : 'bg-white'} p-2 z-50 transition-colors duration-300`}>
                    <ul className="space-y-1">
                        {Object.entries(paths).map(([title, path], idx) => (
                            <li key={idx}>
                                <Link 
                                    to={path} 
                                    className={`block ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:bg-gray-50 p-1`} 
                                    onClick={() => setMenuState(false)} 
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button 
                                className={`block ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:bg-gray-50 p-1`}
                                onClick={toggleTheme}
                            >
                                {isDarkMode ? "Tema Claro" : "Tema Escuro"}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
