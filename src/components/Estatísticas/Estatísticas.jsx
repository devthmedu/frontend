import { useEffect } from 'react';
import './Estatísticas.css';

const Estatisticas = () => {
    useEffect(() => {
        const counters = {
            projetos: {
                element: document.getElementById('contador-projetos'),
                value: 10,
                dailyIncrease: 1,
            },
            study: {
                element: document.getElementById('contador-estudo'),
                value: 1300,
                dailyIncrease: 3,
            },
            repositories: {
                element: document.getElementById('contador-repositorios'),
                value: 19,
                dailyIncrease: 2,
            },
            coffee: {
                element: document.getElementById('contador-cafe'),
                value: 140,
                dailyIncrease: 5,
            },
        };

        const increaseCountersDaily = () => {
            const today = new Date();
            const startDate = new Date('2024-09-14');
            const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

            for (const key in counters) {
                const counter = counters[key];
                counter.value += counter.dailyIncrease * daysPassed;
                counter.element.setAttribute('data-target', counter.value);
            }

            increaseCountersWithAnimation();
        };

        const increaseCountersWithAnimation = () => {
            for (const key in counters) {
                const counter = counters[key];
                animateValue(counter.element, 0, counter.value, 1500);
            }
        };

        const animateValue = (element, start, end, duration) => {
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => {
                current += increment;
                element.textContent = current;
                if (current === end) clearInterval(timer);
            }, stepTime);
        };

        increaseCountersDaily();
        const intervalId = setInterval(increaseCountersDaily, 86400000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-14 bg-gray-50 dark:bg-[#111]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                        Meus Números em Destaque
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Principais Conquistas e Experiências em Desenvolvimento
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                        {[
                            {
                                id: 'contador-projetos',
                                imgSrc: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
                                title: "Projetos Concluídos",
                            },
                            {
                                id: 'contador-estudo',
                                imgSrc: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Yawning%20Face.webp",
                                title: "Horas de Estudo",
                            },
                            {
                                id: 'contador-repositorios',
                                imgSrc: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Rocket.webp",
                                title: "Deploys Realizados",
                            },
                            {
                                id: 'contador-cafe',
                                imgSrc: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Food%20and%20Drink/Hot%20Beverage.webp",
                                title: "Cafés Bebidos para Estudar",
                            },
                        ].map((item) => (
                            <li key={item.id} className="text-center flex flex-col items-center">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-16 h-16 mb-2"
                                />
                                <h4 id={item.id} className="text-5xl sm:text-6xl text-indigo-400 font-semibold">0</h4>
                                <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Estatisticas;
