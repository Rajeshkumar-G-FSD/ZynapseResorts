import { Bed, Utensils, Phone } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-background/90 backdrop-blur-lg rounded-t-2xl flex justify-around items-center h-20 pb-safe shadow-[0_-10px_30px_rgba(47,51,49,0.03)] border-t border-outline-variant/10">
      <a className="flex flex-col items-center text-primary scale-105 transition-transform" href="#">
        <Bed className="w-6 h-6 mb-1" />
        <span className="font-body text-[10px] uppercase tracking-[0.1em]">Rooms</span>
      </a>
      <a className="flex flex-col items-center text-on-surface/40 hover:text-primary transition-colors" href="#">
        <Utensils className="w-6 h-6 mb-1" />
        <span className="font-body text-[10px] uppercase tracking-[0.1em]">Dining</span>
      </a>
      <a className="flex flex-col items-center text-on-surface/40 hover:text-primary transition-colors" href="#">
        <Phone className="w-6 h-6 mb-1" />
        <span className="font-body text-[10px] uppercase tracking-[0.1em]">Contact</span>
      </a>
    </nav>
  );
}
