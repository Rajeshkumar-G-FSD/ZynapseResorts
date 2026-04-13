import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function BookingForm() {
  return (
    <section className="py-16 px-6">
      <div className="mb-10">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Reservation</span>
        <h3 className="font-headline text-3xl font-light mt-2">Start Your Journey</h3>
      </div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
          <input
            className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary font-body outline-none"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Check In</label>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary font-body text-sm outline-none"
              type="date"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Guests</label>
            <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary font-body text-sm outline-none appearance-none">
              <option>1 Adult</option>
              <option selected>2 Adults</option>
              <option>Family</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Room Type</label>
          <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary font-body text-sm outline-none appearance-none">
            <option>Deluxe Room</option>
            <option>Premium Suite</option>
            <option>Beach View Villa</option>
          </select>
        </div>
        <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-label text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-primary-dim transition-colors">
          Confirm Availability
        </button>
      </form>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl overflow-hidden aspect-video relative group"
      >
        <div className="absolute inset-0 bg-surface-container flex flex-col items-center justify-center text-on-surface-variant z-10">
          <MapPin className="w-10 h-10 mb-2" />
          <p className="font-label text-[10px] uppercase tracking-widest">Resort Location</p>
        </div>
        <img
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
          alt="Resort Location Map"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNamXHnytIWbZaLMp7zMsjdxWUvkxxiVmlkdgeIsF-H3sbjO3p0pddNQ9JxLmJUeOiLszv9Ne61eZv-bGy4g2LvfZx2UC2p1RhkSwx2TfvgNfM4VoYz4N8cjCUeDZMm1VdSfYM5md-aOqplEywu8G5RKolKd1peF4C0yAMfs_zhWrJRS9RtNT1NQhn8gRG8TamvoihiGWCMYUMFKuHWgyfxAxSqR1BuezB_643sHmKRVdOJnibWVjhrQXtCjwf4lozalPp_0Gx4-5S"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
