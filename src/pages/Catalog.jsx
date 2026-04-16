import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { products } from '../data/products';
import clsx from 'clsx';
import { useState } from 'react';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All Objects');

  const filteredProducts = activeCategory === 'All Objects' 
    ? products 
    : products.filter(p => p.category === activeCategory);
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16 space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant">Curation No. 04</span>
          <h1 className="text-on_surface">
            The Collection
          </h1>
          <p className="text-lg text-on_surface_variant leading-relaxed max-w-xl">
            An intentional gathering of pieces designed for the quiet moments of life. Every curve, texture, and joinery method is a testament to the Atelier's pursuit of timeless utility.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center bg-surface_container_low rounded-3xl md:rounded-[2rem] p-2 mb-16 max-w-full overflow-x-auto no-scrollbar shadow-sm">
          <div className="flex items-center min-w-max">
            <button 
              onClick={() => setActiveCategory('All Objects')}
              className={clsx(
                "px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                activeCategory === 'All Objects' ? "bg-primary text-on_primary shadow-ambient" : "text-on_surface_variant hover:text-on_surface bg-transparent"
              )}
            >
              All Objects
            </button>
            {['Sofas', 'Chairs', 'Tables', 'Decor'].map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveCategory(filter)}
                className={clsx(
                  "px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  activeCategory === filter ? "bg-primary text-on_primary shadow-ambient" : "text-on_surface_variant hover:text-on_surface bg-transparent"
                )}
              >
                {filter}
              </button>
            ))}
            <div className="w-[1px] h-6 bg-outline_variant/40 mx-2 md:mx-4"></div>
            <button className="px-6 md:px-8 py-3 flex items-center gap-2 text-on_surface_variant hover:text-on_surface rounded-full text-sm font-semibold transition-all whitespace-nowrap">
              <Filter className="w-4 h-4" />
              Refine
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24 mb-32">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className={clsx("group flex flex-col transform transition-all duration-500 hover:-translate-y-2", idx % 2 === 1 ? "md:translate-y-12 lg:translate-y-24" : "")}>
              <Link to={`/products/${product.id}`} className="block aspect-[4/5] bg-surface_container_low rounded-[2.5rem] overflow-hidden mb-8 relative shadow-sm group-hover:shadow-ambient transition-all duration-500">
                <img 
                  src={product.mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s] ease-in-out"
                />
              </Link>
              
              <div className="flex justify-between items-baseline mb-3">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <span className="text-lg font-bold text-primary">${product.price}</span>
              </div>
              <p className="text-sm text-on_surface_variant mb-8 line-clamp-2 leading-relaxed font-medium">
                {product.shortDescription}
              </p>
              
              <Link 
                to={`/products/${product.id}`}
                className="w-full text-center py-5 bg-surface_container_high text-on_surface font-bold rounded-full hover:bg-primary hover:text-on_primary transition-all duration-300 mt-auto shadow-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Banner */}
        <section className="bg-primary text-white rounded-[2.5rem] md:rounded-[3rem] px-6 py-20 md:py-32 text-center mt-32 relative overflow-hidden shadow-ambient">
          <div className="absolute inset-0 bg-gradient-to-br from-primary_container to-primary opacity-50"></div>
          <div className="max-w-xl mx-auto space-y-8 relative z-10">
            <h2 className="text-white">The Weekly Muse</h2>
            <p className="text-white/80 pb-4 leading-relaxed text-lg">
              Join 12,000+ designers and homeowners receiving our curated digest of interior inspiration and product releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto flex-grow backdrop-blur-sm"
              />
              <button className="px-10 py-5 bg-white text-primary rounded-full font-bold hover:bg-surface_container_low transition-all shadow-xl">
                Join
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
