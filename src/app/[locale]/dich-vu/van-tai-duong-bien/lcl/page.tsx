import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LCLPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

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
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Vận tải LCL — Hàng lẻ</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B2A6B] mb-6">LCL là gì?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LCL (Less than Container Load) là dịch vụ vận chuyển hàng lẻ — tức là hàng hóa của bạn sẽ được gộp chung trong một container cùng với hàng hóa của các chủ hàng khác. Đây là lựa chọn tối ưu cho những lô hàng nhỏ không đủ để thuê nguyên một container riêng.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              HACO Logistics cung cấp dịch vụ LCL với lịch gom hàng định kỳ tại TP.Hồ Chí Minh và Hà Nội, đảm bảo hàng hóa được đóng gói và vận chuyển an toàn đến cảng đích.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1B2A6B] mb-3">Phù hợp với:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {['Lô hàng dưới 10 CBM', 'Doanh nghiệp vừa và nhỏ', 'Hàng mẫu, hàng thử nghiệm thị trường', 'Hàng hóa không thường xuyên'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[#F5A623]">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1B2A6B] mb-3">Lợi ích:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {['Chi phí thấp, chỉ trả cho thể tích hàng thực tế', 'Linh hoạt về thời gian và số lượng', 'Không cần đủ container mới xuất', 'Phù hợp kho chứa hạn chế'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[#F5A623]">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href={lp('/#nhan-bao-gia')} className="inline-block bg-[#1B2A6B] text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors mr-4">
                Nhận báo giá LCL
              </Link>
              <Link href={lp('/dich-vu/van-tai-duong-bien')} className="inline-block border-2 border-[#1B2A6B] text-[#1B2A6B] font-bold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                ← Quay lại
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
