import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const localePath = (path: string) => (locale === 'vi' ? path : `/en${path}`);

  const services = [
    { label: locale === 'vi' ? 'Vận tải đường biển' : 'Sea Freight', href: localePath('/dich-vu/van-tai-duong-bien') },
    { label: locale === 'vi' ? 'Vận tải đường hàng không' : 'Air Freight', href: localePath('/dich-vu/van-tai-hang-khong') },
    { label: locale === 'vi' ? 'Vận tải đường bộ' : 'Road Transport', href: localePath('/dich-vu/van-tai-duong-bo') },
    { label: locale === 'vi' ? 'Khai báo hải quan' : 'Customs Declaration', href: localePath('/dich-vu/khai-bao-hai-quan') },
  ];

  return (
    <footer className="bg-[#1B2A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-5">{t('company')}</h3>
            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                </svg>
                <span>{t('address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${t('email')}`} className="hover:text-white transition-colors">{t('email')}</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${t('phone')}`} className="hover:text-white transition-colors">{t('phone')}</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">{t('services')}</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facebook widget placeholder */}
          <div>
            <h3 className="font-bold text-lg mb-5">{t('followUs')}</h3>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[#1877F2] px-4 py-3 flex items-center gap-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">HACO International Logistics Co.,ltd</p>
                  <p className="text-blue-200 text-xs">22 followers</p>
                </div>
              </div>
              <div className="bg-white p-3 flex gap-3">
                <a
                  href="https://www.facebook.com/hacologistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm text-[#1877F2] border border-[#1877F2] rounded py-1.5 hover:bg-blue-50 transition-colors font-medium"
                >
                Follow Page
                </a>
                <a
                  href="https://www.facebook.com/hacologistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm text-gray-600 border border-gray-300 rounded py-1.5 hover:bg-gray-50 transition-colors font-medium"
                >
                  ↗ Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 py-4">
        <p className="text-center text-sm text-blue-200">{t('copyright')}</p>
      </div>
    </footer>
  );
}
