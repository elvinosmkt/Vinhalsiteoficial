import React, { useState } from 'react';
import { Calendar, Users, Award, ChevronRight, Check } from 'lucide-react';
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
    // Simulate send
    setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      
      {/* Hero Institute */}
      <section className="bg-secondary-petrol text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <span className="text-primary-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Educação e Excelência</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Instituto Acadêmico Vinhal</h1>
            <p className="text-primary-nude max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Nossa missão é formar profissionais de elite na Harmonização Facial, 
                combinando embasamento científico rigoroso com prática clínica intensiva (Hands-on).
            </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary-warmGray/50 border-b border-gray-200">
         <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 text-center">
            <div className="max-w-xs">
                <Users className="w-10 h-10 text-primary-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-secondary-petrol">Turmas Reduzidas</h3>
                <p className="text-sm text-neutral-medium mt-2">Atenção total do professor para você.</p>
            </div>
            <div className="max-w-xs">
                <Calendar className="w-10 h-10 text-primary-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-secondary-petrol">Prática Intensiva</h3>
                <p className="text-sm text-neutral-medium mt-2">Atendimento real a pacientes modelo.</p>
            </div>
            <div className="max-w-xs">
                <Award className="w-10 h-10 text-primary-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-secondary-petrol">Certificação</h3>
                <p className="text-sm text-neutral-medium mt-2">Reconhecida e valorizada no mercado.</p>
            </div>
         </div>
      </section>

      {/* Courses List */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-serif text-secondary-petrol mb-12 text-center">Cursos Disponíveis</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
            {COURSES.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                        <img src={course.imageUrl} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                course.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                                {course.status === 'open' ? 'Matrículas Abertas' : 'Lista de Espera'}
                            </span>
                        </div>
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-secondary-petrol mb-2 leading-tight">{course.title}</h3>
                            <p className="text-sm text-neutral-medium mb-4">{course.shortDescription}</p>
                            
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-neutral-dark">
                                    <Calendar className="w-4 h-4 text-primary-gold mr-2" />
                                    <span>{course.date}</span>
                                </div>
                                <div className="flex items-start text-sm text-neutral-dark">
                                    <Check className="w-4 h-4 text-primary-gold mr-2 mt-1" />
                                    <span className="flex-1">{course.details[0]} e muito mais.</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-auto">
                            <button 
                                onClick={() => setActiveCourse(course)}
                                className="flex-1 bg-secondary-petrol text-white py-3 px-4 rounded text-sm font-medium hover:bg-opacity-90 transition-colors"
                            >
                                Inscrever-se
                            </button>
                             <a 
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, sou profissional e tenho interesse no curso ${course.title}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-12 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Enrollment/Interest Form Section */}
      <section id="interest-form" className="bg-secondary-warmGray py-20">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif text-secondary-petrol mb-4">
                        {activeCourse ? `Interesse: ${activeCourse.title}` : 'Entre na Lista de Espera'}
                    </h2>
                    <p className="text-neutral-medium">
                        Preencha seus dados abaixo e nossa equipe pedagógica entrará em contato para passar a ementa completa e valores.
                    </p>
                </div>

                {formStatus === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif text-secondary-petrol mb-2">Mensagem Enviada!</h3>
                        <p className="text-neutral-medium">Em breve entraremos em contato pelo WhatsApp.</p>
                        <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary-gold underline">Voltar</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-neutral-dark mb-2">Nome Completo *</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all"
                                    placeholder="Dra. Ana Silva"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-dark mb-2">WhatsApp *</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-2">E-mail</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-dark mb-2">Mensagem (opcional)</label>
                            <textarea 
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all"
                                placeholder="Tenho dúvida sobre as datas..."
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-secondary-petrol text-white font-bold py-4 rounded hover:bg-opacity-90 transition-all shadow-lg"
                        >
                            Enviar Interesse
                        </button>
                        <p className="text-xs text-center text-neutral-medium mt-4">
                            Ao enviar, você concorda em receber contato do instituto via WhatsApp.
                        </p>
                    </form>
                )}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
