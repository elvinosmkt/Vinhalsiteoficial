import { Treatment, Course, Testimonial, GalleryItem } from './types';

export const WHATSAPP_NUMBER = "5547999999999"; 
export const INSTAGRAM_URL = "https://instagram.com/institutoacademicovinhal";
export const ADDRESS = "Av. Atlântica, 1234 - Balneário Camboriú, SC";

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    category: 'Rejuvenescimento Avançado',
    title: 'BioLift Facial',
    price: 'R$ 2.500,00',
    shortDescription: 'Lifting não cirúrgico com bioestimuladores de alta performance.',
    description: 'O BioLift Facial é o protocolo assinatura do IAV. Utilizamos uma combinação estratégica de bioestimuladores de colágeno e pontos de sustentação para promover um efeito lifting imediato e duradouro, sem a necessidade de cirurgia.',
    benefits: ['Efeito Lifting imediato', 'Estímulo intenso de colágeno', 'Melhora do contorno mandibular'],
    indications: 'Flacidez leve a moderada, perda de contorno facial.',
    procedureInfo: 'Procedimento minimamente invasivo, realizado com cânulas.',
    resultsTime: 'Imediato, com pico de colágeno em 3 meses.',
    afterCare: 'Evitar atividade física por 24h e sol intenso.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Harmonização',
    title: 'Preenchimento Labial',
    price: 'R$ 1.300,00',
    shortDescription: 'Volume, contorno e hidratação com técnica russa ou natural.',
    description: 'Esculpimos lábios que respeitam a proporção áurea do seu rosto. Seja para dar volume (técnica Russian Lips), definir o arco do cupido ou apenas hidratar (Glossy Lips), utilizamos os melhores ácidos hialurônicos do mercado.',
    benefits: ['Definição do arco do cupido', 'Hidratação profunda', 'Correção de assimetrias'],
    indications: 'Lábios finos, desidratados ou assimétricos.',
    procedureInfo: 'Anestesia tópica e local (indolor).',
    resultsTime: 'Imediato (resultado final após desinchar em 7 dias).',
    afterCare: 'Gelo local e hidratação constante.',
    imageUrl: 'https://images.unsplash.com/photo-1620331313174-d73130e98030?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Tecnologia a Laser',
    title: 'Remoção de Tatuagem & Micro',
    price: 'A partir de R$ 179,00',
    shortDescription: 'Tecnologia segura para remoção de pigmentos indesejados.',
    description: 'Utilizamos lasers de última geração (Nd:YAG Q-Switched) para fragmentar o pigmento da tatuagem ou micropigmentação, permitindo que o sistema imunológico o elimine naturalmente, preservando a integridade da pele.',
    benefits: ['Remoção segura', 'Preserva o pelo da sobrancelha', 'Menor risco de cicatriz'],
    indications: 'Tatuagens antigas, micropigmentação de sobrancelhas ou lábios.',
    procedureInfo: 'Sessões rápidas com uso de resfriador dérmico.',
    resultsTime: 'Progressivo a cada sessão (intervalo de 30 a 45 dias).',
    afterCare: 'Não expor ao sol, usar pomada cicatrizante.',
    imageUrl: 'https://images.unsplash.com/photo-1574192019047-90928a76bc8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'Toxina Botulínica',
    title: 'Botox Full Face',
    price: 'Sob Consulta',
    shortDescription: 'Prevenção e tratamento de rugas dinâmicas.',
    description: 'Aplicação estratégica de toxina botulínica para suavizar linhas de expressão na testa, glabela e "pés de galinha", além de técnicas avançadas para pescoço (Nefertiti) e correção de sorriso gengival.',
    benefits: ['Olhar descansado', 'Prevenção de rugas estáticas', 'Elevação da cauda da sobrancelha'],
    indications: 'Rugas de expressão e prevenção do envelhecimento.',
    procedureInfo: 'Aplicação rápida com agulhas ultra-finas.',
    resultsTime: 'Início em 3 dias, efeito máximo em 15 dias.',
    afterCare: 'Não deitar por 4h, não massagear.',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-40ba5266f2bb?auto=format&fit=crop&q=80&w=800'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Módulo Intensivo em Harmonização Facial',
    shortDescription: 'Imersão completa de 4 dias com muita prática clínica.',
    audience: 'Iniciantes e Intermediários',
    duration: '4 Dias (32h)',
    status: 'open',
    date: 'Próxima turma: 25 de Outubro',
    details: ['Anatomia cadavérica aplicada', 'Toxina Botulínica Básica e Avançada', 'Preenchedores faciais', 'Prática em pacientes reais (Hands-on)'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    title: 'Cursos e Mentorias VIP',
    shortDescription: 'Ensino personalizado para HOF e Corporal.',
    audience: 'Profissionais que buscam refinar técnica',
    duration: 'Personalizado',
    status: 'soon',
    date: 'Agendamento Individual',
    details: ['Você escolhe o tema (ex: Lábios, Fios, Bioestimuladores)', 'Atenção exclusiva do professor', 'Pacientes selecionados para o seu objetivo'],
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    title: 'Pós-graduação em Harmonização Facial',
    shortDescription: 'Especialização Lato Sensu reconhecida pelo MEC.',
    audience: 'Graduados na área da saúde',
    duration: '18 meses',
    status: 'open',
    date: 'Início: Fevereiro/2025',
    details: ['Módulos mensais', 'Corpo docente de referência nacional', 'Marketing e Gestão de Consultório', 'Dupla certificação'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dra. Juliana M.',
    role: 'Aluna - Pós-Graduação',
    text: 'A didática do IAV é incomparável. Diferente de outros cursos onde só assistimos, aqui nós realmente colocamos a mão na massa. Sinto-me segura para qualquer intercorrência.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Carolina S.',
    role: 'Paciente - BioLift',
    text: 'Fiz o BioLift e pareço 5 anos mais jovem, mas ninguém diz que fiz "procedimento". A naturalidade que a Dra. preza é o que me fidelizou. O ambiente é chiquérrimo.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Dr. Roberto F.',
    role: 'Aluno - Mentoria VIP',
    text: 'A mentoria de lábios mudou meu faturamento. Aprendi técnicas de escultura labial que meus pacientes amam. O investimento se pagou no primeiro mês.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Labial', title: 'Volume e Definição', imageUrl: 'https://images.unsplash.com/photo-1588510065287-c20417937d4d?auto=format&fit=crop&q=80&w=600' },
  { id: 'g2', category: 'Full Face', title: 'Rejuvenescimento Global', imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600' },
  { id: 'g3', category: 'Bioestimulador', title: 'Pele Firme', imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600' },
  { id: 'g4', category: 'Bioestimulador', title: 'Contorno Mandibular', imageUrl: 'https://images.unsplash.com/photo-1609496697142-2d99bdabd448?auto=format&fit=crop&q=80&w=600' },
  { id: 'g5', category: 'Labial', title: 'Hidratação Glossy', imageUrl: 'https://images.unsplash.com/photo-1596472247752-7d9732e5f379?auto=format&fit=crop&q=80&w=600' },
  { id: 'g6', category: 'Toxina', title: 'Suavização de Rugas', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600' },
];