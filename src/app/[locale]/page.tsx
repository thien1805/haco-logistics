import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <QuoteForm />
      <Footer />
    </main>
  );
}
