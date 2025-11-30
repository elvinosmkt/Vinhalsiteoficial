import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Activity, ShieldCheck, X, Sparkles } from 'lucide-react';
import { TREATMENTS, WHATSAPP_NUMBER } from '../constants';
import { Treatment } from '../types';

const Treatments: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const openModal = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTreatment(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-light fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Menu de Serviços</span>
          <h1 className="text-5xl md:text-6xl font-serif text-secondary-petrol mb-8">Tratamentos & Protocolos</h1>
          <p className="text-neutral-medium text-lg font-light leading-relaxed">
            Combinamos a expertise médica com os produtos mais renomados do mercado mundial (Restylane, Dysport, Sculptra) para entregar resultados de excelência.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {TREATMENTS.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row group h-full md:h-80">
              
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-full">
                <img 
                  src={treatment.imageUrl} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary-petrol/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary-gold text-[10px] font-bold uppercase tracking-widest">{treatment.category}</span>
                    {treatment.price && (
                      <span className="bg-secondary-warmGray text-secondary-petrol px-3 py-1 rounded-full text-xs font-semibold">
                        {treatment.price}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-secondary-petrol mb-3 group-hover:text-primary-gold transition-colors">{treatment.title}</h3>
                  <p className="text-neutral-medium font-light text-sm mb-4 leading-relaxed line-clamp-3">{treatment.shortDescription}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                   <button 
                    onClick={() => openModal(treatment)}
                    className="text-secondary-petrol font-medium text-xs uppercase tracking-widest hover:text-primary-gold transition-colors flex items-center gap-2"
                  >
                    Ver Detalhes <ArrowRight className="w-3 h-3" />
                  </button>
                  <button 
                     onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria de agendar ${treatment.title}`, '_blank')}
                     className="bg-secondary-petrol text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-primary-gold transition-colors"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal - Premium Style */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-secondary-petrol/80 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 flex flex-col md:flex-row animate-fadeIn overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-secondary-petrol hover:text-white text-secondary-petrol z-20 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative">
              <img 
                src={selectedTreatment.imageUrl} 
                alt={selectedTreatment.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-primary-gold uppercase tracking-widest text-xs font-bold mb-2">{selectedTreatment.category}</p>
                <h2 className="text-3xl font-serif">{selectedTreatment.title}</h2>
                <p className="text-xl font-light mt-2">{selectedTreatment.price}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-7/12 p-8 md:p-12 bg-white">
              
              <div className="prose max-w-none mb-10">
                <h3 className="text-lg font-serif text-secondary-petrol mb-4">Sobre o Procedimento</h3>
                <p className="text-neutral-dark font-light leading-relaxed text-sm md:text-base">
                  {selectedTreatment.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-secondary-warmGray/50 p-6 rounded-lg border border-gray-100">
                   <div className="flex items-center gap-2 mb-3 text-secondary-petrol font-serif text-lg">
                      <Sparkles className="w-5 h-5 text-primary-gold" /> Benefícios
                   </div>
                   <ul className="space-y-2">
                      {selectedTreatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-medium font-light">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" /> {benefit}
                        </li>
                      ))}
                   </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                     <div className="bg-secondary-warmGray/50 p-3 rounded-full h-fit"><Activity className="w-5 h-5 text-secondary-petrol" /></div>
                     <div>
                       <h4 className="font-bold text-secondary-petrol text-sm">Indicação</h4>
                       <p className="text-sm text-neutral-medium font-light">{selectedTreatment.indications}</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="bg-secondary-warmGray/50 p-3 rounded-full h-fit"><Clock className="w-5 h-5 text-secondary-petrol" /></div>
                     <div>
                       <h4 className="font-bold text-secondary-petrol text-sm">Tempo de Resultado</h4>
                       <p className="text-sm text-neutral-medium font-light">{selectedTreatment.resultsTime}</p>
                     </div>
                  </div>
                   <div className="flex gap-4">
                     <div className="bg-secondary-warmGray/50 p-3 rounded-full h-fit"><ShieldCheck className="w-5 h-5 text-secondary-petrol" /></div>
                     <div>
                       <h4 className="font-bold text-secondary-petrol text-sm">Cuidados</h4>
                       <p className="text-sm text-neutral-medium font-light">{selectedTreatment.afterCare}</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de agendar uma avaliação para ${selectedTreatment.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25D366] text-white text-center font-bold py-4 px-6 rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-green-200 uppercase tracking-wider text-xs flex justify-center items-center gap-2"
                >
                  Agendar no WhatsApp
                </a>
                <button
                   onClick={closeModal}
                   className="px-8 py-4 border border-gray-200 text-neutral-medium hover:text-secondary-petrol hover:border-secondary-petrol rounded-sm transition-all uppercase tracking-wider text-xs font-bold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treatments;