import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="px-6 mb-10 text-center">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Stories</span>
        <h3 className="font-headline text-3xl font-light mt-2">Guest Experiences</h3>
      </div>
      <div className="px-6 flex overflow-x-auto gap-6 hide-scrollbar snap-x">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="min-w-[85%] snap-center bg-white p-8 rounded-2xl shadow-sm"
        >
          <div className="flex gap-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary" />
            ))}
          </div>
          <p className="font-body text-on-surface-variant italic leading-relaxed mb-6">
            "An absolute sanctuary. The attention to detail in the rooms and the kindness of the staff made our anniversary truly unforgettable."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container"></div>
            <div>
              <p className="font-label text-xs font-semibold">Ananya Sharma</p>
              <p className="font-body text-[10px] text-on-surface-variant">Stayed: Jan 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
