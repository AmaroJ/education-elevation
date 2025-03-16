
import { useLocation, Link } from 'react-router-dom';
import { Home, BarChart, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  const navLinks = [
    { name: 'Inicio', path: '/', icon: <Home size={18} /> },
    { name: 'Mi Progreso', path: '/progress', icon: <BarChart size={18} /> },
    { name: 'Perfil', path: '/profile', icon: <User size={18} /> },
  ];
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-primary animate-fade-in">
            <span className="bg-primary text-white px-2 py-1 rounded">AI</span>
            Academia de Idiomas
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link flex items-center gap-2 py-2 ${
                  location.pathname === link.path ? 'text-primary after:w-full' : ''
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Button className="primary-button ml-4 animate-fade-in">
              Comenzar Ahora
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-secondary'
                  }`}
                  onClick={closeMenu}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Button className="primary-button w-full mt-4">
                Comenzar Ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
