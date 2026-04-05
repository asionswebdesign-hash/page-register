import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary">MathPlayground</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-on-surface/70 font-medium hover:text-primary transition-colors">Beranda</a>
          <a href="#" className="text-on-surface/70 font-medium hover:text-primary transition-colors">Kurikulum</a>
          <a href="#" className="text-on-surface/70 font-medium hover:text-primary transition-colors">Tentang Kami</a>
        </div>
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20"
          >
            Masuk
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
