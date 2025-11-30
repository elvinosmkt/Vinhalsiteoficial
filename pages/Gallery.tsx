import React, { useState } from 'react';
import { GALLERY_ITEMS, TESTIMONIALS } from '../constants';
import { GalleryItem } from '../types';
import { Quote, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Todos', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  const filteredItems = filter === 'Todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
      
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-secondary-petrol mb-6">Resultados Reais</h1>
        <p className="text-neutral-medium max-w-2xl mx-auto">
            Confira alguns dos resultados transformadores realizados no IAV. 
            Prezamos pela naturalidade e harmonia de cada face.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex justify-center min-w-max space-x-2 md:space-x-4 pb-4">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        filter === cat 
                        ? 'bg-secondary-petrol text-white shadow-lg' 
                        : 'bg-secondary-warmGray text-neutral-medium hover:bg-gray-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
                <div 
                    key={item.id} 
                    onClick={() => setLightboxItem(item)}
                    className="aspect-square group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                >
                    <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-primary-gold text-xs font-bold uppercase">{item.category}</span>
                        <h4 className="text-white font-serif">{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-secondary-warmGray py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center text-secondary-petrol mb-12">O que dizem nossos pacientes e alunos</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm relative">
                        <Quote className="absolute top-6 right-6 text-primary-gold/20 w-12 h-12" />
                        <div className="flex items-center gap-4 mb-6">
                            <img src={t.imageUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-secondary-petrol">{t.name}</h4>
                                <span className="text-xs text-neutral-medium uppercase tracking-wider">{t.role}</span>
                            </div>
                        </div>
                        <p className="text-neutral-dark italic leading-relaxed">"{t.text}"</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxItem(null)}>
            <button className="absolute top-4 right-4 text-white hover:text-primary-gold">
                <X className="w-10 h-10" />
            </button>
            <div className="max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <img src={lightboxItem.imageUrl} alt={lightboxItem.title} className="w-full h-full object-contain rounded-lg shadow-2xl" />
                <div className="bg-white p-4 rounded-b-lg mt-[-4px]">
                    <h3 className="font-serif text-xl text-secondary-petrol">{lightboxItem.title}</h3>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
