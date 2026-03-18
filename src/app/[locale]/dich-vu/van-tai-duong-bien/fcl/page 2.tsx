import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FCLPage({ params }: { params: { locale: string } }) {
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
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Vận tải FCL — Hàng nguyên container</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B2A6B] mb-6">FCL là gì?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FCL (Full Container Load) là dịch vụ thuê nguyên container để vận chuyển hàng hóa của một chủ hàng. Hàng hóa của bạn sẽ chiếm toàn bộ container, không gộp chung với hàng của khách hàng khác, đảm bảo an toàn và bảo mật tối đa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              HACO Logistics cung cấp dịch vụ FCL với nhiều loại container phù hợp từng loại hàng hóa: container 20ft, 40ft, 40HC, container lạnh (reefer), container mở nóc (open top)...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'Container 20ft', cap: '~ 25–26 tấn / 25–26 CBM' },
                { label: 'Container 40ft', cap: '~ 26–27 tấn / 54–55 CBM' },
                { label: 'Container 40HC', cap: '~ 26–27 tấn / 67–68 CBM' },
              ].map((c) => (
                <div key={c.label} className="border border-[#1B2A6B] rounded-xl p-5 text-center">
                  <h3 className="font-bold text-[#1B2A6B] text-lg mb-2">{c.label}</h3>
                  <p className="text-gray-500 text-sm">{c.cap}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1B2A6B] mb-3">Phù hợp với:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {['Lô hàng lớn trên 15 CBM', 'Hàng hóa yêu cầu bảo mật', 'Hàng dễ vỡ hoặc giá trị cao', 'Xuất nhập khẩu thường xuyên'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[#F5A623]">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1B2A6B] mb-3">Lợi ích:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {['Chi phí đơn vị thấp hơn LCL', 'Không lo hàng bị trộn lẫn', 'Thời gian transit nhanh hơn', 'Phù hợp hàng bulk, pallet'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[#F5A623]">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href={lp('/#nhan-bao-gia')} className="inline-block bg-[#1B2A6B] text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors mr-4">
                Nhận báo giá FCL
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
