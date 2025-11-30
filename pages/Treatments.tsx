import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Activity, ShieldCheck, X } from 'lucide-react';
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
    <div className="pt-24 pb-20 min-h-screen bg-secondary-warmGray fade-in">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-secondary-petrol mb-6">Tratamentos & Procedimentos</h1>
          <p className="text-neutral-medium text-lg font-light">
            Protocolos exclusivos focados em rejuvenescimento natural e embelezamento facial. 
            Utilizamos apenas os melhores produtos do mercado mundial.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={treatment.imageUrl} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-petrol rounded-sm">
                  {treatment.category}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-secondary-petrol mb-3">{treatment.title}</h3>
                <p className="text-neutral-medium font-light mb-6 flex-grow">{treatment.shortDescription}</p>
                
                <ul className="mb-8 space-y-2">
                  {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-dark">
                      <CheckCircle className="w-4 h-4 text-primary-gold mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => openModal(treatment)}
                  className="w-full py-3 border border-secondary-petrol text-secondary-petrol font-medium hover:bg-secondary-petrol hover:text-white transition-colors uppercase text-sm tracking-wider rounded-sm flex justify-center items-center gap-2 group"
                >
                  Ver Detalhes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 flex flex-col md:flex-row animate-fadeIn">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/50 rounded-full hover:bg-white text-secondary-petrol z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image (Mobile Top / Desktop Left) */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img 
                src={selectedTreatment.imageUrl} 
                alt={selectedTreatment.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary-petrol/20"></div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
              <span className="text-primary-gold text-xs font-bold uppercase tracking-widest mb-2 block">{selectedTreatment.category}</span>
              <h2 className="text-3xl font-serif text-secondary-petrol mb-6">{selectedTreatment.title}</h2>
              
              <p className="text-neutral-dark mb-8 leading-relaxed">
                {selectedTreatment.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary-warmGray p-4 rounded-lg">
                   <div className="flex items-center gap-2 mb-2 text-secondary-petrol font-semibold">
                      <Activity className="w-4 h-4" /> Indicação
                   </div>
                   <p className="text-sm text-neutral-medium">{selectedTreatment.indications}</p>
                </div>
                 <div className="bg-secondary-warmGray p-4 rounded-lg">
                   <div className="flex items-center gap-2 mb-2 text-secondary-petrol font-semibold">
                      <Clock className="w-4 h-4" /> Resultado
                   </div>
                   <p className="text-sm text-neutral-medium">{selectedTreatment.resultsTime}</p>
                </div>
                 <div className="bg-secondary-warmGray p-4 rounded-lg">
                   <div className="flex items-center gap-2 mb-2 text-secondary-petrol font-semibold">
                      <ShieldCheck className="w-4 h-4" /> Pós-procedimento
                   </div>
                   <p className="text-sm text-neutral-medium">{selectedTreatment.afterCare}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8 mt-auto">
                <p className="text-center text-sm text-neutral-medium mb-4">Gostou deste tratamento? Agende uma avaliação.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de saber mais sobre o tratamento ${selectedTreatment.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-[#25D366] text-white text-center font-bold py-4 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
                >
                  Agendar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treatments;
