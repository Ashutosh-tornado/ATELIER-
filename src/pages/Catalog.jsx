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
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16 space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant">Curation No. 04</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-on_surface leading-tight">
            The Collection
          </h1>
          <p className="text-lg text-on_surface_variant leading-relaxed">
            An intentional gathering of pieces designed for the quiet moments of life. Every curve, texture, and joinery method is a testament to the Digital Atelier's pursuit of timeless utility.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center bg-surface_container_low rounded-[2rem] p-2 mb-16 max-w-fit">
          <button 
            onClick={() => setActiveCategory('All Objects')}
            className={clsx(
              "px-8 py-3 rounded-full text-sm font-bold shadow-ambient transition-all",
              activeCategory === 'All Objects' ? "bg-primary text-on_primary" : "text-on_surface_variant hover:text-on_surface bg-transparent shadow-none"
            )}
          >
            All Objects
          </button>
          {['Sofas', 'Chairs', 'Tables', 'Decor'].map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveCategory(filter)}
              className={clsx(
                "px-8 py-3 rounded-full text-sm font-semibold transition-all",
                activeCategory === filter ? "bg-primary text-on_primary shadow-ambient" : "text-on_surface_variant hover:text-on_surface bg-transparent"
              )}
            >
              {filter}
            </button>
          ))}
          <div className="w-[1px] h-6 bg-outline_variant/40 mx-4"></div>
          <button className="px-8 py-3 flex items-center gap-2 text-on_surface_variant hover:text-on_surface rounded-full text-sm font-semibold transition-all">
            <Filter className="w-4 h-4" />
            Refine
          </button>
        </div>

        {/* Product Grid // Atelier Scroll Approximation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-32">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className={clsx("group flex flex-col transform", idx % 2 === 1 ? "md:translate-y-12 lg:translate-y-24" : "")}>
              <Link to={`/products/${product.id}`} className="block aspect-[4/5] bg-surface_container_low rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={product.mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>
              
              <div className="flex justify-between items-baseline mb-2">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <span className="text-lg font-medium text-on_surface_variant">${product.price}</span>
              </div>
              <p className="text-sm text-on_surface_variant mb-6 line-clamp-2 leading-relaxed">
                {product.shortDescription}
              </p>
              
              <Link 
                to={`/products/${product.id}`}
                className="w-full text-center py-4 bg-surface_container_high text-on_surface font-bold rounded-full hover:bg-surface_container_highest transition-colors mt-auto"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Banner */}
        <section className="bg-primary text-white rounded-[3rem] px-6 py-24 text-center mt-32">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">The Weekly Muse</h2>
            <p className="text-white/80 pb-4 leading-relaxed">
              Join 12,000+ designers and homeowners receiving our curated digest of interior inspiration and product releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto flex-grow"
              />
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-surface_container_low transition-colors">
                Join
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
