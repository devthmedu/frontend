import './CursosCertificados.css';

export default () => {
    const team = [
        {
            avatar: "/logos-certificados/ada.png",
            name: "API Rest",
            title: "Certificado em ADA Tech 2024",
        },
        {
            avatar: "/logos-certificados/ada.png", // Corrija o caminho conforme necessário
            name: "Figma para Devs",
            title: "Certificado em ADA Tech 2024",
        },
        {
            avatar: "/logos-certificados/ada.png", // Corrija o caminho conforme necessário
            name: "Git e Versionamento",
            title: "Certificado em ADA Tech 2024",
        },
        {
            avatar: "/logos-certificados/fiap.jpeg",
            name: "User Experience",
            title: "Certificado em FIAP 2024",
        },
        {
            avatar: "/logos-certificados/dioo.png",
            name: "SAP",
            title: "Certificado em Grandes Projetos 2024",
        },
        {
            avatar: "/logos-certificados/basesocial.png",
            name: "Cloud Computing",
            title: "Certificado em AWS Re/Start 2023",
        },
    ];

    return (
        <section className="py-14 bg-gray-50 dark:bg-[#111]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl text-center mx-auto">
                    <h3 className="text-gray-800 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
                        Certificados e Qualificações
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        Reconhecimentos e Certificações Profissionais
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((item, idx) => (
                            <li key={idx} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform duration-200 hover:scale-105">
                                <div className="flex-none w-28 h-28 mb-4">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full rounded-full border-4 border-indigo-600 shadow-md"
                                        alt={item.name}
                                    />
                                </div>
                                <h4 className="text-gray-700 dark:text-gray-200 font-semibold text-lg">{item.name}</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm text-center mt-1">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
