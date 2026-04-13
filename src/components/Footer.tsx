export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-auto bg-surface-container-low text-primary flex flex-col gap-8 items-start max-w-7xl mx-auto mb-20">
      <h2 className="font-headline text-lg text-on-surface">Zynapse Resorts</h2>
      <nav className="flex flex-col gap-4">
        <a className="font-body text-sm hover:text-primary-dim transition-all" href="#">Privacy Policy</a>
        <a className="font-body text-sm hover:text-primary-dim transition-all" href="#">Sustainability</a>
        <a className="font-body text-sm hover:text-primary-dim transition-all" href="#">Careers</a>
        <a className="font-body text-sm hover:text-primary-dim transition-all" href="#">Gallery</a>
      </nav>
      <p className="font-body text-sm leading-relaxed text-primary/60">© 2024 Zynapse Resorts. All Rights Reserved.</p>
    </footer>
  );
}
