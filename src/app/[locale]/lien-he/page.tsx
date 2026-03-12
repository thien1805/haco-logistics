import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: '📍',
      label: 'Địa chỉ',
      value: '35J3M Đường DD7-1, Phường Đông Hưng Thuận, Quận 12, TP. Hồ Chí Minh',
    },
    {
      icon: '📞',
      label: 'Điện thoại',
      value: '(+84) 28 1234 5678',
    },
    {
      icon: '📱',
      label: 'Hotline',
      value: '(+84) 901 234 567',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@haco-logistics.com',
    },
    {
      icon: '🕒',
      label: 'Giờ làm việc',
      value: 'Thứ Hai – Thứ Sáu: 8:00 – 17:30\nThứ Bảy: 8:00 – 12:00',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-56 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Liên hệ với chúng tôi</h1>
            <p className="text-blue-200">Đội ngũ HACO sẵn sàng hỗ trợ bạn 24/7</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2A6B] mb-8">Thông tin liên hệ</h2>
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

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Mạng xã hội</p>
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
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2A6B] mb-8">Gửi tin nhắn</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                      placeholder="0901 234 567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A6B] focus:border-transparent resize-none"
                    placeholder="Mô tả yêu cầu của bạn..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B2A6B] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full h-96 border-t border-gray-200">
          <iframe
            title="Bản đồ HACO Logistics"
            src="https://www.openstreetmap.org/export/embed.html?bbox=106.65,10.83,106.75,10.90&layer=mapnik&marker=10.862,106.698"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </section>

        {/* Map caption */}
        <div className="bg-gray-50 py-3 px-4 text-center text-sm text-gray-500 border-t">
          <a
            href="https://www.openstreetmap.org/?mlat=10.862&mlon=106.698#map=14/10.862/106.698"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B2A6B] hover:underline"
          >
            Xem bản đồ lớn hơn →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
