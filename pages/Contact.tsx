import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-secondary-warmGray fade-in">
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-serif text-secondary-petrol mb-4">Fale Conosco</h1>
                <p className="text-neutral-medium">Estamos prontos para atender você.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                
                {/* Info Side */}
                <div className="bg-secondary-petrol text-white p-10 md:p-14">
                    <h2 className="text-2xl font-serif mb-8">Informações de Contato</h2>
                    
                    <ul className="space-y-8">
                        <li className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary-gold mt-1" />
                            <div>
                                <h3 className="font-bold text-primary-gold mb-1">Endereço</h3>
                                <p className="opacity-80 leading-relaxed">{ADDRESS}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary-gold mt-1" />
                            <div>
                                <h3 className="font-bold text-primary-gold mb-1">WhatsApp & Telefone</h3>
                                <p className="opacity-80">(47) 99999-9999</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary-gold mt-1" />
                            <div>
                                <h3 className="font-bold text-primary-gold mb-1">E-mail</h3>
                                <p className="opacity-80">contato@iav.com.br</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-primary-gold mt-1" />
                            <div>
                                <h3 className="font-bold text-primary-gold mb-1">Horário de Atendimento</h3>
                                <p className="opacity-80">Segunda a Sexta: 09h às 19h<br/>Sábados: Apenas com agendamento</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-12">
                        <a 
                            href={INSTAGRAM_URL} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-block border border-white/20 hover:bg-white/10 px-6 py-2 rounded-full transition-colors"
                        >
                            Siga-nos no Instagram
                        </a>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-10 md:p-14">
                    <h2 className="text-2xl font-serif text-secondary-petrol mb-6">Envie uma mensagem</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-1">Seu Nome</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-primary-gold outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-1">WhatsApp / Telefone</label>
                            <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-primary-gold outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-1">Assunto</label>
                            <select className="w-full border-b border-gray-300 py-2 focus:border-primary-gold outline-none transition-colors bg-transparent">
                                <option>Agendamento de Consulta</option>
                                <option>Informações sobre Cursos</option>
                                <option>Dúvidas Gerais</option>
                                <option>Parcerias</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-1">Mensagem</label>
                            <textarea rows={3} className="w-full border-b border-gray-300 py-2 focus:border-primary-gold outline-none transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-secondary-petrol text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all">
                            Enviar Mensagem
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center">
                        <span className="text-neutral-medium text-sm">Ou chame diretamente:</span>
                        <a 
                             href={`https://wa.me/${WHATSAPP_NUMBER}`}
                             target="_blank"
                             rel="noreferrer"
                             className="block mt-2 font-bold text-[#25D366] hover:underline"
                        >
                            Conversar no WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;
