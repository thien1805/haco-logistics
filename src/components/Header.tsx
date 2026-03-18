'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [seaOpen, setSeaOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const switchLocale = (newLocale: 'vi' | 'en' | 'ko') => {
    const pathWithoutLocale = window.location.pathname.replace(/^\/(vi|en|ko)/, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  // All hrefs include the locale prefix
  const lp = (path: string) => `/${locale}${path}`;

  const seaSubItems = [
    { label: locale === 'vi' ? 'Vận tải đường biển LCL' : 'Sea Freight LCL', href: lp('/dich-vu/van-tai-duong-bien/lcl') },
    { label: locale === 'vi' ? 'Vận tải đường biển FCL' : 'Sea Freight FCL', href: lp('/dich-vu/van-tai-duong-bien/fcl') },
  ];

  const otherServiceItems = [
    { label: locale === 'vi' ? 'Vận tải đường hàng không' : 'Air Freight', href: lp('/dich-vu/van-tai-hang-khong') },
    { label: locale === 'vi' ? 'Vận tải đường bộ' : 'Road Transport', href: lp('/dich-vu/van-tai-duong-bo') },
    { label: locale === 'vi' ? 'Khai báo hải quan' : 'Customs Declaration', href: lp('/dich-vu/khai-bao-hai-quan') },
  ];

  const blogItems = [
    { label: locale === 'vi' ? 'Bản tin Haco Logistics' : 'Haco Logistics News', href: lp('/bai-viet/tin-tuc') },
    { label: locale === 'vi' ? 'Bản tin thị trường' : 'Market News', href: lp('/bai-viet/kien-thuc') },
    { label: locale === 'vi' ? 'Thông báo' : 'Announcements', href: lp('/bai-viet/quy-trinh') },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={lp('/')} className="flex items-center gap-2 shrink-0">
            <div className="w-36 h-36 relative">
              <Image src="/images/Haco-Logo.png" alt="HACO Logistics Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href={lp('/')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors">
              {t('home')}
            </Link>
            <Link href={lp('/gioi-thieu')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors">
              {t('about')}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => { setServicesOpen(false); setSeaOpen(false); }}
            >
              <Link href={lp('/dich-vu')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors flex items-center gap-1">
                {t('services')} <ChevronDownIcon className="w-4 h-4" />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-md py-1 min-w-[240px] z-50">
                  {/* Sea Freight with nested sub-menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setSeaOpen(true)}
                    onMouseLeave={() => setSeaOpen(false)}
                  >
                    <Link
                      href={lp('/dich-vu/van-tai-duong-bien')}
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B2A6B] uppercase tracking-wide"
                    >
                      {locale === 'vi' ? 'Vận tải đường biển' : 'Sea Freight'}
                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </Link>
                    {seaOpen && (
                      <div className="absolute left-full top-0 bg-white shadow-xl border border-gray-100 rounded-md py-1 min-w-[240px] z-50">
                        {seaSubItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B2A6B] uppercase tracking-wide"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Other services */}
                  {otherServiceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B2A6B] uppercase tracking-wide"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative" onMouseEnter={() => setBlogOpen(true)} onMouseLeave={() => setBlogOpen(false)}>
              <Link href={lp('/bai-viet')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors flex items-center gap-1">
                {t('blog')} <ChevronDownIcon className="w-4 h-4" />
              </Link>
              {blogOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-md py-1 min-w-[240px] z-50">
                  {blogItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B2A6B] uppercase tracking-wide"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={lp('/tuyen-dung')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors">
              {t('careers')}
            </Link>
            <Link href={lp('/lien-he')} className="px-4 py-2 text-sm font-semibold text-[#1B2A6B] hover:text-[#F5A623] transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden text-sm">
              <button
                onClick={() => switchLocale('vi')}
                className={`px-3 py-1.5 font-medium transition-colors ${locale === 'vi' ? 'bg-[#1B2A6B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                VI
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 font-medium transition-colors ${locale === 'en' ? 'bg-[#1B2A6B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('ko')}
                className={`px-3 py-1.5 font-medium transition-colors ${locale === 'ko' ? 'bg-[#1B2A6B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                KO
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-[#1B2A6B]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-4 py-4 space-y-1">
            <Link href={lp('/')} className="block py-2 text-sm font-semibold text-[#1B2A6B]" onClick={() => setMobileOpen(false)}>{t('home')}</Link>
            <Link href={lp('/gioi-thieu')} className="block py-2 text-sm font-semibold text-[#1B2A6B]" onClick={() => setMobileOpen(false)}>{t('about')}</Link>
            <div>
              <p className="py-2 text-sm font-semibold text-[#1B2A6B]">{t('services')}</p>
              <div className="pl-4 space-y-1">
                <Link href={lp('/dich-vu/van-tai-duong-bien')} className="block py-1 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{locale === 'vi' ? 'Vận tải đường biển' : 'Sea Freight'}</Link>
                <Link href={lp('/dich-vu/van-tai-duong-bien/lcl')} className="block py-1 text-sm text-gray-500 pl-3" onClick={() => setMobileOpen(false)}>— LCL</Link>
                <Link href={lp('/dich-vu/van-tai-duong-bien/fcl')} className="block py-1 text-sm text-gray-500 pl-3" onClick={() => setMobileOpen(false)}>— FCL</Link>
                {otherServiceItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-1 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="py-2 text-sm font-semibold text-[#1B2A6B]">{t('blog')}</p>
              <div className="pl-4 space-y-1">
                {blogItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-1 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            </div>
            <Link href={lp('/tuyen-dung')} className="block py-2 text-sm font-semibold text-[#1B2A6B]" onClick={() => setMobileOpen(false)}>{t('careers')}</Link>
            <Link href={lp('/lien-he')} className="block py-2 text-sm font-semibold text-[#1B2A6B]" onClick={() => setMobileOpen(false)}>{t('contact')}</Link>
            <div className="flex gap-2 pt-3 border-t">
              <button onClick={() => switchLocale('vi')} className={`px-4 py-1.5 text-sm font-medium rounded ${locale === 'vi' ? 'bg-[#1B2A6B] text-white' : 'border text-gray-600'}`}>VI</button>
              <button onClick={() => switchLocale('en')} className={`px-4 py-1.5 text-sm font-medium rounded ${locale === 'en' ? 'bg-[#1B2A6B] text-white' : 'border text-gray-600'}`}>EN</button>
              <button onClick={() => switchLocale('ko')} className={`px-4 py-1.5 text-sm font-medium rounded ${locale === 'ko' ? 'bg-[#1B2A6B] text-white' : 'border text-gray-600'}`}>KO</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

