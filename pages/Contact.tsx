
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    assunto: 'Agendamento de Consulta',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de entrar em contato através do site.
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Assunto:* ${formData.assunto}
*Mensagem:* ${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-32 min-h-screen bg-neutral-light fade-in">
        <div className="container mx-auto px-6 pb-24">
            
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif text-secondary-petrol mb-4">Fale Conosco</h1>
                <p className="text-neutral-medium font-light text-lg">Estamos à disposição para agendamentos e informações.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Left Column: Info & Map */}
                <div className="space-y-12">
                    
                    {/* Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-gold/50 transition-colors group">
                            <Phone className="w-8 h-8 text-secondary-petrol mb-4 group-hover:text-primary-gold transition-colors" />
                            <h3 className="font-serif text-lg text-secondary-petrol mb-2">Telefone & WhatsApp</h3>
                            <p className="text-neutral-medium font-light text-sm">(47) 97400-9399</p>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-xs font-bold uppercase tracking-wider text-primary-gold mt-4 inline-block border-b border-primary-gold pb-0.5">Iniciar conversa</a>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-gold/50 transition-colors group">
                            <Mail className="w-8 h-8 text-secondary-petrol mb-4 group-hover:text-primary-gold transition-colors" />
                            <h3 className="font-serif text-lg text-secondary-petrol mb-2">E-mail</h3>
                            <p className="text-neutral-medium font-light text-sm">contato@iav.com.br</p>
                            <a href="mailto:contato@iav.com.br" className="text-xs font-bold uppercase tracking-wider text-primary-gold mt-4 inline-block border-b border-primary-gold pb-0.5">Enviar e-mail</a>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-gold/50 transition-colors group sm:col-span-2">
                            <Clock className="w-8 h-8 text-secondary-petrol mb-4 group-hover:text-primary-gold transition-colors" />
                            <h3 className="font-serif text-lg text-secondary-petrol mb-2">Horário de Atendimento</h3>
                            <p className="text-neutral-medium font-light text-sm">Segunda a Sexta: 09h às 20h • Sábados: 09h às 12h • Domingos: Fechado</p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 w-full h-64 rounded-xl overflow-hidden shadow-inner relative group">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.887295710682!2d-48.63595568495484!3d-26.98592698309607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b63a4362d857%3A0x6b12a80398334812!2sAv.%20Atl%C3%A2ntica%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1695123456789!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            loading="lazy" 
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                </div>

                {/* Right Column: Form */}
                <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-serif text-secondary-petrol mb-8">Envie uma mensagem</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-2">Nome</label>
                                <input 
                                  type="text" 
                                  name="nome"
                                  required
                                  value={formData.nome}
                                  onChange={handleChange}
                                  className="w-full border border-gray-200 bg-secondary-warmGray/30 rounded px-4 py-3 focus:border-primary-gold focus:bg-white outline-none transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-2">Telefone</label>
                                <input 
                                  type="tel" 
                                  name="telefone"
                                  required
                                  value={formData.telefone}
                                  onChange={handleChange}
                                  className="w-full border border-gray-200 bg-secondary-warmGray/30 rounded px-4 py-3 focus:border-primary-gold focus:bg-white outline-none transition-all" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-2">Assunto</label>
                            <select 
                              name="assunto"
                              value={formData.assunto}
                              onChange={handleChange}
                              className="w-full border border-gray-200 bg-secondary-warmGray/30 rounded px-4 py-3 focus:border-primary-gold focus:bg-white outline-none transition-all text-neutral-dark"
                            >
                                <option>Agendamento de Consulta</option>
                                <option>Informações sobre Cursos</option>
                                <option>Financeiro / Parcerias</option>
                                <option>Outros</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-2">Mensagem</label>
                            <textarea 
                              name="mensagem"
                              required
                              rows={5} 
                              value={formData.mensagem}
                              onChange={handleChange}
                              className="w-full border border-gray-200 bg-secondary-warmGray/30 rounded px-4 py-3 focus:border-primary-gold focus:bg-white outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-secondary-petrol text-white font-bold py-4 rounded-sm hover:bg-primary-gold transition-all shadow-lg uppercase tracking-widest text-xs">
                            Enviar via WhatsApp
                        </button>
                    </form>

                     <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center gap-6">
                        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-neutral-medium hover:text-secondary-petrol transition-colors flex items-center gap-2 text-sm font-medium">
                            <Instagram className="w-5 h-5" /> @institutoacademicovinhal
                        </a>
                     </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;
