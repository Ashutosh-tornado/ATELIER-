import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-6">
          <h1 className="text-primary">
            Get in touch.
          </h1>
          <p className="text-lg md:text-xl text-on_surface_variant leading-relaxed font-medium">
            Whether you're looking for a bespoke piece or have a question about our collections, our studio is here to assist you in curating your perfect interior.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32 relative">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-6 bg-surface_container_low p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-ambient">
            <form className="space-y-10">
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-2xl md:rounded-[1.5rem] px-6 py-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on_surface placeholder:text-on_surface_variant/40 shadow-sm"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-2xl md:rounded-[1.5rem] px-6 py-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on_surface placeholder:text-on_surface_variant/40 shadow-sm"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-surface_container_lowest border border-outline_variant/30 rounded-2xl md:rounded-[1.5rem] px-6 py-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on_surface placeholder:text-on_surface_variant/40 shadow-sm resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-on_primary px-10 py-5 rounded-full font-bold hover:bg-primary_container transition-all shadow-xl">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right: Studio Details & Map */}
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-12 max-w-sm">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-on_surface_variant mb-2">Studio Address</p>
                <p className="text-xl font-semibold text-on_surface leading-relaxed">
                  842 Madison Avenue,<br/>Studio 4B, New York, NY 10021
                </p>
              </div>
              
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-on_surface_variant mb-2">Communication</p>
                <p className="text-xl font-semibold text-on_surface leading-relaxed mb-1">+1 (212) 555-0198</p>
                <a href="mailto:studio@atelier.design" className="text-lg text-on_surface_variant hover:text-primary transition-colors underline underline-offset-4">
                  studio@atelier.design
                </a>
              </div>
              
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-on_surface_variant mb-2">Hours</p>
                <p className="text-on_surface_variant leading-relaxed">
                  Monday — Friday: 10am — 6pm<br/>
                  Saturday: By Appointment Only
                </p>
              </div>
            </div>

            {/* Map Block */}
            <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full bg-surface_container_high rounded-3xl md:rounded-[3rem] relative overflow-hidden group shadow-ambient">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop&grayscale=true" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-7 h-7" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-full px-6 py-5 flex items-center gap-4 shadow-xl">
                   <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                   <div>
                     <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Atelier Flagship</p>
                     <p className="text-xs text-on_surface_variant font-medium">Upper East Side, NYC</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-primary min-h-[400px] md:aspect-[21/9] flex items-end p-8 md:p-24 shadow-ambient">
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?q=80&w=1600&auto=format&fit=crop" 
            alt="Showroom" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl text-white space-y-6">
            <h2 className="text-white">Visit our showroom for a private consultation.</h2>
            <p className="text-lg text-white/80 pb-6 max-w-xl font-medium">
              Experience the texture of our curated materials and the precision of our craftsmanship in person.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 font-bold hover:gap-5 transition-all text-lg group">
              Book a Viewing <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
