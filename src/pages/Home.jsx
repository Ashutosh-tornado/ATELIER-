import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useRef } from 'react';

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : window.innerWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const featuredIds = ['lhorizon-lounge', 'echo-coffee-table', 'gather-table', 'terra-vessel'];
  const featured = products.filter(p => featuredIds.includes(p.id));

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-12 pb-24 lg:py-24 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-primary">
            Elevate Your <br /> Living Space
          </h1>
          <p className="text-on_surface_variant text-lg max-w-md">
            Discover a curated collection of artisanal furniture, where heritage craft meets contemporary architectural silhouettes.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/products" className="bg-primary text-on_primary px-8 py-4 rounded-full font-semibold hover:bg-primary_container transition-colors">
              Explore Collection
            </Link>
            <Link to="/about" className="text-primary font-semibold hover:underline underline-offset-8 decoration-2 flex items-center gap-2">
              Our Story
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-8 relative h-[600px] rounded-tl-[100px] rounded-bl-[100px] overflow-hidden ml-auto w-full lg:w-[120%]">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 w-1/4"></div>
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop" 
            alt="Hero living space" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="px-6 lg:px-12 py-24 max-w-[1600px] mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-on_surface_variant mb-2 block">Curated Goods</span>
            <h2 className="text-3xl font-bold">Shop by Category</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-outline_variant/30 hover:border-outline_variant transition-colors text-on_surface_variant">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-outline_variant/30 hover:border-outline_variant transition-colors text-on_surface_variant">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x no-scrollbar pb-8">
          {[
            { name: 'Sofas', desc: 'Abundance of comfort', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop' },
            { name: 'Chairs', desc: 'Sculptural Seating', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop' },
            { name: 'Tables', desc: 'Gathering Works', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600&auto=format&fit=crop' },
            { name: 'Decor', desc: 'Artful Addition', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop' },
          ].map(cat => (
            <Link to="/products" key={cat.name} className="group block min-w-[300px] md:min-w-[calc(33.333%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)] snap-start">
              <div className="bg-surface_container_low rounded-[2rem] overflow-hidden aspect-[4/3] mb-6">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply" />
              </div>
              <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
              <p className="text-sm text-on_surface_variant">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="px-6 lg:px-12 py-32 bg-surface_container_low border-none">
        <div className="max-w-[1600px] mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold inline-block relative pb-4">
            Featured Pieces
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-outline_variant/40 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
          {featured.map(product => (
            <Link to={`/products/${product.id}`} key={product.id} className="group flex flex-col items-center text-center">
              <div className="bg-surface_container_lowest p-8 rounded-[2rem] aspect-square w-full mb-6 shadow-ambient">
                <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover mix-blend-multiply rounded-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold mb-1">{product.name}</h3>
              <p className="text-xs text-on_surface_variant uppercase tracking-wide mb-2">{product.category}</p>
              <p className="font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mastery in Every Grain */}
      <section className="px-6 lg:px-12 py-32 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-[3rem] overflow-hidden bg-surface_container_low aspect-[4/5] shadow-ambient border-none">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop" alt="Craftsmanship" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-on_surface_variant mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Mastery in <br/> Every Grain</h2>
          </div>

          <div className="space-y-8">
            {[
              { title: 'Sustainable Sourcing', desc: 'We partner with ethical forests to ensure every piece of timber tells a story of preservation and responsibility.' },
              { title: 'Artisan Led', desc: 'Each piece is hand-finished in our local atelier, passing through the careful hands of third-generation craftsmen.' },
              { title: 'Lifetime Guarantee', desc: 'We don’t build for seasons. We build for generations. Backed by a structural warranty that spans a lifetime.' }
            ].map(feature => (
              <div key={feature.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on_primary shadow-ambient">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                  <p className="text-on_surface_variant max-w-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 bg-gradient-to-br from-primary_container to-primary text-white py-32 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop')] mix-blend-multiply opacity-20"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Your Dream Space Awaits</h2>
          <p className="text-lg text-white/80 pb-8">
            Take the first step toward a home that reflects your soul. Request our printed catalog or book a private consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/products" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-surface_container_low transition-colors w-full sm:w-auto">
              Start Your Journey
            </Link>
            <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:border-white transition-colors w-full sm:w-auto">
              Book a Stylist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
