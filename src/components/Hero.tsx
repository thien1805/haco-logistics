import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
      {/* Background image placeholder — swap src when you have the actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-ship.jpg')",
          backgroundPosition: 'center 60%',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-2xl drop-shadow mb-8 max-w-2xl">
          {t('subtitle')}
        </p>
        <a
          href="#nhan-bao-gia"
          className="bg-[#F5A623] hover:bg-[#e0941f] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
