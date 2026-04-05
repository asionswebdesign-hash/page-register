export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-blue-50 border-t border-blue-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="font-bold text-primary text-xl">MathPlayground</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="text-on-surface/60 hover:underline hover:text-primary transition-colors">Kebijakan Privasi</a>
          <a href="#" className="text-on-surface/60 hover:underline hover:text-primary transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="text-on-surface/60 hover:underline hover:text-primary transition-colors">Bantuan</a>
        </div>
        <p className="text-on-surface/60 text-center md:text-right">
          © 2024 MathPlayground. Belajar jadi petualangan seru!
        </p>
      </div>
    </footer>
  );
}
