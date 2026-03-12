import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
  {
    title: 'LCL và FCL: Khi nào nên chọn phương thức nào?',
    excerpt: 'Đây là câu hỏi mà nhiều doanh nghiệp xuất nhập khẩu thường gặp. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt và lựa chọn phù hợp cho từng lô hàng...',
    date: '08/06/2025',
  },
  {
    title: 'Incoterms 2020: Giải thích các điều kiện thương mại phổ biến',
    excerpt: 'FOB, CIF, DAP, DDP... Các thuật ngữ Incoterms thường xuyên xuất hiện trong hợp đồng mua bán quốc tế. Hiểu đúng để tránh rủi ro pháp lý và tài chính...',
    date: '20/05/2025',
  },
  {
    title: 'Vận tải đa phương thức là gì? Lợi ích và ứng dụng thực tế',
    excerpt: 'Kết hợp đường biển + đường bộ + hàng không trong cùng một lô hàng giúp tối ưu chi phí và thời gian. Tìm hiểu cách vận tải đa phương thức hoạt động...',
    date: '12/05/2025',
  },
  {
    title: 'Hướng dẫn đọc Bill of Lading (Vận đơn) cho người mới bắt đầu',
    excerpt: 'Bill of Lading là chứng từ quan trọng nhất trong vận tải đường biển. Mỗi mục trên B/L đều mang ý nghĩa pháp lý và tài chính quan trọng cần nắm rõ...',
    date: '05/05/2025',
  },
];

export default function KnowledgePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Header />
      <main>
        <section className="relative h-56 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Bài viết</p>
            <h1 className="text-4xl font-bold">Kiến thức Logistics</h1>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.title} className="flex gap-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="w-32 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0 flex items-center justify-center text-white text-3xl">
                    📚
                  </div>
                  <div className="py-5 pr-6">
                    <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                    <h2 className="font-bold text-[#1B2A6B] text-base mb-2 group-hover:text-[#F5A623] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href={lp('/bai-viet')} className="text-[#1B2A6B] font-semibold text-sm hover:underline">
                ← Xem tất cả bài viết
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
