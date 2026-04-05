import { motion } from "motion/react";
import { User, Mail, Lock, Eye, Rocket } from "lucide-react";
import { useState } from "react";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-primary/5 border border-primary-container/30"
    >
      <div className="mb-8 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-4 shadow-inner">
          <User className="text-on-secondary-container w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-on-surface">Registrasi Orang Tua</h2>
        <p className="text-on-surface/60 mt-2">Buat akun untuk mengelola petualangan belajar anak.</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-on-surface/70 ml-1" htmlFor="parent_name">
            Nama Ayah/Bunda
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              id="parent_name"
              type="text" 
              placeholder="Contoh: Ayah Budi"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-full focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-on-surface/70 ml-1" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              id="email"
              type="email" 
              placeholder="nama@email.com"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-full focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-on-surface/70 ml-1" htmlFor="password">
            Kata Sandi
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              id="password"
              type={showPassword ? "text" : "password"} 
              placeholder="Min. 8 karakter"
              className="w-full pl-12 pr-12 py-3.5 bg-surface-container-highest border-none rounded-full focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <Rocket className="w-5 h-5 fill-current" />
            Daftar Sekarang
          </motion.button>
        </div>

        <div className="text-center pt-2">
          <a href="#" className="text-sm text-primary font-bold hover:underline">
            Sudah punya akun? Masuk di sini
          </a>
        </div>
      </form>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-outline-variant"></div>
        <span className="text-[10px] text-outline uppercase tracking-widest font-bold">Atau daftar dengan</span>
        <div className="h-px flex-1 bg-outline-variant"></div>
      </div>

      <div className="mt-6">
        <motion.button 
          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full border-2 border-outline-variant transition-colors"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbkmKJafo5-BvuANofMhRTE4F7O_Rr3KUk0k0nN_0oBzb_Mh2TRMDITmpPVO3ZqOh-u-UaLiRiVCjkMHyzvO8CEWlcOZAIN4lP1R357vh9untzUziuwuEKuRZzC1mQq1feMidmBewC__1rqj0aQngdEXG5GfZJ8GU1DzyqrvRsWF0xZBAn0grinEp448wg_mp6OyXfr-zJm012dIsTjQ7ey7n6y8Aj8QtNDTLuJ6emu4UQRS2_Q8KFQp6iIqNOXr4tiEVe_jXLOerY" 
            alt="Google" 
            className="w-5 h-5"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-on-surface/70">Google</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
