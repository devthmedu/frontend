import React, { useEffect } from 'react';

const SuccessModal = ({ onClose }) => {
    // Adicione um efeito para tocar o som quando o modal for exibido
    useEffect(() => {
        const audio = new Audio('/sounds/success.mp3'); // Ajuste o caminho conforme necessário
        audio.play();
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
                <div className="flex justify-between py-3">
                    <div className="flex">
                        <div className="flex-none">
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Check%20Mark.webp" alt="Sucesso" className="h-12 w-12 rounded-full" />
                        </div>
                        <div className="self-center ml-3">
                            <span className="text-green-600 font-semibold">Sucesso</span>
                            <p className="text-green-600 mt-1">Mensagem enviada com sucesso!</p>
                        </div>
                    </div>
                    <button className="self-start text-green-500" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
