import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto safe-px py-16 md:py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-primary mb-8 max-w-4xl mx-auto leading-[1.1]">
            Defined by hands, <br className="hidden md:block" /> not machines.
          </h1>
          <p className="text-lg md:text-xl text-on_surface_variant max-w-2xl mx-auto leading-relaxed">
            We believe in the resonance of wood, the integrity of joinery, and the quiet beauty of a space well-lived. Atelier is a pursuit of the permanent.
          </p>
        </motion.div>

        {/* Studio Image Section */}
        <motion.div 
          {...fadeInUp}
          className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center text-center lg:text-left"
        >
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl lg:rounded-[3.5rem] shadow-ambient">
              <img 
                src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop" 
                alt="Crafting" 
                className="aspect-[4/5] object-cover w-full scale-105 group-hover:scale-100 transition-transform duration-1000" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 aspect-square bg-surface_container_lowest p-4 rounded-3xl shadow-xl hidden xl:block">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop" 
                alt="Sketch" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-8 lg:pl-8">
            <h2 className="text-primary">A Legacy of Quiet Excellence</h2>
            <div className="space-y-6 text-on_surface_variant leading-relaxed text-lg lg:text-xl">
              <p>
                Founded in 1994, Atelier began in a small timber yard with a single goal: to restore the relationship between the maker and the object. In an era of mass-produced transience, we chose the path of the slow.
              </p>
              <p className="hidden md:block">
                Each piece is conceived as a future heirloom. We don't just build furniture; we curate environments that allow the soul to breathe. Our studio is a laboratory of tactile exploration.
              </p>
            </div>
            <button className="bg-primary text-on_primary px-10 py-5 rounded-full font-bold hover:bg-neutral-800 transition-all hover:px-12 shadow-ambient w-full sm:w-auto">
              Read the Journal
            </button>
          </div>
        </motion.div>

        {/* Uncompromising Craft */}
        <div className="mt-32 md:mt-48 text-left">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-on_surface_variant block mb-4">The Atelier Way</span>
          <h2 className="mb-12 md:mb-16">Uncompromising Craft</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-8 bg-[#ccb09c] rounded-3xl md:rounded-[3rem] p-10 md:p-16 flex flex-col justify-end aspect-square md:aspect-[16/9] relative overflow-hidden group shadow-sm">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" alt="Wood grain" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-[3s]" />
              <div className="relative z-10 max-w-md text-white">
                <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">Structural Integrity</h3>
                <p className="font-bold drop-shadow-md text-lg">We utilize traditional joinery methods—mortise and tenon, dovetails, and butterflies—eliminating metal fasteners.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface_container_low rounded-3xl md:rounded-[3rem] p-10 md:p-16 flex flex-col justify-center shadow-sm group">
              <div className="w-12 h-12 mb-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-ambient group-hover:rotate-12 transition-transform">❖</div>
              <h3 className="text-2xl font-bold mb-4">Ethical Sourcing</h3>
              <p className="text-on_surface_variant mb-8 font-medium">Every log is hand-selected from FSC-certified forests. We honor the grain, respecting the natural life of the tree.</p>
              <a href="#" className="font-bold text-primary underline underline-offset-8 decoration-2 flex items-center gap-2 group/link transition-all">
                Sustainability Report <span className="group-hover/link:translate-x-2 transition-transform">→</span>
              </a>
            </div>

            <div className="md:col-span-4 bg-surface_container_low rounded-3xl md:rounded-[3rem] overflow-hidden aspect-[4/3] group shadow-sm hidden md:block">
              <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
            </div>
            <div className="md:col-span-12 lg:col-span-8 bg-surface_container_low rounded-3xl md:rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm">
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold mb-4">The Natural Finish</h3>
                <p className="text-on_surface_variant leading-relaxed font-medium">Our finishes are composed of organic oils and waxes. They are non-toxic, allowing the wood to breathe and age gracefully over decades.</p>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#eae2db] shadow-inner"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#3c2a21] shadow-inner"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#f2e1d9] shadow-inner"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#f8a8a4] shadow-inner"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Mission Banner */}
        <div className="mt-32 md:mt-48 bg-primary text-white rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-center relative overflow-hidden shadow-ambient">
          <div className="absolute inset-0 bg-gradient-to-br from-primary_container to-primary opacity-50"></div>
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 block mb-8">Our Vision</span>
            <h2 className="text-white mb-20 max-w-4xl mx-auto italic">
              "To transform the home into a sanctuary of intentional beauty, where every object tells a story of human touch."
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-white/10 pt-16 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Mission</h3>
                <p className="text-white/70 leading-relaxed font-medium">We preserve the heritage of fine woodworking while pushing the boundaries of modern form. We provide an alternative to the culture of disposability.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Philosophy</h3>
                <p className="text-white/70 leading-relaxed font-medium">Design is not about adding more; it is about removing until only the essential remains. We value the tension between strength and elegance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <motion.div 
          {...fadeInUp}
          className="mt-32 max-w-3xl mx-auto mb-24 text-center"
        >
          <div className="text-7xl text-primary/10 flex justify-center mb-4 serif">"</div>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-balance">
            A room is only as good as the intention behind its objects. We strive to make objects that demand nothing but offer everything.
          </p>
          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Julian Thorne</p>
            <p className="text-xs uppercase tracking-widest text-outline_variant">Founding Director</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
