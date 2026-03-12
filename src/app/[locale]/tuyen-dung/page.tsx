import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jobs = [
  {
    title: 'Nhân viên Kinh doanh Logistics',
    dept: 'Kinh doanh',
    type: 'Toàn thời gian',
    location: 'TP. Hồ Chí Minh',
    deadline: '31/07/2025',
    desc: 'Tìm kiếm, phát triển và duy trì quan hệ khách hàng doanh nghiệp. Tư vấn và bán các giải pháp vận tải đường biển, hàng không và đường bộ.',
    reqs: ['Tốt nghiệp Đại học các ngành Kinh tế, Ngoại thương, Logistics', 'Kinh nghiệm ít nhất 1 năm trong lĩnh vực Logistics / Freight Forwarding', 'Kỹ năng giao tiếp, thương lượng tốt', 'Tiếng Anh giao tiếp'],
  },
  {
    title: 'Nhân viên Chứng từ Xuất nhập khẩu',
    dept: 'Vận hành',
    type: 'Toàn thời gian',
    location: 'TP. Hồ Chí Minh',
    deadline: '31/07/2025',
    desc: 'Xử lý toàn bộ chứng từ xuất nhập khẩu: B/L, C/O, CO, packing list, invoice. Liên hệ với hãng tàu, hãng hàng không và các cơ quan chức năng.',
    reqs: ['Am hiểu nghiệp vụ ngoại thương và chứng từ xuất nhập khẩu', 'Thành thạo Microsoft Office', 'Cẩn thận, chi tiết, chịu áp lực cao', 'Tiếng Anh đọc hiểu tốt'],
  },
  {
    title: 'Khai báo viên Hải quan',
    dept: 'Hải quan',
    type: 'Toàn thời gian',
    location: 'TP. Hồ Chí Minh',
    deadline: '15/08/2025',
    desc: 'Thực hiện khai báo điện tử qua hệ thống VNACCS/VCIS, phân loại hàng hóa và xác định mã HS. Phối hợp với Chi cục Hải quan để giải quyết vướng mắc.',
    reqs: ['Có chứng chỉ Đại lý Hải quan hoặc Khai báo viên', 'Kinh nghiệm tối thiểu 2 năm khai báo hàng xuất/nhập', 'Am hiểu biểu thuế XNK và chính sách thuế cập nhật', 'Tỉ mỉ, chính xác trong xử lý hồ sơ'],
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Tuyển dụng</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">
              Gia nhập đội ngũ HACO Logistics — Cùng nhau kết nối Việt Nam với thế giới
            </p>
          </div>
        </section>

        {/* Why HACO */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B2A6B] text-center mb-10">Tại sao làm việc tại HACO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🚀', title: 'Môi trường phát triển', desc: 'Cơ hội thăng tiến rõ ràng, đào tạo liên tục và tiếp xúc với nghiệp vụ logistics quốc tế đỉnh cao.' },
                { icon: '💼', title: 'Đãi ngộ cạnh tranh', desc: 'Lương thưởng hấp dẫn, BHXH đầy đủ, thưởng KPI theo kết quả kinh doanh.' },
                { icon: '🌍', title: 'Môi trường quốc tế', desc: 'Làm việc với đối tác và khách hàng từ hơn 50 quốc gia, nâng cao kinh nghiệm và ngoại ngữ.' },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-7 text-center shadow-sm">
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="font-bold text-[#1B2A6B] mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job listings */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B2A6B] mb-8">Vị trí đang tuyển</h2>
            <div className="space-y-8">
              {jobs.map((job) => (
                <div key={job.title} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-[#1B2A6B] px-6 py-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[job.dept, job.type, job.location].map((tag) => (
                          <span key={tag} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-blue-200 text-sm">Hạn nộp: {job.deadline}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{job.desc}</p>
                    <h4 className="font-semibold text-gray-700 text-sm mb-2">Yêu cầu:</h4>
                    <ul className="space-y-1.5 mb-6">
                      {job.reqs.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-[#F5A623] shrink-0 mt-0.5">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:hr@haco-logistics.com?subject=Ứng tuyển: ${encodeURIComponent(job.title)}`}
                      className="inline-block bg-[#F5A623] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
                    >
                      Ứng tuyển ngay →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gray-50 text-center border-t">
          <p className="text-gray-600 mb-2">Không tìm thấy vị trí phù hợp? Gửi hồ sơ ứng viên tiềm năng cho chúng tôi.</p>
          <a
            href="mailto:hr@haco-logistics.com?subject=Hồ sơ ứng viên tiềm năng"
            className="text-[#1B2A6B] font-semibold hover:underline"
          >
            hr@haco-logistics.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
