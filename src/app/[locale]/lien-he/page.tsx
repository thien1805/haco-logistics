import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contactPage');

  const contactInfo = [
    { icon: '📍', label: t('info.address.label'), value: t('info.address.value') },
    { icon: '📞', label: t('info.phone.label'), value: t('info.phone.value') },
    { icon: '📱', label: t('info.hotline.label'), value: t('info.hotline.value') },
    { icon: '✉️', label: t('info.email.label'), value: t('info.email.value') },
    { icon: '🕒', label: t('info.hours.label'), value: t('info.hours.value') },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative h-56 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('heroTitle')}</h1>
            <p className="text-blue-200">{t('heroSubtitle')}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1B2A6B] mb-8">{t('infoTitle')}</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">{t('socialTitle')}</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/hacologistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    {t('facebookCta')}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1B2A6B] mb-8">{t('formTitle')}</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fullName')}</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                      placeholder={t('form.fullNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.phone')}</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                      placeholder={t('form.phonePlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.email')}</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.message')}</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B2A6B] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="w-full h-96 border-t border-gray-200">
          <iframe
            title={t('map.title')}
            src="https://www.openstreetmap.org/export/embed.html?bbox=106.65,10.83,106.75,10.90&layer=mapnik&marker=10.862,106.698"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </section>

        <div className="bg-gray-50 py-3 px-4 text-center text-sm text-gray-500 border-t">
          <a
            href="https://www.openstreetmap.org/?mlat=10.862&mlon=106.698#map=14/10.862/106.698"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B2A6B] hover:underline"
          >
            {t('map.cta')}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
