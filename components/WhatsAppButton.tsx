import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação ou saber mais informações.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
      aria-label="Agendar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden md:inline-block">Agendar Agora</span>
    </button>
  );
};

export default WhatsAppButton;
