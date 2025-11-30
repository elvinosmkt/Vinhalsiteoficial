import React, { useState } from 'react';
import { GALLERY_ITEMS, TESTIMONIALS } from '../constants';
import { GalleryItem } from '../types';
import { Quote, X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Todos', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  const filteredItems = filter === 'Todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-32 min-h-screen bg-neutral-light fade-in">
      
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-primary-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Portfólio</span>
        <h1 className="text-5xl font-serif text-secondary-petrol mb-6">Resultados Reais</h1>
        <p className="text-neutral-medium max-w-2xl mx-auto font-light leading-relaxed">
            Acreditamos na beleza que preserva a identidade. Nossa galeria reflete a busca incessante por naturalidade, simetria e elegância.
        </p>
      </div>

      {/* Filter Tabs - Elegant */}
      <div className="container mx-auto px-6 mb-12 flex justify-center flex-wrap gap-4">
        {categories.map(cat => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                    filter === cat 
                    ? 'bg-secondary-petrol text-white border-secondary-petrol' 
                    : 'bg-transparent text-neutral-medium border-gray-300 hover:border-secondary-petrol hover:text-secondary-petrol'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Grid - Clean Masonry Feel */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
                <div 
                    key={item.id} 
                    onClick={() => setLightboxItem(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-sm bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
                >
                    <div className="aspect-[4/5] overflow-hidden">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                        />
                    </div>
                    <div className="absolute inset-0 bg-secondary-petrol/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                        <ZoomIn className="text-primary-gold w-8 h-8 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="text-primary-gold text-[10px] font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.category}</span>
                        <h4 className="text-white font-serif text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Testimonials - Premium Layout */}
      <section className="bg-secondary-petrol text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-gold opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif text-center mb-16">O que dizem sobre o IAV</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-xl relative hover:bg-white/10 transition-colors duration-300">
                        <Quote className="text-primary-gold w-10 h-10 mb-6 opacity-80" />
                        <p className="text-white/90 font-light italic leading-relaxed mb-8 min-h-[80px]">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                            <img src={t.imageUrl} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-gold" />
                            <div>
                                <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                                <span className="text-xs text-primary-gold uppercase tracking-wider">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setLightboxItem(null)}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                <X className="w-10 h-10" />
            </button>
            <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <img src={lightboxItem.imageUrl} alt={lightboxItem.title} className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm" />
                <div className="mt-6 text-center">
                    <span className="text-primary-gold text-xs font-bold uppercase tracking-widest">{lightboxItem.category}</span>
                    <h3 className="font-serif text-2xl text-white mt-2">{lightboxItem.title}</h3>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;