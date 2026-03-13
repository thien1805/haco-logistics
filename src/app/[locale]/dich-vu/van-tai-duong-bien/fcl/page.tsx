import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FCLPage() {

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-64 md:h-72 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/images/sea-freight.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1B2A6B]/65" />
          <div className="relative z-10 text-center px-4">
            <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Vận tải đường biển</p>
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Vận tải FCL — Hàng nguyên container</h1>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
}
