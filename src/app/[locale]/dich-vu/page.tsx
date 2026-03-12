import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

  const services = [
    {
      title: 'Vận tải đường biển',
      desc: 'LCL và FCL đến mọi cảng biển trên thế giới. Đại lý tại hơn 50 quốc gia với lịch tàu dày đặc, đảm bảo hàng hóa được giao đúng hẹn với chi phí tối ưu.',
      href: lp('/dich-vu/van-tai-duong-bien'),
      icon: '🚢',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Vận tải đường hàng không',
      desc: 'Dịch vụ nhanh chóng nhất cho hàng hóa có giá trị cao, khẩn cấp. Kết nối trực tiếp các hãng hàng không lớn, đảm bảo thời gian transit tối thiểu.',
      href: lp('/dich-vu/van-tai-hang-khong'),
      icon: '✈️',
      color: 'bg-sky-50 border-sky-200',
    },
    {
      title: 'Vận tải đường bộ',
      desc: 'Mạng lưới xe tải toàn quốc và khu vực Đông Nam Á. Giao hàng từ cửa đến cửa với hệ thống theo dõi thời gian thực.',
      href: lp('/dich-vu/van-tai-duong-bo'),
      icon: '🚛',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'Khai báo hải quan',
      desc: 'Đội ngũ khai báo viên chuyên nghiệp, am hiểu sâu về nghiệp vụ hải quan và chính sách thuế xuất nhập khẩu, tránh mọi rủi ro cho lô hàng của bạn.',
      href: lp('/dich-vu/khai-bao-hai-quan'),
      icon: '📋',
      color: 'bg-amber-50 border-amber-200',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/images/hero-ship.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1B2A6B]/65" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">Dịch vụ của chúng tôi</h1>
            <p className="text-blue-100 text-lg">Giải pháp logistics toàn diện — từ biển đến cổng kho của bạn</p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className={`block rounded-xl border p-8 hover:shadow-lg transition-shadow group ${s.color}`}
                >
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h2 className="text-xl font-bold text-[#1B2A6B] mb-3 group-hover:text-[#F5A623] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#1B2A6B] group-hover:text-[#F5A623]">
                    Xem chi tiết →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-[#1B2A6B] text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Bạn cần tư vấn dịch vụ phù hợp?</h2>
          <p className="text-blue-100 mb-6">Đội ngũ chuyên gia HACO luôn sẵn sàng hỗ trợ bạn lựa chọn giải pháp tối ưu.</p>
          <Link
            href={lp('/#nhan-bao-gia')}
            className="inline-block bg-[#F5A623] text-white font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Nhận báo giá ngay
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
