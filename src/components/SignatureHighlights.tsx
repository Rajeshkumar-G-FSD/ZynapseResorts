import { motion } from 'motion/react';

export default function SignatureHighlights() {
  return (
    <section className="py-16 px-6">
      <div className="mb-12">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Curated Stays</span>
        <h3 className="font-headline text-3xl text-on-surface mt-2 font-light">Signature Highlights</h3>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {/* Deluxe Room */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-surface-container-low">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Modern deluxe hotel room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIiK2dWYKtH1_0kluGMFBdI5Yrk3F__ORjQCK_PvQZSSvDowSBiJN8ybB38fQ7RGVBe74XJOL882fodwT1cBE0u-AR8Tnwz2v8zk4FE278-6LyGP2Rqp6oIlOteIvzZuAp09ocKWDPJthTP18swflIlXfeGLBsGylzHzV7EnE5sQhfi3xCFF7iJL9x9Eksi7-CBigbk5IEzNkMMDRAnFmEL4JZfm3cGPIZJHbWJzB_vqpw_LJDyn3o-FiUTREtZeKE2OxyFAJN8dIw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h4 className="font-headline text-xl">Deluxe Rooms</h4>
              <p className="font-label text-on-surface-variant mt-1">Starting from</p>
            </div>
            <p className="font-headline text-2xl text-primary">₹4,999</p>
          </div>
        </motion.div>

        {/* Bento Grid Style for others */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 aspect-[16/9] rounded-xl overflow-hidden bg-surface-container-low relative group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Premium hotel suite"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCy6RTv44EWe8BcuZyel2Y2bCJbGE7v7XEfq51vmAYF3P0sB0FXSaHZO0J9PGJ0vOidOkXtrWocvJv2p3URDqvsTQAQLlzzlDRrFMpwAritL4KeXWJu8UdKk56M4q8R4Nnl1GUD0--Mh07Hd5x9PZHDuTi6Oh2cKZChNVOhExN2OG5Ni3XBDtxwgYqbovtxB-jSfxXsOuHyzksbeExDBjWxPV_nbHKpUSPpGWU6tWbE10hB44kqOVQRbMt8zAh8vxPcRGKhvvY9uEe"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-end">
              <h4 className="text-white font-headline text-lg">Premium Suites</h4>
              <p className="text-white/80 font-label text-[10px]">₹8,999</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square rounded-xl overflow-hidden bg-surface-container-low relative group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Beach view villa"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsFFmKYmWnhhHtBcrD5alILrzR6EoX2mbqVU8zirLafHkjE-ghhGlCdKDbVhD55qJ43mHzzH3UPB2curRydWdWW0AY-cfpTdEGhO5Xc_IKq_12TLu0w4Gmzzw9uZ8YvLpGq6gzR_lEql7unJqR-cdZz-vREkANyZpiM7tRduGcGr6sxIuAsbxeop1QTvQO4w-AD6e2tahUmW1ia-TchyP6UkpNCvJeodjQ0qH72kbX97u64mpiDJi0pZUDq3vDvOzwPmdPoypylFmO"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-end">
              <h4 className="text-white font-headline text-base">Beach View Villas</h4>
              <p className="text-white/80 font-label text-[10px]">₹14,999</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square rounded-xl overflow-hidden bg-surface-container-low relative group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Family room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlZGPTbL-VELJRji93eI6gUOuIDhom1gmC3-aNiK0ZzsHI5qg3w92Vs-HLD2yG0OaZw8x4Z0IC1xhFgIJPVI4N_HLq-mvdbNA0K3xC0mbRaJ8NC5NKAHB-HjKjfGDtcGD323qX7q-fVUQmXFXFIlpfMHCyLrL-z4acUoMdTJx6GcWYSoEEmoPwHOzUaQQOC9-m8eSyaZ2hq4BKGAvBLu92lO222YZ26UbtsJMFvz8XaVPKi-ycNUv3vLY772cU8Oc6MwP6CB_kMmv7"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-end">
              <h4 className="text-white font-headline text-base">Family Rooms</h4>
              <p className="text-white/80 font-label text-[10px]">₹6,999</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
