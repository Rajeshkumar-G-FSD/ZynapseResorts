import { motion } from 'motion/react';

const cuisines = [
  {
    name: 'Indian Cuisine',
    description: 'Traditional flavors with a modern twist.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf15FCz9LpEWj0yLtzthnOWi41r9cuL8R2-lrdbdAcX7_IriULdA41rcnAhfsZfiwNo3xmiLzbTcSoahtDW8tRzjzxWgdT0e2p0QwbEHgma0E8ygv1I6Ndcq3FMVFGB6PX6mY7d-1wwZtav77axqOAZawmRsVBxKAYk1vdGwG217tSu1sWKmuIUjCxJr8gnF06WkOt1HtOSSBrj5VcGs9BJCUlLHoJOvuT3euyiiEdxWFR4kUto-V75rZY6VIi6Ie_TBGycE6iVKS7'
  },
  {
    name: 'Continental',
    description: 'Classic European recipes crafted with care.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ipYanvKjWXIa5jkpp4GdrphfRBh8h6c1PITQr_wfr-h4JhiVtnXosPZGTvykSxfEVkMSPniTwPGUrDvah07d3S3yeGRSmMfdZcWDyt9le0VBtMP-fwjxw_ymZNti-ftVYXeqvbWUlBB31_VSlRV4q9GUoaz-bkkOQCTmvBSzRESpZsrN8N37u5fA809dFKDwsGygK88tJxYMvtEdJejjiCSbWHIAUTplgiEyTDUqp8CpNDki3p7pxTGyJ0T7ATgf15_nECPKyzid'
  },
  {
    name: 'Seafood Special',
    description: 'Fresh catch of the day, prepared to perfection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfRS3y__GnDc92PMe0GhzzWJTeg2JcN9_J7KSPejLGuq-7uZmD0BUgIFOEuNmmb2kLnUS1p4BkrPBCJ6IEX6OL5RToWu48H5fwd1dFHuwwMVkXGU7TMDQ3hPJlAd-z_b88qGHupLA4ZgQvrKLpI2H2E4IdM5Ktn6i9xss9-3PnLsUU_8Pm3XdetqRBwiEfe3iY8yT1bBf65c_SjV41EXeR_8fDMnnMkB2OFGaRahfa2bdmrTj6-889M7vAjwHifaoT66Ih-3fiXxS8'
  }
];

export default function Dining() {
  return (
    <section className="py-16">
      <div className="px-6 mb-8">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">The Culinary Journey</span>
        <h3 className="font-headline text-3xl font-light mt-2">Gastronomic Delights</h3>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 snap-x">
        {cuisines.map((cuisine) => (
          <div key={cuisine.name} className="min-w-[280px] snap-center">
            <img
              className="aspect-[4/3] object-cover rounded-xl mb-4"
              alt={cuisine.name}
              src={cuisine.image}
              referrerPolicy="no-referrer"
            />
            <h4 className="font-headline text-lg">{cuisine.name}</h4>
            <p className="font-body text-sm text-on-surface-variant mt-1 italic">{cuisine.description}</p>
          </div>
        ))}
      </div>
      <div className="px-6 mt-10">
        <button className="w-full border border-primary/20 text-primary py-4 rounded-lg font-label text-[11px] uppercase tracking-widest hover:bg-primary-container transition-colors">
          Reserve a Table
        </button>
      </div>
    </section>
  );
}
