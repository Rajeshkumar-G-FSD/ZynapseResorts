import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(47,51,49,0.05)] flex justify-between items-center px-6 h-20">
      <div className="flex items-center gap-4">
        <Menu className="text-primary w-6 h-6" />
        <h1 className="font-headline text-xl tracking-tighter text-primary">Zynapse Resorts</h1>
      </div>
      <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-label text-[10px] uppercase tracking-widest hover:bg-primary-dim transition-colors duration-300">
        Book Now
      </button>
    </header>
  );
}
