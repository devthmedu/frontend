import React, { useState } from 'react';

const CookieBubble = ({
    messageTextColor = 'rgba(0, 0, 0, 1)',
    buttonText = 'Entendi',
    messageFontSize = '17px',
    iconColor = 'rgba(19, 154, 241, 1)',
    buttonColor = 'rgba(19, 154, 241, 1)',
    iconVisibility = true,
    cookiePolicyButtonText = 'Leia nossa política de cookies',
    cookiePolicyButtonUrl = 'http://allaboutcookies.org',
    cookiePolicyButtonTarget = '_blank',
    boxPosition = 'top-center',
    messageText = 'Utilizamos cookies para personalizar sua experiência. Ao continuar a visitar este site, você concorda com o uso de cookies.'
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null; // Não renderiza se não estiver visível

    return (
        <div
            className={`cookie-bubble ${boxPosition}`}
            style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
            <div style={{ color: messageTextColor, fontSize: messageFontSize }}>
                {messageText}
                {iconVisibility && (
                    <span style={{ color: iconColor }}> 🍪 </span> // Exemplo de ícone
                )}
                <button 
                    onClick={() => setIsVisible(false)} 
                    style={{ backgroundColor: buttonColor, color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', marginLeft: '10px' }}
                >
                    {buttonText}
                </button>
                <a href={cookiePolicyButtonUrl} target={cookiePolicyButtonTarget} style={{ color: 'blue', textDecoration: 'underline', marginLeft: '10px' }}>
                    {cookiePolicyButtonText}
                </a>
            </div>
        </div>
    );
};

export default CookieBubble;
