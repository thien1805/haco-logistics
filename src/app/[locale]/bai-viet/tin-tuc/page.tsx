import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
  {
    title: 'HACO Logistics mở rộng tuyến vận tải đường biển đến châu Âu',
    excerpt: 'Với nhu cầu ngày càng cao từ khách hàng, HACO Logistics chính thức ra mắt dịch vụ vận tải LCL định kỳ đến các cảng Rotterdam, Hamburg và Barcelona...',
    date: '15/06/2025',
  },
  {
    title: 'Giá cước vận tải biển 2025: Xu hướng và dự báo',
    excerpt: 'Thị trường vận tải biển năm 2025 tiếp tục biến động với nhiều yếu tố tác động từ xung đột địa chính trị đến nhu cầu toàn cầu phục hồi...',
    date: '28/05/2025',
  },
  {
    title: 'HACO ký kết hợp tác với đối tác logistics hàng đầu tại Singapore',
    excerpt: 'Quan hệ đối tác mới sẽ giúp HACO Logistics tăng cường năng lực phục vụ khách hàng tại thị trường Đông Nam Á và mở rộng mạng lưới kết nối quốc tế...',
    date: '10/05/2025',
  },
];

export default function NewsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Header />
      <main>
        <section className="relative h-56 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Bài viết</p>
            <h1 className="text-4xl font-bold">Tin tức</h1>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.title} className="flex gap-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="w-32 h-28 bg-gradient-to-br from-[#1B2A6B] to-blue-400 shrink-0 flex items-center justify-center text-white text-3xl">
                    📰
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
