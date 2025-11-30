import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white fade-in">
        
        {/* Story Section */}
        <section className="container mx-auto px-4 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img 
                        src="https://picsum.photos/id/1025/800/1000" 
                        alt="Dra. Vinhal" 
                        className="rounded-lg shadow-2xl w-full max-h-[600px] object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <span className="text-primary-gold uppercase tracking-widest text-sm font-bold">Nossa História</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-secondary-petrol mt-4 mb-8">Instituto Acadêmico Vinhal</h1>
                    <div className="space-y-6 text-neutral-medium leading-relaxed font-light text-lg">
                        <p>
                            Fundado em Balneário Camboriú, o IAV nasceu com o propósito de unir a excelência clínica em Harmonização Orofacial com o ensino de alto nível.
                        </p>
                        <p>
                            Sob a liderança da Dra. Vinhal, o instituto se tornou referência na região, atraindo pacientes que buscam resultados naturais e seguros, e profissionais que desejam se especializar com quem vive a prática clínica diariamente.
                        </p>
                        <p>
                            Acreditamos que a beleza é individual. Nossa abordagem rejeita padrões massificados e busca, através da ciência e da arte, a melhor versão de cada rosto.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Values */}
        <section className="bg-secondary-petrol text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 className="text-2xl font-serif text-primary-gold mb-4">Ética e Segurança</h3>
                        <p className="font-light opacity-80">A saúde do paciente vem sempre em primeiro lugar. Utilizamos apenas produtos com aprovação da ANVISA e protocolos consagrados.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-primary-gold mb-4">Naturalidade</h3>
                        <p className="font-light opacity-80">Nossos tratamentos visam o rejuvenescimento elegante. Você, só que melhor.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-primary-gold mb-4">Inovação Constante</h3>
                        <p className="font-light opacity-80">Estamos sempre atualizados com as últimas técnicas e tecnologias mundiais da HOF.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Location Teaser */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif text-secondary-petrol mb-6">Localização Privilegiada</h2>
                <p className="text-neutral-medium max-w-2xl mx-auto mb-10">
                    Situado no coração de Balneário Camboriú, nosso espaço foi projetado para oferecer conforto, privacidade e uma experiência sensorial única.
                </p>
                <img 
                    src="https://picsum.photos/id/1031/1200/500" 
                    alt="Clínica Interior" 
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
            </div>
        </section>
    </div>
  );
};

export default About;
