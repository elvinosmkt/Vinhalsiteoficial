import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, GraduationCap, Sparkles } from 'lucide-react';
import { TREATMENTS, WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2070" 
            alt="Clínica Estética Luxo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-petrol/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Instituto Acadêmico <br/><span className="text-primary-gold">Vinhal</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide text-primary-nude">
            Harmonização Facial de Alto Padrão & Cursos de Excelência em Balneário Camboriú.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-gold text-neutral-dark font-medium py-4 px-8 rounded-none hover:bg-white transition-colors uppercase tracking-wider text-sm"
            >
              Agendar Avaliação
            </a>
            <Link 
              to="/cursos"
              className="border border-white text-white font-medium py-4 px-8 rounded-none hover:bg-white hover:text-neutral-dark transition-colors uppercase tracking-wider text-sm"
            >
              Sou Profissional
            </Link>
          </div>
        </div>
      </section>

      {/* Onboarding / Persona Selection */}
      <section className="py-20 bg-white -mt-10 relative z-20 rounded-t-3xl md:rounded-none">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Patient Card */}
            <Link to="/tratamentos" className="group relative overflow-hidden h-96 rounded-xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" alt="Paciente" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2 text-primary-gold">
                   <Sparkles className="w-6 h-6" />
                   <span className="uppercase tracking-widest text-sm font-semibold">Para Você</span>
                </div>
                <h2 className="text-3xl font-serif mb-4">Quero Harmonização Facial</h2>
                <p className="text-white/80 mb-6 font-light">Realce sua beleza natural com segurança e sofisticação.</p>
                <div className="flex items-center gap-2 text-primary-nude group-hover:gap-4 transition-all">
                  Ver Tratamentos <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Professional Card */}
            <Link to="/cursos" className="group relative overflow-hidden h-96 rounded-xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Curso" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-petrol/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                 <div className="flex items-center gap-3 mb-2 text-primary-gold">
                   <GraduationCap className="w-6 h-6" />
                   <span className="uppercase tracking-widest text-sm font-semibold">Para Profissionais</span>
                </div>
                <h2 className="text-3xl font-serif mb-4">Quero Cursos e Mentorias</h2>
                <p className="text-white/80 mb-6 font-light">Eleve sua carreira aprendendo técnicas avançadas com muita prática.</p>
                <div className="flex items-center gap-2 text-primary-nude group-hover:gap-4 transition-all">
                  Ver Cursos <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-secondary-warmGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-secondary-petrol mb-4">Excelência em Resultados</h2>
             <div className="w-20 h-1 bg-primary-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
             <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Star className="w-8 h-8 text-primary-gold mb-4" />
                <h3 className="font-serif text-xl mb-2">Naturalidade</h3>
                <p className="text-neutral-medium text-sm">Respeitamos sua anatomia para resultados elegantes e imperceptíveis.</p>
             </div>
             <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 text-primary-gold mb-4 font-serif text-2xl">M</div>
                <h3 className="font-serif text-xl mb-2">Método IAV</h3>
                <p className="text-neutral-medium text-sm">Protocolos exclusivos desenvolvidos para durabilidade e segurança.</p>
             </div>
             <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <GraduationCap className="w-8 h-8 text-primary-gold mb-4" />
                <h3 className="font-serif text-xl mb-2">Ensino Premium</h3>
                <p className="text-neutral-medium text-sm">Turmas reduzidas e muita prática em pacientes reais (Hands-on).</p>
             </div>
             <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Sparkles className="w-8 h-8 text-primary-gold mb-4" />
                <h3 className="font-serif text-xl mb-2">Tecnologia</h3>
                <p className="text-neutral-medium text-sm">Os melhores produtos e equipamentos do mercado mundial.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Mini Treatments List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary-gold uppercase tracking-widest text-sm font-semibold">Procedimentos</span>
              <h2 className="text-3xl md:text-4xl font-serif text-secondary-petrol mt-2">Nossos Tratamentos</h2>
            </div>
            <Link to="/tratamentos" className="hidden md:flex items-center gap-2 text-secondary-petrol hover:text-primary-gold transition-colors font-medium">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TREATMENTS.slice(0, 3).map((treatment) => (
              <div key={treatment.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 rounded-lg">
                  <img src={treatment.imageUrl} alt={treatment.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="text-primary-gold text-xs font-bold uppercase tracking-wider mb-2">{treatment.category}</p>
                <h3 className="text-xl font-serif text-secondary-petrol mb-2">{treatment.title}</h3>
                <p className="text-neutral-medium font-light line-clamp-2">{treatment.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/tratamentos" className="inline-flex items-center gap-2 text-secondary-petrol font-medium border-b border-secondary-petrol pb-1">
              Ver todos os tratamentos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary-petrol text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Pronto para realçar sua melhor versão?</h2>
          <p className="text-primary-nude text-lg font-light mb-10 max-w-2xl mx-auto">
            Agende uma avaliação personalizada com nossa equipe e descubra o poder da harmonização facial.
          </p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary-gold text-neutral-dark font-medium py-4 px-10 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;