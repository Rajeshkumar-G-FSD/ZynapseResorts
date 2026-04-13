import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full h-[751px] overflow-hidden">
      <img
        alt="Luxury Resort Pool"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ89wCiJpEvck46YJF2520ouaET3GoKZxHCN_bnQ3GGr4LXWOOAey57zbBb5xSrNDIag0exaedihU9cj4g2FtxZUaLV8SSPTXUmy99dzNr36-v0-huHFGG8iA98e2EE9tm6lvS2aYPWU6aSQ6RLVm52zt6efjm-OmspBVNrY4-aiTrBWYiW35D77nCWBKtnZfg5cvN1PAW-OGx0KgSgRBg5T60MMxG_3JHlCKNdA872k9tvqo8XrH8TEVCX90xXF6PaQCBkeSF0gIS"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-headline text-4xl md:text-6xl text-white font-light tracking-tight mb-4"
        >
          Experience Luxury & Comfort
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body text-white/90 text-lg mb-8 max-w-md"
        >
          Zynapse Resorts – Your Perfect Getaway
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-4"
        >
          <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label text-[12px] uppercase tracking-widest shadow-lg hover:bg-primary-dim transition-colors">
            Book Now
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-label text-[12px] uppercase tracking-widest hover:bg-white/20 transition-colors">
            Explore Rooms
          </button>
        </motion.div>
      </div>
    </section>
  );
}
