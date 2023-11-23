import React from 'react';

const WhatsAppButton = ({ phoneNumber, text }) => {
    const handleWhatsAppClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        let url = `https://wa.me/${phoneNumber}`;

        if (isMobile) {
            url = `whatsapp://send?phone=${phoneNumber}`;
        }

        window.location.href = url;
    };

    return (
        <button className='primaryBtn whatsappBtn' onClick={handleWhatsAppClick}>
            {text}
        </button>
    );
};

export default WhatsAppButton;
