import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const services = [
    {
      icon: <i className="fas fa-ship text-6xl" style={{color: '#1B2A6B'}}></i>,
      title: 'Vận tải đường biển',
      desc: 'Kết nối toàn cầu qua mạng lưới cảng biển quốc tế, đảm bảo hàng hóa được vận chuyển an toàn và đúng hẹn với chi phí tối ưu.',
    },
    {
      icon: <i className="fas fa-plane text-6xl" style={{color: '#1B2A6B'}}></i>,
      title: 'Vận tải đường hàng không',
      desc: 'Dịch vụ vận chuyển hàng không nhanh chóng, đáng tin cậy đến mọi điểm trên thế giới. Lựa chọn tối ưu khi thời gian là yếu tố then chốt.',
    },
    {
      icon: <i className="fas fa-truck text-6xl" style={{color: '#1B2A6B'}}></i>,
      title: 'Vận tải nội địa',
      desc: 'Mạng lưới vận tải đường bộ toàn quốc, đảm bảo hàng hóa được giao tận nơi từ cảng biển, sân bay đến kho của bạn.',
    },
    {
      icon: <i className="fas fa-file-invoice text-6xl" style={{color: '#1B2A6B'}}></i>,
      title: 'Dịch vụ khai báo hải quan',
      desc: 'Đội ngũ chuyên gia hải quan giàu kinh nghiệp hỗ trợ hoàn tất thủ tục nhanh chóng, chính xác, tránh mọi rủi ro và chậm trễ.',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-72 md:h-96 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/images/hero-ship.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1B2A6B]/60" />
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold drop-shadow-lg text-center px-4">
            Về HACO Logistics
          </h1>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A6B] mb-6">Giới thiệu</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Chào mừng bạn đến với HACO Logistics, công ty vận tải quốc tế hàng đầu, chuyên cung cấp các giải pháp logistics toàn diện và hiệu quả. Với sứ mệnh kết nối doanh nghiệp Việt Nam ra thế giới và đưa sản phẩm toàn cầu đến gần hơn với thị trường trong nước, chúng tôi tự hào là đối tác tin cậy, mang đến sự an tâm và thành công cho mọi lô hàng của bạn.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chúng tôi cung cấp các dịch vụ đa dạng, linh hoạt, được thiết kế để đáp ứng mọi nhu cầu vận tải phức tạp nhất:
              </p>
              <ul className="space-y-2 text-gray-700">
                {['Vận tải đường biển', 'Vận tải đường hàng không', 'Vận tải nội địa', 'Dịch vụ khai báo hải quan'].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                    {s}
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

      

        {/* Services Icons */}
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
