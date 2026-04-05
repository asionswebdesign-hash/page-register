import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import { Calculator, Compass, FunctionSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pattern-bg relative overflow-hidden flex items-center justify-center py-12 px-4">
        {/* Floating Math Shapes Decor */}
        <div className="absolute top-20 left-10 text-primary/10 select-none hidden lg:block">
          <Calculator size={120} />
        </div>
        <div className="absolute bottom-20 right-10 text-tertiary/10 select-none hidden lg:block">
          <Compass size={140} className="text-purple-500/10" />
        </div>
        <div className="absolute top-1/4 right-20 text-secondary/10 select-none hidden lg:block">
          <FunctionSquare size={100} className="text-yellow-500/10" />
        </div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Illustration & Value Prop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex flex-col gap-8 p-4"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-container/30 rounded-[2.5rem] blur-3xl group-hover:bg-primary-container/50 transition-all duration-500"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDeWENSc-1TeJfwv2M7bYycy4DUFLrMLpbyppDcQT5E8i53TL7IXkBaT3xtpXNPeZpZpIrbPNj7FsAIJqD27RZMzsXEIkMn4CYfibOtHRdsUARZxVncD0LlpHwmmim5propfEUNNUplPCXZ04MSLNEJi3tjzIbZG2ljMlrGIRfV3UdKGrtKNuQRk-D45Zs_xauGzGijfE45KBi01FdtWt0bWgxLcFL7d79ZyPC6sVXtPOw2POVT70nHa7BwbX8ocXem7yAkpQ6n9h" 
                alt="Belajar Bersama" 
                className="relative rounded-[2rem] shadow-2xl object-cover aspect-square w-full border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight mb-6">
                Mulai Petualangan <span className="text-primary">Matematika</span> Si Kecil
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-md">
                Dampingi perjalanan belajar mereka dengan kurikulum yang menyenangkan dan interaktif. Pantau progress dan rayakan setiap pencapaian bersama!
              </p>
            </div>
          </motion.div>

          {/* Right Side: Registration Form */}
          <div className="flex justify-center md:justify-end">
            <RegistrationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
