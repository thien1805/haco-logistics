'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const ts = useTranslations('services');

  const services = [
    {
      icon: <i className="fas fa-ship text-6xl" style={{ color: '#1B2A6B' }}></i>,
      title: ts('sea.title'),
      desc: ts('sea.description'),
    },
    {
      icon: <i className="fas fa-plane text-6xl" style={{ color: '#1B2A6B' }}></i>,
      title: ts('air.title'),
      desc: ts('air.description'),
    },
    {
      icon: <i className="fas fa-truck text-6xl" style={{ color: '#1B2A6B' }}></i>,
      title: ts('road.title'),
      desc: ts('road.description'),
    },
    {
      icon: <i className="fas fa-file-invoice text-6xl" style={{ color: '#1B2A6B' }}></i>,
      title: ts('customs.title'),
      desc: ts('customs.description'),
    },
  ];

  const highlights = t.raw('highlights') as string[];

  return (
    <>
      <Header />
      <main>
        <section
          className="relative h-72 md:h-96 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/images/hero-ship.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1B2A6B]/60" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold drop-shadow-lg text-center px-4">
            {t('heroTitle')}
          </h1>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A6B] mb-6">{t('introTitle')}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{t('introP1')}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{t('introP2')}</p>
              <ul className="space-y-2 text-gray-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div
                className="w-full h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/banner-website-nganh-van-tai-duong-thuy-hang-khong-2.jpg')" }}
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {services.map((s) => (
                <div key={s.title} className="text-center">
                  {s.icon}
                  <h3 className="mt-4 font-bold text-[#1B2A6B] text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
