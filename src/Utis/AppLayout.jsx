import React from 'react';
import NotFound from './404';

const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

const AppLayout = ({ children, isError }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {isError ? (
                isMobileDevice() ? (
                    <div className="flex flex-col items-center justify-center flex-grow">
                        <h1 className="text-2xl font-bold text-red-600">Erro: Página não encontrada</h1>
                        <p className="text-gray-600">Parece que a página que você está procurando não está disponível.</p>
                    </div>
                ) : (
                    <NotFound />
                )
            ) : (
                <div className="flex-grow">
                    {children}
                </div>
            )}
        </div>
    );
};

export default AppLayout;
