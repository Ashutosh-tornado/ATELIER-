import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted for", product.name);
    alert("Enquiry sent successfully. We will be in touch soon.");
    setIsModalOpen(false);
  };

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        
        {/* Breadcrumb / Back Navigation */}
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-on_surface_variant hover:text-primary mb-12 uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        {/* Main Product Layout area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">
          {/* Left Large Image */}
          <div className="lg:col-span-7 bg-surface_container_low rounded-[3rem] overflow-hidden aspect-[4/5] sticky top-32 shadow-ambient border-none">
            <img 
              src={product.mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          {/* Right Detailing Section */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="inline-block bg-[#f4dbd0] text-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                The Signature Collection
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">{product.name}</h1>
              <p className="text-xl font-medium text-on_surface_variant">${product.price}</p>
              <p className="text-lg text-on_surface_variant leading-relaxed py-4 border-b border-outline_variant/30">
                {product.description}
              </p>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on_surface_variant mb-1">Heritage</p>
                <p className="font-semibold text-on_surface">{product.details.heritage}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on_surface_variant mb-1">Upholstery</p>
                <p className="font-semibold text-on_surface">{product.details.upholstery}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on_surface_variant mb-1">Lead Time</p>
                <p className="font-semibold text-on_surface">{product.details.leadTime}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-on_surface_variant mb-1">Artisan</p>
                <p className="font-semibold text-on_surface">{product.details.artisan}</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-primary text-on_primary py-5 rounded-full font-bold shadow-ambient hover:bg-primary_container transition-colors flex items-center justify-center gap-2"
              >
                Enquire Now <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
              <Link to="/contact" className="inline-block w-full text-center bg-surface_container_high text-on_surface py-5 rounded-full font-bold hover:bg-surface_container_highest transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Details in Focus */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-12 inline-block relative pb-4">
            Details in Focus
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.images && product.images.length > 0 ? product.images.map((img, idx) => (
              <div key={idx} className="bg-surface_container_low rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square">
                <img src={img} className="w-full h-full object-cover" alt={`${product.name} detail ${idx + 1}`} />
              </div>
            )) : (
              <div className="col-span-3 text-center text-on_surface_variant py-12">No detail images available</div>
            )}
          </div>
        </div>

        {/* Dimensions & Materials */}
        <div className="bg-surface_container_low py-24 px-12 rounded-[3rem] mb-32 border-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold">Dimensions & Materials</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-primary">✓</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Specifications</h4>
                    <p className="text-on_surface_variant leading-relaxed">{product.specs.dimensions}<br/>{product.specs.seat}</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-primary">✓</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Sustainable Sourcing</h4>
                    <p className="text-on_surface_variant leading-relaxed">FSC Certified Solid European timber. Water-based matte lacquer finish. Recycled foundations.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-primary">✓</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Lifetime Promise</h4>
                    <p className="text-on_surface_variant leading-relaxed">We offer a 10-year structural warranty on the frame and joinery, reflective of our commitment to longevity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#12313B] rounded-[2rem] aspect-square flex items-center justify-center p-12">
              <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center relative">
                <span className="text-white/50 text-sm tracking-widest uppercase absolute bottom-4">Technical Blueprint</span>
                {/* Simulated Blueprint Graphic */}
                <div className="w-2/3 h-2/3 border border-white/40 rounded-3xl relative">
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-white/40 text-xs rotate-270">H: {product.specs.dimensions.split('|')[2]?.split(':')[1] || '74cm'}</div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs">W: {product.specs.dimensions.split('|')[0]?.split(':')[1] || '84cm'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-background w-full max-w-lg rounded-[2rem] p-8 lg:p-12 shadow-ambient relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface_container_low transition-colors text-on_surface_variant hover:text-on_surface"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-3xl font-bold mb-2">Request Details</h3>
              <p className="text-on_surface_variant mb-8">
                Our atelier team will review your request and get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on_surface_variant mb-2">Name</label>
                  <input required type="text" className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-[1.5rem] px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on_surface placeholder:text-on_surface_variant/40" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on_surface_variant mb-2">Email</label>
                  <input required type="email" className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-[1.5rem] px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on_surface placeholder:text-on_surface_variant/40" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-on_surface_variant mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-[1.5rem] px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on_surface placeholder:text-on_surface_variant/40 resize-none" defaultValue={`I'm interested in the ${product.name}.`}></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-on_primary py-5 rounded-full font-bold shadow-ambient hover:bg-primary_container transition-colors mt-4">
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
