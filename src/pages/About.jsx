export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight mb-6">
          Defined by hands, <br/> not machines.
        </h1>
        <p className="text-lg text-on_surface_variant max-w-2xl mx-auto">
          We believe in the resonance of wood, the integrity of joinery, and the quiet beauty of a space well-lived. Atelier is a pursuit of the permanent.
        </p>

        {/* Studio Image Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop" 
              alt="Crafting" 
              className="rounded-[3rem] shadow-ambient aspect-[4/5] object-cover" 
            />
            <div className="absolute -bottom-12 -right-12 w-64 aspect-square bg-surface_container_lowest p-4 rounded-3xl shadow-ambient hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop" 
                alt="Sketch" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-8 lg:pl-16">
            <h2 className="text-4xl font-bold">A Legacy of Quiet Excellence</h2>
            <div className="space-y-6 text-on_surface_variant leading-relaxed">
              <p>
                Founded in 1994, Atelier began in a small timber yard with a single goal: to restore the relationship between the maker and the object. In an era of mass-produced transience, we chose the path of the slow.
              </p>
              <p>
                Each piece is conceived as a future heirloom. We don't just build furniture; we curate environments that allow the soul to breathe. Our studio is a laboratory of tactile exploration.
              </p>
            </div>
            <button className="bg-primary text-on_primary px-8 py-4 rounded-full font-bold hover:bg-primary_container transition-colors shadow-ambient">
              Read the Journal
            </button>
          </div>
        </div>

        {/* Uncompromising Craft */}
        <div className="mt-48 text-left">
          <span className="text-xs font-bold tracking-widest uppercase text-on_surface_variant block mb-4">The Atelier Way</span>
          <h2 className="text-4xl font-bold mb-16">Uncompromising Craft</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-[#ccb09c] rounded-[3rem] p-12 lg:p-16 flex flex-col justify-end aspect-[16/9] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" alt="Wood grain" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="relative z-10 max-w-md text-white">
                <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">Structural Integrity</h3>
                <p className="font-medium drop-shadow-md">We utilize traditional joinery methods—mortise and tenon, dovetails, and butterflies—eliminating the need for metal fasteners where possible.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface_container_low rounded-[3rem] p-12 lg:p-16 flex flex-col justify-center">
              <div className="w-12 h-12 mb-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">❖</div>
              <h3 className="text-2xl font-bold mb-4">Ethical Sourcing</h3>
              <p className="text-on_surface_variant mb-8">Every log is hand-selected from FSC-certified forests. We honor the grain, respecting the natural life of the tree.</p>
              <a href="#" className="font-bold underline underline-offset-4 flex items-center gap-2">Sustainability Report →</a>
            </div>

            <div className="md:col-span-4 bg-surface_container_low rounded-[3rem] overflow-hidden aspect-[4/3] group">
              <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
            </div>
            <div className="md:col-span-8 bg-surface_container_low rounded-[3rem] p-12 lg:p-16 flex items-center justify-between">
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold mb-4">The Natural Finish</h3>
                <p className="text-on_surface_variant leading-relaxed">Our finishes are composed of organic oils and waxes. They are non-toxic, allowing the wood to breathe and age gracefully over decades.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#eae2db]"></div>
                <div className="w-20 h-20 rounded-2xl bg-[#3c2a21]"></div>
                <div className="w-20 h-20 rounded-2xl bg-[#f2e1d9]"></div>
                <div className="w-20 h-20 rounded-2xl bg-[#f8a8a4]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Mission Banner */}
        <div className="mt-32 bg-primary text-white rounded-[3rem] p-12 lg:p-24 text-left">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 block mb-8 text-center">Our Vision</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center mb-24 max-w-4xl mx-auto">
            To transform the home into a sanctuary of <span className="italic text-primary_fixed_dim">intentional beauty</span>, where every object tells a story of human touch.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/20 pt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Mission</h3>
              <p className="text-white/70 leading-relaxed">"To preserve the heritage of fine woodworking while pushing the boundaries of modern form. We exist to provide an alternative to the culture of disposability."</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Philosophy</h3>
              <p className="text-white/70 leading-relaxed">Design is not about adding more; it is about removing until only the essential remains. We value the tension between strength and elegance.</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-32 max-w-3xl mx-auto mb-24">
          <div className="text-6xl text-primary/20 flex justify-center mb-6">" "</div>
          <p className="text-3xl font-medium leading-relaxed mb-8">
            "A room is only as good as the intention behind its objects. We strive to make objects that demand nothing but offer everything."
          </p>
          <p className="text-sm font-bold uppercase tracking-widest text-on_surface_variant">Julian Thorne</p>
          <p className="text-xs uppercase tracking-widest text-outline_variant mt-1">Founding Director</p>
        </div>

      </div>
    </div>
  );
}
