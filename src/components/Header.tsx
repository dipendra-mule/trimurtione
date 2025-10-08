import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300'>
      <nav className='container-custom flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to='/' className='flex items-center space-x-2 group'>
          <img src={logoImage} alt='Trimurtione Logo' className='h-8 w-8' />
          {/* <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-accent-green to-accent-teal transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-lg' /> */}
          <span className='hidden font-bold text-xl md:inline-block gradient-text bg-size-300% animate-gradient'>Trimurtione</span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex md:items-center md:space-x-6'>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${
                isActive(link.path) ? 'text-primary after:w-full' : 'text-muted-foreground'
              }`}>
              {link.name}
            </Link>
          ))}
          <Link to='/contact' className='btn-primary'>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-border bg-background'>
          <div className='container-custom px-4 py-4 space-y-3'>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}>
                {link.name}
              </Link>
            ))}
            <Link to='/contact' onClick={() => setMobileMenuOpen(false)} className='block btn-primary text-center'>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

