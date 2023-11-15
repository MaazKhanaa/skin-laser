import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppChat = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let url = `https://wa.me/${phoneNumber}`;
    
    if (isMobile) {
      url = `whatsapp://send?phone=${phoneNumber}`;
    }

    window.location.href = url;
  };

  return (
      <button onClick={handleWhatsAppClick}>
        <BsWhatsapp />
      </button>
  );
};

export default WhatsAppChat;
