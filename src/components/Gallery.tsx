import { motion } from 'motion/react';

const images = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9cw9oKQ56HpJuEdXQ-wqcqO_zMaP382S6bxMlHmmavTVU9rgH-Z4IZ-TfGknDcQPcAFTm_INDb7GlBjQMwUKX1cfhKO81KqeV7FJPhk4yoRiRApqVi2Fnl7jvwsbgOJh6drpwAHFr3xf0k1jDAG2rnG3gF0E7Rd_Aka3sRwPfpmOjw0KNqh5p8S4dqFZu_YdNHmP_knx3B9itxED1hc4WDwvGFAlltO_HTFzvoEu4pmGLL5wkyvDx0sP90ePhtZrMI0keIUC480TP',
    alt: 'Grand lobby'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWcCAR5ecTdK2NQcQXISTeErWmR67pdX2xkiN4f9UiT5ZwznzYU4xEc9mGt_vVMWzZ0UVyTQosQ8vnohWTMeQfD8JaGYcmU8LIAIRUwmQFhAE8Snglx_KRUxkbMmuwTHn5-az8EbOgDLjDm_xFEsrTEUN7o7kNBjsnrHxcyvyjjoI9BbWncBnMB74pOst4Hpvzbe_nWaEwlCcHAHLNBsfCKDR99n9xPqdqxo51etsSS7m_owA3UFD5Amreq8C3org4O6QIYr2wwNtY',
    alt: 'Beachfront'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSMVAGipJuPMai63oSnPf7ErU3xNykeKFzWBMxhawzmuisopM2uOdYAyGTaX51sGYBYdnuiOJmoB8SpamHkAXW82OyRhzPrUyxha6QkXZHpkyG9bojfOhbYU_dNDnWKPRTTIoNHbXFKjmKAZv1Snxe6JbCi8z8vM0vWTmz7j583st6GhPGXFF1zy8FHfLvTsPoW9rykN0YNyE7zwzLIR342h4qJFkeDuvObBxsR4pJBuCv_J8Dr2LvjvaRSv83EsLoRrreSAOm8enU',
    alt: 'Swimming pool'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuReVshveLH3lpf4kPVDypTWwTNT7j7eu7lWxooRw6YYi29UGqrbzTz3GYxNQANJQ8W4g0uCI2YfAhJMApnn28UYQm4VBw48ouW7TiSpumxF9mUQqDytnaHenLGl3Kgr3Cfl3MAg5I1CVK63SZ_CCUnINGxhD9alkQYj28s-yaukqCsoZ2EaYUDWtuFoTQB8PvndSNaalF3RHgYFGfE6xM3Th8990o7yIwTcVz8dxMBl7kC8ZBOvNxsAWhOZBx4KF65ZjXuTqB1bjK',
    alt: 'Night view'
  }
];

export default function Gallery() {
  return (
    <section className="py-16 px-4">
      <div className="px-2 mb-8">
        <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">Glimpse</span>
        <h3 className="font-headline text-3xl font-light mt-2">Resort Gallery</h3>
      </div>
      <div className="columns-2 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid rounded-xl overflow-hidden bg-surface-container-low"
          >
            <img
              className="w-full hover:scale-105 transition-transform duration-500"
              alt={image.alt}
              src={image.src}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
