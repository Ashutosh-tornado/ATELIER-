export default function Footer() {
  return (
    <footer className="bg-surface_container_low pt-24 pb-12 px-6 lg:px-12 mt-auto">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Brand Col */}
          <div className="col-span-1 space-y-6">
            <h3 className="text-lg tracking-widest font-extrabold uppercase">Atelier</h3>
            <p className="text-sm text-on_surface_variant leading-relaxed select-auto">
              Curating the world's finest furniture, blending heritage craft with modern digital experiences. We believe in the power of beautiful objects to transform the everyday.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary">Collections</h4>
            <ul className="space-y-4 text-sm text-on_surface_variant">
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Living Room</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Workspace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Limited Edition</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary">Support</h4>
            <ul className="space-y-4 text-sm text-on_surface_variant">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary">Journal</h4>
            <p className="text-sm text-on_surface_variant">
              Subscribe to our editorial for exclusive previews.
            </p>
            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-surface_container_highest text-on_surface placeholder:text-on_surface_variant text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-on_surface text-white text-xs px-3 py-1 font-semibold hover:bg-primary transition-colors">
                Join
              </button>
            </div>
            
            <div className="flex gap-4 pt-4 text-sm text-on_surface_variant">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-outline_variant/20 flex flex-col md:flex-row items-center justify-between text-xs text-on_surface_variant">
          <p>© 2026 Atelier Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
