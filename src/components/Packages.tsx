import { ChevronRight, Umbrella, Sun, Snowflake, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const subPackages = [
  { name: 'Holiday', price: '₹18k', icon: Umbrella },
  { name: 'Summer', price: '₹15k', icon: Sun },
  { name: 'Winter', price: '₹20k', icon: Snowflake },
  { name: 'Wedding', price: '₹2L+', icon: Heart },
];

export default function Packages() {
  return (
    <section className="bg-surface py-16 px-6">
      <div className="mb-12">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Curated Experiences</span>
        <h3 className="font-headline text-3xl font-light mt-2">Bespoke Packages</h3>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low rounded-2xl overflow-hidden flex items-center shadow-sm"
        >
          <div className="w-1/3 h-full min-h-[160px]">
            <img
              className="h-full w-full object-cover"
              alt="Honeymoon package"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTifId37AD1JpNf5YxBuyhZyfztA1DQip5cb1juJHZaHbsag7n8AHoUt02NNs-n-k0RrqvNBGkmg2AheHOcygQIylkZa2cU2P9JDdUxqfkLDXdUnSOVVNEXvsYbH4LOipn73-UX3uCp8iBkkNMj2emBU6NsWctrR0wIlMYVyty8s1M_UFpKMNAcFriVKe0KjMb2NxM7GQSZdLsM6-jZH2sd8oOK3c-2xQw_Kpzys5w01_TP8o8H0r8WfseQN2Y5_dwu40pEOjf2jA"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-2/3 p-6">
            <h4 className="font-headline text-lg">Honeymoon</h4>
            <p className="text-primary font-body text-lg mt-1">₹25k <span className="text-xs text-on-surface-variant font-normal">/ stay</span></p>
            <button className="mt-4 text-primary font-label text-[10px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
              Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {subPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-low rounded-2xl p-5 flex flex-col justify-between h-32"
            >
              <div>
                <h4 className="font-headline text-base">{pkg.name}</h4>
                <p className="text-primary font-body text-sm mt-1">{pkg.price}</p>
              </div>
              <pkg.icon className="text-primary/40 w-6 h-6 self-end stroke-[1.5]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
