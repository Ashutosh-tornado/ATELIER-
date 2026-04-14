import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-none">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl tracking-widest font-extrabold uppercase">
          Atelier
        </Link>

        {/* Links */}
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
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
