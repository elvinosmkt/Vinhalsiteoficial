import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { INSTAGRAM_URL, ADDRESS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Antes & Depois', path: '/galeria' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <div className={`text-2xl font-serif font-bold tracking-widest ${scrolled ? 'text-secondary-petrol' : 'text-secondary-petrol md:text-white'}`}>
            IAV <span className="text-primary-gold">.</span>
          </div>
          <p className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-neutral-medium' : 'text-neutral-medium md:text-white/80'}`}>
            Instituto Acadêmico Vinhal
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase hover:text-primary-gold transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary-gold' 
                  : scrolled ? 'text-secondary-petrol' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={`${scrolled ? 'text-secondary-petrol' : 'text-white'} hover:text-primary-gold`}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 focus:outline-none ${isOpen ? 'text-secondary-petrol' : scrolled ? 'text-secondary-petrol' : 'text-secondary-petrol'}`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-serif ${location.pathname === link.path ? 'text-primary-gold' : 'text-secondary-petrol'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-petrol text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">IAV<span className="text-primary-gold">.</span></h3>
            <p className="text-white/70 mb-6 font-light">
              Excelência em Harmonização Facial e Ensino Superior em Balneário Camboriú. Transformando faces e carreiras.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white hover:text-primary-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-primary-gold">Contato</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold mt-1 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-gold shrink-0" />
                <span>(47) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-gold shrink-0" />
                <span>contato@iav.com.br</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-primary-gold">Navegação</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/tratamentos" className="hover:text-primary-nude">Tratamentos</Link></li>
              <li><Link to="/cursos" className="hover:text-primary-nude">Instituto de Cursos</Link></li>
              <li><Link to="/galeria" className="hover:text-primary-nude">Antes e Depois</Link></li>
              <li><Link to="/sobre" className="hover:text-primary-nude">Sobre o IAV</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Instituto Acadêmico Vinhal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
