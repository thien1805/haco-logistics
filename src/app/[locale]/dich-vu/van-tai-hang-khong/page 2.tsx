'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AirFreightPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;
  const t = useTranslations('servicePages');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(false);
    const timer = setTimeout(() => setAnimateContent(true), 50);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const highlights = [
    { title: t('air.h1Title'), desc: t('air.h1Desc') },
    { title: t('air.h2Title'), desc: t('air.h2Desc') },
    { title: t('air.h3Title'), desc: t('air.h3Desc') },
    { title: t('air.h4Title'), desc: t('air.h4Desc') },
  ];

  const otherServices = [
    {
      title: t('seaTitle'),
      desc: t('seaCarousel'),
      image: '/images/duongbien.jpg',
      href: lp('/dich-vu/van-tai-duong-bien'),
    },
    {
      title: t('roadTitle'),
      desc: t('roadCarousel'),
      image: '/images/duongbo.png',
      href: lp('/dich-vu/van-tai-duong-bo'),
    },
    {
      title: t('customsTitle'),
      desc: t('customsCarousel'),
      image: '/images/khaibaohaiquan.jpg',
      href: lp('/dich-vu/khai-bao-hai-quan'),
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-72 md:h-[420px] bg-cover bg-center flex items-end text-white"
          style={{ backgroundImage: "url('/images/duongbay.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/80 via-[#1B2A6B]/30 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-10 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-2">{t('air.heroTitle')}</h1>
            <p className="text-blue-100 text-lg">{t('air.heroSubtitle')}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A6B] mb-6">{t('overview')}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {t('air.overviewP1')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div
                className="w-full h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/duongbay.jpg')" }}
              />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="text-center px-2">
                <div className="text-4xl text-[#1B2A6B] mb-4">★</div>
                <h3 className="font-bold text-[#1B2A6B] text-base mb-3">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other services - Carousel */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1B2A6B] text-center mb-10">{t('otherSolutions')}</h2>
          </div>

            <div className="relative max-w-7xl mx-auto">
              <style>{`
                @keyframes slideUp {
                  from {
                    opacity: 0;
                    transform: translateY(60px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-slide-up {
                  animation: slideUp 0.9s ease-out both;
                }
                .slide-title {
                  animation-delay: 0.1s;
                }
                .slide-desc {
                  animation-delay: 0.3s;
                }
                .slide-button {
                  animation-delay: 0.5s;
                }
              `}</style>

              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl relative">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {otherServices.map((s, idx) => (
                    <div key={idx} className="min-w-full">
                      <div className="relative h-96 md:h-[500px] bg-cover bg-center group"
                        style={{ backgroundImage: `url('${s.image}')` }}
                      >
                        <div className="absolute inset-0 bg-[#1B2A6B]/60 group-hover:bg-[#1B2A6B]/70 transition-colors duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 md:p-12 text-center">
                          <h3 className={`text-3xl md:text-5xl font-bold mb-4 ${animateContent ? 'animate-slide-up slide-title' : 'opacity-0'}`}>
                            {s.title}
                          </h3>
                          <p className={`text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl ${animateContent ? 'animate-slide-up slide-desc' : 'opacity-0'}`}>
                            {s.desc}
                          </p>
                          <Link
                            href={s.href}
                            className={`bg-[#F5A623] border-2 border-[#F5A623] text-[#1B2A6B] font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors inline-block ${animateContent ? 'animate-slide-up slide-button' : 'opacity-0'}`}
                          >
                            {t('viewMore')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows - Inside Container */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? otherServices.length - 1 : prev - 1))}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#1B2A6B] text-white p-3 md:p-4 rounded-full hover:bg-blue-900 transition-colors z-10 text-xl md:text-2xl hover:scale-110 duration-300"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === otherServices.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[#1B2A6B] text-white p-3 md:p-4 rounded-full hover:bg-blue-900 transition-colors z-10 text-xl md:text-2xl hover:scale-110 duration-300"
                >
                  ›
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {otherServices.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'bg-[#F5A623] w-10'
                        : 'bg-gray-300 w-3 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-[#1B2A6B] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{t('air.ctaTitle')}</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">{t('air.ctaSubtitle')}</p>
          <Link
            href={lp('/#nhan-bao-gia')}
            className="inline-block bg-[#F5A623] font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            {t('getQuoteNow')}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
