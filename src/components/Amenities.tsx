import { Waves, Utensils, Martini, ParkingCircle, Bike, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const amenities = [
  { icon: Waves, label: 'Swimming Pool', price: '₹500/hr' },
  { icon: Utensils, label: 'Restaurant', price: 'Fine Dining' },
  { icon: Martini, label: 'Bar', price: 'Lounge' },
  { icon: ParkingCircle, label: 'Parking', price: 'Free' },
  { icon: Bike, label: 'Zipline Cycling', price: '₹300' },
  { icon: Sparkles, label: 'Spa', price: '₹2,000' },
];

export default function Amenities() {
  return (
    <section className="bg-surface-container-low py-16 px-6">
      <div className="mb-10 text-center">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Rejuvenate</span>
        <h3 className="font-headline text-3xl font-light mt-2">World-Class Amenities</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <item.icon className="text-primary mb-3 w-8 h-8 stroke-[1.5]" />
            <p className="font-label text-[11px] mb-1">{item.label}</p>
            <p className="text-primary-dim font-body text-xs">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
