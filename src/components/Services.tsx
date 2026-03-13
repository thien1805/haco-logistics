'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const serviceData = [
  {
    key: 'sea',
    image: '/images/duongbien.jpg',
    href: '/dich-vu/van-tai-duong-bien',
  },
  {
    key: 'air',
    image: '/images/duongbay.jpg',
    href: '/dich-vu/van-tai-hang-khong',
  },
  {
    key: 'road',
    image: '/images/duongbo.png',
    href: '/dich-vu/van-tai-duong-bo',
  },
  {
    key: 'customs',
    image: '/images/khaibaohaiquan.jpg',
    href: '/dich-vu/khai-bao-hai-quan',
  },
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="dich-vu" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A6B] mb-3 inline-block border-b-4 border-[#1B2A6B] pb-2 tracking-wide">
            {t('title')}
          </h2>
          <p className="text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service) => {
            const href = locale === 'vi' ? service.href : `/en${service.href}`;
            return (
              <div
                key={service.key}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              >
                {/* Image area */}
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Logo watermark overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 opacity-80">
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#1B2A6B] font-bold text-lg mb-3">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {t(`${service.key}.description`)}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={href}
                      className="inline-block border-2 border-[#1B2A6B] text-[#1B2A6B] hover:bg-[#1B2A6B] hover:text-white font-medium px-6 py-2 rounded-full text-sm transition-colors"
                    >
                      {t('viewMore')}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
