import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const categories = [
  { label: 'Tin tức', href: 'tin-tuc', count: 12 },
  { label: 'Kiến thức logistics', href: 'kien-thuc', count: 8 },
  { label: 'Quy trình xuất nhập khẩu', href: 'quy-trinh', count: 5 },
];

const placeholderPosts = [
  {
    cat: 'Tin tức',
    catHref: 'tin-tuc',
    title: 'HACO Logistics mở rộng tuyến vận tải đường biển đến châu Âu',
    excerpt: 'Với nhu cầu ngày càng cao từ khách hàng, HACO Logistics chính thức ra mắt dịch vụ vận tải LCL định kỳ đến các cảng Rotterdam, Hamburg và Barcelona...',
    date: '15/06/2025',
  },
  {
    cat: 'Kiến thức logistics',
    catHref: 'kien-thuc',
    title: 'LCL và FCL: Khi nào nên chọn phương thức nào?',
    excerpt: 'Đây là câu hỏi mà nhiều doanh nghiệp xuất nhập khẩu thường gặp. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt và lựa chọn phù hợp...',
    date: '08/06/2025',
  },
  {
    cat: 'Quy trình xuất nhập khẩu',
    catHref: 'quy-trinh',
    title: 'Hướng dẫn khai báo hải quan điện tử qua VNACCS/VCIS',
    excerpt: 'Hệ thống VNACCS/VCIS đã thay đổi căn bản cách thức khai báo hải quan tại Việt Nam. Tìm hiểu quy trình từng bước để thông quan nhanh chóng...',
    date: '02/06/2025',
  },
  {
    cat: 'Tin tức',
    catHref: 'tin-tuc',
    title: 'Giá cước vận tải biển 2025: Xu hướng và dự báo',
    excerpt: 'Thị trường vận tải biển năm 2025 tiếp tục biến động với nhiều yếu tố tác động từ xung đột địa chính trị đến nhu cầu toàn cầu phục hồi...',
    date: '28/05/2025',
  },
  {
    cat: 'Kiến thức logistics',
    catHref: 'kien-thuc',
    title: 'Incoterms 2020: Giải thích các điều kiện thương mại phổ biến',
    excerpt: 'FOB, CIF, DAP, DDP... Các thuật ngữ Incoterms thường xuyên xuất hiện trong hợp đồng mua bán quốc tế. Hiểu đúng để tránh rủi ro...',
    date: '20/05/2025',
  },
  {
    cat: 'Quy trình xuất nhập khẩu',
    catHref: 'quy-trinh',
    title: 'Chứng từ cần thiết cho lô hàng xuất khẩu đi Mỹ',
    excerpt: 'Xuất khẩu hàng hóa sang Hoa Kỳ yêu cầu bộ chứng từ đặc thù. Bài viết tổng hợp đầy đủ danh sách và lưu ý quan trọng...',
    date: '15/05/2025',
  },
];

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-56 md:h-64 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Bài viết & Tin tức</h1>
            <p className="text-blue-200 text-lg">Kiến thức logistics — Cập nhật thị trường — Quy trình xuất nhập khẩu</p>
          </div>
        </section>

        {/* Category pills */}
        <section className="bg-gray-50 border-b py-5 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
            <Link href={lp('/bai-viet')} className="px-4 py-2 rounded-full bg-[#1B2A6B] text-white text-sm font-semibold">
              Tất cả
            </Link>
            {categories.map((c) => (
              <Link
                key={c.href}
                href={lp(`/bai-viet/${c.href}`)}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-[#1B2A6B] hover:text-[#1B2A6B] transition-colors"
              >
                {c.label} <span className="text-gray-400 ml-1">({c.count})</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Post grid */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placeholderPosts.map((post) => (
                <article key={post.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="h-44 bg-gradient-to-br from-[#1B2A6B] to-blue-400 flex items-center justify-center text-white text-4xl">
                    {post.catHref === 'tin-tuc' ? '📰' : post.catHref === 'kien-thuc' ? '📚' : '📋'}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Link
                        href={lp(`/bai-viet/${post.catHref}`)}
                        className="text-xs font-semibold text-[#F5A623] uppercase tracking-wide hover:underline"
                      >
                        {post.cat}
                      </Link>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="font-bold text-[#1B2A6B] text-base mb-2 leading-snug group-hover:text-[#F5A623] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
