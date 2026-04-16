import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-none">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl tracking-widest font-extrabold uppercase">
            Atelier
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/products' && location.pathname.startsWith('/products'));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "relative py-2 transition-colors",
                    isActive ? "text-primary" : "text-on_surface_variant hover:text-on_surface"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                    ></motion.span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-surface_container_low rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Moved outside nav to fix stacking context */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] md:hidden"
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed inset-0 w-full h-full bg-background z-[110] md:hidden flex flex-col p-8 md:p-12 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-16 pt-2">
                <span className="text-sm font-extrabold uppercase tracking-widest">Menu</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-primary hover:bg-surface_container_low rounded-full transition-colors"
                >
                  <X className="w-8 h-8 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {links.map((link) => {
                  const isActive = location.pathname === link.path || (link.path === '/products' && location.pathname.startsWith('/products'));
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "text-4xl font-bold transition-all",
                        isActive ? "text-primary translate-x-2" : "text-on_surface_variant hover:text-on_surface"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-16">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant mb-4">Atelier Studio</p>
                <p className="text-sm text-on_surface_variant leading-relaxed">
                  842 Madison Avenue,<br/>New York, NY 10021
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
