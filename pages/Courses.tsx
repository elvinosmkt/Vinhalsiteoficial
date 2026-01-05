
import React, { useState } from 'react';
import { Calendar, Users, Award, ChevronRight, Check, BookOpen } from 'lucide-react';
import { COURSES, WHATSAPP_NUMBER } from '../constants';
import { Course } from '../types';

const Courses: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.phone) {
        setFormStatus('error');
        return;
    }

    const courseTitle = activeCourse ? activeCourse.title : 'Informações Gerais de Cursos';
    
    const message = `Olá! Tenho interesse nos cursos do IAV.
*Curso:* ${courseTitle}
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Mensagem:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    
    setFormStatus('success');
    
    // Pequeno delay para o usuário ver o feedback de sucesso antes de redirecionar
    setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFormStatus('idle');
    }, 1500);
  };

  const scrollToForm = () => {
    const element = document.getElementById('interest-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInterest = (course: Course) => {
    setActiveCourse(course);
    scrollToForm();
  };

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      
      {/* Hero Institute */}
      <section className="bg-secondary-petrol text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-primary-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block animate-fadeIn">Excelência em Ensino</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 animate-slideUp">Instituto Acadêmico <span className="italic">Vinhal</span></h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-10 animate-slideUp delay-100">
                Formamos a próxima geração de líderes em Harmonização Facial. 
                Protocolos baseados em evidência científica, anatomia rigorosa e prática clínica intensiva.
            </p>
             <button 
                onClick={scrollToForm}
                className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-secondary-petrol transition-all uppercase text-xs tracking-widest font-bold"
            >
                Entrar na Lista de Espera
            </button>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-white border-b border-gray-100">
         <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
                <Users className="w-12 h-12 text-primary-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-secondary-petrol mb-2">Hands-On Real</h3>
                <p className="text-sm text-neutral-medium font-light">
                    Você não apenas assiste. Você atende. Grande volume de pacientes modelo para consolidar sua mão.
                </p>
            </div>
            <div className="p-6 border-l border-r border-gray-100">
                <BookOpen className="w-12 h-12 text-primary-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-secondary-petrol mb-2">Ciência Aplicada</h3>
                <p className="text-sm text-neutral-medium font-light">
                    Protocolos fundamentados em anatomia e fisiologia. Segurança é inegociável.
                </p>
            </div>
            <div className="p-6">
                <Award className="w-12 h-12 text-primary-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-secondary-petrol mb-2">Carreira de Sucesso</h3>
                <p className="text-sm text-neutral-medium font-light">
                    Mentorias que vão além da técnica: ensinamos posicionamento, vendas e gestão de clínica.
                </p>
            </div>
         </div>
      </section>

      {/* Courses List */}
      <section className="py-24 container mx-auto px-6 bg-secondary-warmGray/20">
        <h2 className="text-4xl font-serif text-secondary-petrol mb-16 text-center">Agenda de Cursos</h2>
        
        <div className="grid lg:grid-cols-1 gap-10 max-w-5xl mx-auto">
            {COURSES.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-all duration-300 group">
                    <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                        <img 
                            src={course.imageUrl} 
                            alt={course.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-secondary-petrol/20"></div>
                        <div className="absolute top-4 left-4">
                            <span className={`px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${
                                course.status === 'open' ? 'bg-white text-secondary-petrol' : 'bg-secondary-petrol text-white'
                            }`}>
                                {course.status === 'open' ? 'Matrículas Abertas' : 'Lista de Espera'}
                            </span>
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-10 md:w-2/3 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-serif text-secondary-petrol leading-tight group-hover:text-primary-gold transition-colors">{course.title}</h3>
                            </div>
                            <p className="text-neutral-medium font-light mb-6">{course.shortDescription}</p>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold text-primary-gold uppercase tracking-wider mb-1">Detalhes</h4>
                                    <div className="flex items-center text-sm text-neutral-dark font-medium">
                                        <Calendar className="w-4 h-4 text-neutral-medium mr-2" />
                                        <span>{course.date}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-neutral-dark font-medium">
                                        <Users className="w-4 h-4 text-neutral-medium mr-2" />
                                        <span>{course.audience}</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                     <h4 className="text-xs font-bold text-primary-gold uppercase tracking-wider mb-1">O que inclui</h4>
                                     {course.details.slice(0, 2).map((detail, i) => (
                                         <div key={i} className="flex items-start text-sm text-neutral-medium">
                                            <Check className="w-3 h-3 text-green-500 mr-2 mt-1" />
                                            <span>{detail}</span>
                                         </div>
                                     ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-auto border-t border-gray-100 pt-6">
                            <button 
                                onClick={() => handleInterest(course)}
                                className="flex-1 bg-secondary-petrol text-white py-3 px-6 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-primary-gold transition-colors"
                            >
                                Receber Ementa Completa
                            </button>
                             <a 
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, sou profissional e tenho interesse no curso ${course.title}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-12 border border-gray-200 text-secondary-petrol rounded-sm hover:border-secondary-petrol hover:bg-secondary-petrol hover:text-white transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Enrollment/Interest Form Section - Clean & Elegant */}
      <section id="interest-form" className="bg-secondary-petrol py-24 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                <div>
                    <span className="text-primary-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Próximo Passo</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Inscreva-se ou tire suas dúvidas.</h2>
                    <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                        Nossa equipe pedagógica é formada por especialistas prontos para entender seu momento de carreira e indicar o melhor caminho.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-gold font-serif text-xl">1</div>
                            <p className="text-white/80 font-light">Preencha o formulário ao lado.</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-gold font-serif text-xl">2</div>
                            <p className="text-white/80 font-light">Redirecionamento automático para o WhatsApp.</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-gold font-serif text-xl">3</div>
                            <p className="text-white/80 font-light">Garanta sua vaga na turma exclusiva.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white text-neutral-dark rounded-2xl shadow-2xl p-8 md:p-12">
                    {formStatus === 'success' ? (
                        <div className="text-center py-12 animate-fadeIn">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-serif text-secondary-petrol mb-4">Quase lá!</h3>
                            <p className="text-neutral-medium mb-8">Estamos te redirecionando para o WhatsApp do Instituto para finalizar sua pré-inscrição.</p>
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-gold"></div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="mb-2">
                                <h3 className="text-2xl font-serif text-secondary-petrol">Ficha de Interesse</h3>
                                <p className="text-sm text-neutral-medium">{activeCourse ? `Curso selecionado: ${activeCourse.title}` : 'Preencha para receber contato'}</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-1">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-secondary-warmGray border-b-2 border-transparent focus:border-secondary-petrol focus:bg-white outline-none transition-all rounded-t-sm"
                                        placeholder="Dr(a). Seu Nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-1">WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-secondary-warmGray border-b-2 border-transparent focus:border-secondary-petrol focus:bg-white outline-none transition-all rounded-t-sm"
                                        placeholder="(DD) 99999-9999"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-1">E-mail Profissional</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-secondary-warmGray border-b-2 border-transparent focus:border-secondary-petrol focus:bg-white outline-none transition-all rounded-t-sm"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-medium mb-1">Mensagem (Opcional)</label>
                                    <textarea 
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-secondary-warmGray border-b-2 border-transparent focus:border-secondary-petrol focus:bg-white outline-none transition-all rounded-t-sm resize-none"
                                        placeholder="Tenho interesse na próxima turma..."
                                    ></textarea>
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-secondary-petrol text-white font-bold py-4 rounded-sm hover:bg-primary-gold transition-all shadow-lg uppercase tracking-widest text-xs mt-4"
                            >
                                Enviar e Abrir WhatsApp
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
