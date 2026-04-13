import { Award, Percent, Users } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Award,
    title: '4-Visit Eligibility',
    description: 'Complete 4 stays to unlock elite status benefits.'
  },
  {
    icon: Percent,
    title: 'Member Discounts',
    description: '15% off room rates and 10% off all dining experiences.'
  },
  {
    icon: Users,
    title: 'Referral Credits',
    description: 'Invite friends and earn ₹2,000 credit for every booking.'
  }
];

export default function Membership() {
  return (
    <section className="py-16 px-6 bg-primary text-on-primary">
      <span className="font-label text-on-primary/60 tracking-[0.2em] text-[10px] uppercase">Zynapse Circle</span>
      <h3 className="font-headline text-3xl font-light mt-2 mb-8">Exclusive Membership</h3>
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <benefit.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-label tracking-wider uppercase text-sm mb-1">{benefit.title}</h4>
              <p className="font-body text-sm text-on-primary/70">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="w-full bg-white text-primary py-4 rounded-lg font-label text-[11px] uppercase tracking-widest mt-12 hover:bg-on-primary transition-colors">
        Join the Circle
      </button>
    </section>
  );
}
