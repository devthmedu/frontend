import React, { useState } from 'react';
import SuccessModal from './SuccessModal'; // Ajuste o caminho conforme necessário

const ContactForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        fetch('https://formspree.io/f/xblrdolo', {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' },
        })
        .then((response) => {
            if (response.ok) {
                setIsModalOpen(true);
                event.target.reset();
            } else {
                throw new Error('Erro ao enviar a mensagem');
            }
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        });
    };

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto text-gray-600 px-4 md:px-8 text-center">
                <h2 className='text-3xl font-bold text-gray-800'>Entre em Contato</h2>
                <p className="mt-4">Estou aqui para ajudar. Preencha o formulário abaixo e entraremos em contato!</p>
                <form id="contactForm" onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu Nome"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu Email"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Sua Mensagem"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className='w-full px-4 py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
            {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default ContactForm;
