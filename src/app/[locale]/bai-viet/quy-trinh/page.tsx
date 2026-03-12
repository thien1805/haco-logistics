import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
  {
    title: 'Hướng dẫn khai báo hải quan điện tử qua VNACCS/VCIS',
    excerpt: 'Hệ thống VNACCS/VCIS đã thay đổi căn bản cách thức khai báo hải quan tại Việt Nam. Tìm hiểu quy trình từng bước để thông quan nhanh chóng và đúng pháp luật...',
    date: '02/06/2025',
  },
  {
    title: 'Chứng từ cần thiết cho lô hàng xuất khẩu đi Mỹ',
    excerpt: 'Xuất khẩu hàng hóa sang Hoa Kỳ yêu cầu bộ chứng từ đặc thù bao gồm thủ tục hải quan Mỹ (CBP), y tế, kiểm dịch... Tổng hợp đầy đủ danh sách và lưu ý...',
    date: '15/05/2025',
  },
  {
    title: 'Quy trình nhập khẩu hàng hóa từ Trung Quốc về Việt Nam',
    excerpt: 'Nhập khẩu hàng từ Trung Quốc cần tuân thủ các bước: đặt hàng → kiểm định → book tàu → khai báo hải quan → nhận hàng. Chi tiết từng bước trong bài viết...',
    date: '01/05/2025',
  },
];

export default function ProcessPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Header />
      <main>
        <section className="relative h-56 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Bài viết</p>
            <h1 className="text-4xl font-bold">Quy trình xuất nhập khẩu</h1>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.title} className="flex gap-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="w-32 h-28 bg-gradient-to-br from-amber-400 to-orange-500 shrink-0 flex items-center justify-center text-white text-3xl">
                    📋
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
