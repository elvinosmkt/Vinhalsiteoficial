import { Treatment, Course, Testimonial, GalleryItem } from './types';

export const WHATSAPP_NUMBER = "5547999999999"; // Replace with real number
export const INSTAGRAM_URL = "https://instagram.com/institutoacademicovinhal";
export const ADDRESS = "Av. Atlântica, 1234 - Balneário Camboriú, SC";

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    category: 'Harmonização Facial',
    title: 'Full Face',
    shortDescription: 'Reestruturação completa e equilibrada dos traços faciais.',
    description: 'O Full Face é um conjunto de procedimentos personalizados para realçar a beleza natural, corrigir assimetrias e promover o rejuvenescimento global da face.',
    benefits: ['Rejuvenescimento natural', 'Melhora do contorno', 'Correção de assimetrias'],
    indications: 'Pacientes que buscam rejuvenescimento global ou embelezamento.',
    procedureInfo: 'Realizado com ácido hialurônico e bioestimuladores sob anestesia local.',
    resultsTime: 'Imediato, com melhora progressiva em 30 dias.',
    afterCare: 'Evitar sol e atividade física intensa por 24h.',
    imageUrl: 'https://images.unsplash.com/photo-1596472247752-7d9732e5f379?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Toxina Botulínica',
    title: 'Botox Preventivo e Corretivo',
    shortDescription: 'Suavização de rugas e linhas de expressão.',
    description: 'A aplicação de toxina botulínica relaxa a musculatura facial, prevenindo a formação de rugas estáticas e suavizando as já existentes.',
    benefits: ['Pele mais lisa', 'Olhar descansado', 'Prevenção de vincos profundos'],
    indications: 'Rugas na testa, glabela e "pés de galinha".',
    procedureInfo: 'Aplicação rápida (15min) com microagulhas.',
    resultsTime: 'Início em 3 dias, pico em 15 dias.',
    afterCare: 'Não deitar por 4h, não massagear a área.',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Bioestimuladores',
    title: 'Estímulo de Colágeno',
    shortDescription: 'Recupere a firmeza e a qualidade da pele.',
    description: 'Substâncias injetáveis que estimulam o organismo a produzir colágeno novo, melhorando a flacidez e a textura da pele.',
    benefits: ['Firmeza', 'Efeito lifting gradual', 'Melhora da textura'],
    indications: 'Flacidez facial e corporal.',
    procedureInfo: 'Injeção com cânula, minimamente invasiva.',
    resultsTime: 'Visível a partir de 45 dias.',
    afterCare: 'Massagem local conforme orientação (5x5x5).',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'Preenchimento',
    title: 'Preenchimento Labial',
    shortDescription: 'Volume, contorno e hidratação para os lábios.',
    description: 'Técnica refinada para desenhar o contorno, projetar ou dar volume aos lábios, sempre respeitando as proporções do rosto.',
    benefits: ['Lábios desenhados', 'Hidratação profunda (glossy effect)', 'Volume sensual e elegante'],
    indications: 'Lábios finos, assimétricos ou desidratados.',
    procedureInfo: 'Ácido hialurônico específico para mucosa.',
    resultsTime: 'Imediato (com inchaço nos primeiros dias).',
    afterCare: 'Gelo local e hidratação.',
    imageUrl: 'https://images.unsplash.com/photo-1620331313174-d73130e98030?auto=format&fit=crop&q=80&w=800'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Imersão em Harmonização Orofacial',
    shortDescription: '5 dias de prática intensiva em pacientes reais.',
    audience: 'Cirurgiões Dentistas, Médicos e Biomédicos.',
    duration: '5 dias (40h)',
    status: 'open',
    date: '20 a 25 de Outubro',
    details: ['Anatomia aplicada', 'Técnicas de preenchimento avançado', 'Intercorrências', 'Prática clínica supervisionada'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    title: 'Residência Clínica Avançada',
    shortDescription: 'Mentoria VIP para profissionais que buscam excelência.',
    audience: 'Profissionais já atuantes em HOF.',
    duration: '6 meses (módulos mensais)',
    status: 'soon',
    date: 'Início em Janeiro/2025',
    details: ['Planejamento complexo', 'Fios de sustentação', 'Bioestimuladores corporais', 'Marketing para estética'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dra. Juliana M.',
    role: 'Aluna - Imersão HOF',
    text: 'O curso mudou minha visão clínica. A segurança que a Dra. passa e a quantidade de pacientes modelo é impressionante. Saí pronta para atender.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't2',
    name: 'Carolina S.',
    role: 'Paciente',
    text: 'Fiz meu preenchimento labial e estou apaixonada. Ficou super natural, exatamente como eu queria. A clínica é linda e o atendimento impecável.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't3',
    name: 'Dr. Roberto F.',
    role: 'Aluno - Mentoria',
    text: 'O Instituto Vinhal é referência em Balneário. A estrutura de ensino é de primeiro mundo.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Labial', title: 'Preenchimento Labial Natural', imageUrl: 'https://images.unsplash.com/photo-1588510065287-c20417937d4d?auto=format&fit=crop&q=80&w=600' },
  { id: 'g2', category: 'Full Face', title: 'Rejuvenescimento Global', imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600' },
  { id: 'g3', category: 'Toxina', title: 'Tratamento de Rugas', imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' },
  { id: 'g4', category: 'Bioestimulador', title: 'Melhora de Contorno', imageUrl: 'https://images.unsplash.com/photo-1609496697142-2d99bdabd448?auto=format&fit=crop&q=80&w=600' },
  { id: 'g5', category: 'Labial', title: 'Hidratação e Volume', imageUrl: 'https://images.unsplash.com/photo-1620331313174-d73130e98030?auto=format&fit=crop&q=80&w=600' },
  { id: 'g6', category: 'Full Face', title: 'Harmonização Masculina', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600' },
];