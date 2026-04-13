/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import SignatureHighlights from './components/SignatureHighlights';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import Packages from './components/Packages';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <SignatureHighlights />
        <Amenities />
        <Dining />
        <Packages />
        <Membership />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <Footer />
      </main>
      <BottomNav />
    </div>
  );
}
