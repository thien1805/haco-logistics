import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Blog post data - expanded with full content
const blogPosts: { [key: string]: any } = {
  '1': {
    id: '1',
    cat: 'Tin tức',
    catHref: 'tin-tuc',
    title: 'HACO Logistics mở rộng tuyến vận tải đường biển đến châu Âu',
    excerpt: 'Với nhu cầu ngày càng cao từ khách hàng, HACO Logistics chính thức ra mắt dịch vụ vận tải LCL định kỳ đến các cảng Rotterdam, Hamburg và Barcelona...',
    date: '15/06/2025',
    content: `
      <h2>Mở rộng tuyến đường mới</h2>
      <p>Với nhu cầu ngày càng cao từ khách hàng, HACO Logistics chính thức ra mắt dịch vụ vận tải LCL định kỳ đến các cảng Rotterdam, Hamburg và Barcelona. Đây là bước tiến quan trọng trong chiến lược toàn cầu của công ty.</p>

      <h2>Lợi ích của dịch vụ mới</h2>
      <p>Dịch vụ này mang đến nhiều lợi ích cho các doanh nghiệp xuất nhập khẩu:</p>
      <ul>
        <li>Giảm chi phí vận tải</li>
        <li>Rút ngắn thời gian giao hàng</li>
        <li>Tăng độ tin cậy trong chuỗi cung ứng</li>
        <li>Hỗ trợ toàn diện từ nhân viên chuyên nghiệp</li>
      </ul>

      <h2>Cam kết của HACO Logistics</h2>
      <p>HACO Logistics cam kết cung cấp dịch vụ chất lượng cao với giá cạnh tranh, đáp ứng nhu cầu ngày càng tăng của thị trường vận tải quốc tế.</p>
    `
  },
  '2': {
    id: '2',
    cat: 'Kiến thức logistics',
    catHref: 'kien-thuc',
    title: 'LCL và FCL: Khi nào nên chọn phương thức nào?',
    excerpt: 'Đây là câu hỏi mà nhiều doanh nghiệp xuất nhập khẩu thường gặp. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt và lựa chọn phù hợp...',
    date: '08/06/2025',
    content: `
      <h2>LCL là gì?</h2>
      <p>LCL (Less than Container Load) là phương thức vận tải cho những lô hàng nhỏ, không đủ để lấp đầy một container. Nhiều khách hàng khác nhau sẽ chia sẻ một container.</p>

      <h2>FCL là gì?</h2>
      <p>FCL (Full Container Load) là phương thức vận tải khi hàng hóa đủ lấp đầy toàn bộ một hoặc nhiều container. Khách hàng sẽ sử dụng riêng container.</p>

      <h2>So sánh LCL và FCL</h2>
      <table>
        <tr><th>Tiêu chí</th><th>LCL</th><th>FCL</th></tr>
        <tr><td>Khối lượng hàng</td><td>Nhỏ</td><td>Lớn</td></tr>
        <tr><td>Chi phí</td><td>Cao hơn theo tấn</td><td>Thấp hơn theo tấn</td></tr>
        <tr><td>Thời gian</td><td>Lâu hơn</td><td>Nhanh hơn</td></tr>
        <tr><td>Linh hoạt</td><td>Cao</td><td>Thấp</td></tr>
      </table>

      <h2>Khi nào chọn LCL?</h2>
      <p>Chọn LCL khi số lượng hàng không nhiều, bạn muốn giảm chi phí tích trữ hoặc cần gửi hàng thường xuyên những lô nhỏ.</p>

      <h2>Khi nào chọn FCL?</h2>
      <p>Chọn FCL khi bạn có khối lượng hàng lớn, cần giao hàng nhanh, hoặc muốn chi phí vận tải thấp nhất.</p>
    `
  },
  '3': {
    id: '3',
    cat: 'Quy trình xuất nhập khẩu',
    catHref: 'quy-trinh',
    title: 'Hướng dẫn khai báo hải quan điện tử qua VNACCS/VCIS',
    excerpt: 'Hệ thống VNACCS/VCIS đã thay đổi căn bản cách thức khai báo hải quan tại Việt Nam. Tìm hiểu quy trình từng bước để thông quan nhanh chóng...',
    date: '02/06/2025',
    content: `
      <h2>VNACCS/VCIS là gì?</h2>
      <p>VNACCS/VCIS là hệ thống khai báo hải quan điện tử của Việt Nam, cho phép khai báo nhập khẩu, xuất khẩu trực tuyến mà không cần đến trực tiếp cơ quan hải quan.</p>

      <h2>Các bước khai báo</h2>
      <ol>
        <li>Đăng nhập tài khoản trên hệ thống VNACCS/VCIS</li>
        <li>Chọn loại khai báo (nhập khẩu hoặc xuất khẩu)</li>
        <li>Nhập thông tin hàng hóa đầy đủ</li>
        <li>Xác nhận và gửi khai báo</li>
        <li>Chờ xác nhận từ cơ quan hải quan</li>
      </ol>

      <h2>Những lợi ích</h2>
      <ul>
        <li>Tiết kiệm thời gian</li>
        <li>Giảm chi phí khai báo</li>
        <li>Minh bạch trong quá trình</li>
        <li>Tránh lỗi thủ công</li>
      </ul>

      <h2>Liên hệ HACO Logistics</h2>
      <p>HACO Logistics có đội ngũ chuyên gia hải quan sẵn sàng hỗ trợ bạn thực hiện khai báo điện tử một cách nhanh chóng và chính xác nhất.</p>
    `
  },
  '4': {
    id: '4',
    cat: 'Tin tức',
    catHref: 'tin-tuc',
    title: 'Giá cước vận tải biển 2025: Xu hướng và dự báo',
    excerpt: 'Thị trường vận tải biển năm 2025 tiếp tục biến động với nhiều yếu tố tác động từ xung đột địa chính trị đến nhu cầu toàn cầu phục hồi...',
    date: '28/05/2025',
    content: `
      <h2>Tình hình thị trường 2025</h2>
      <p>Thị trường vận tải biển năm 2025 tiếp tục biến động với nhiều yếu tố tác động từ xung đột địa chính trị đến nhu cầu toàn cầu phục hồi.</p>

      <h2>Những yếu tố ảnh hưởng</h2>
      <ul>
        <li>Tình hình địa chính trị</li>
        <li>Nhu cầu tiêu dùng toàn cầu</li>
        <li>Giá dầu thô</li>
        <li>Tỷ giá hối đoái</li>
        <li>Năng lực vận tải</li>
      </ul>

      <h2>Dự báo giá cước</h2>
      <p>Các chuyên gia dự báo giá cước sẽ có xu hướng tăng nhẹ trong nửa đầu năm, sau đó có thể ổn định hoặc giảm nhẹ tùy theo diễn biến kinh tế toàn cầu.</p>

      <h2>Lời khuyên từ HACO Logistics</h2>
      <p>Các doanh nghiệp nên chủ động lên kế hoạch, liên hệ với các nhà cung cấp dịch vụ logistics để có được giá tốt nhất và tính toán chi phí một cách hợp lý.</p>
    `
  },
  '5': {
    id: '5',
    cat: 'Kiến thức logistics',
    catHref: 'kien-thuc',
    title: 'Incoterms 2020: Giải thích các điều kiện thương mại phổ biến',
    excerpt: 'FOB, CIF, DAP, DDP... Các thuật ngữ Incoterms thường xuyên xuất hiện trong hợp đồng mua bán quốc tế. Hiểu đúng để tránh rủi ro...',
    date: '20/05/2025',
    content: `
      <h2>Incoterms là gì?</h2>
      <p>Incoterms (International Commercial Terms) là các điều khoản thương mại quốc tế được Phòng thương mại quốc tế (ICC) phát hành, xác định trách nhiệm của người bán và người mua.</p>

      <h2>Các Incoterms phổ biến</h2>

      <h3>FOB (Free on Board)</h3>
      <p>Người bán chịu trách nhiệm đến khi hàng lên tàu tại cảng xuất phát. Người mua chịu chi phí vận tải và bảo hiểm từ đó.</p>

      <h3>CIF (Cost, Insurance, and Freight)</h3>
      <p>Người bán chịu chi phí vận tải và bảo hiểm đến cảng nhập khẩu. Người mua chịu trách nhiệm khi hàng được giao.</p>

      <h3>DAP (Delivered at Place)</h3>
      <p>Người bán chịu chi phí và trách nhiệm vận tải đến địa điểm được chỉ định. Người mua chịu chi phí unloading và thủ tục nhập khẩu.</p>

      <h3>DDP (Delivered Duty Paid)</h3>
      <p>Người bán chịu toàn bộ chi phí và trách nhiệm vận tải, người mua chỉ nhận hàng tại điểm đến.</p>

      <h2>Cách chọn Incoterms phù hợp</h2>
      <p>Lựa chọn Incoterms phụ thuộc vào thỏa thuận giữa hai bên, tình hình tài chính, và mục tiêu kinh doanh của từng doanh nghiệp.</p>
    `
  },
  '6': {
    id: '6',
    cat: 'Quy trình xuất nhập khẩu',
    catHref: 'quy-trinh',
    title: 'Chứng từ cần thiết cho lô hàng xuất khẩu đi Mỹ',
    excerpt: 'Xuất khẩu hàng hóa sang Hoa Kỳ yêu cầu bộ chứng từ đặc thù. Bài viết tổng hợp đầy đủ danh sách và lưu ý quan trọng...',
    date: '15/05/2025',
    content: `
      <h2>Tầm quan trọng của chứng từ</h2>
      <p>Xuất khẩu hàng hóa sang Hoa Kỳ yêu cầu bộ chứng từ đặc thù để thông quan và tuân thủ các quy định của Hải quan Mỹ.</p>

      <h2>Danh sách chứng từ cần thiết</h2>
      <ul>
        <li><strong>Commercial Invoice</strong> - Hóa đơn thương mại chi tiết</li>
        <li><strong>Packing List</strong> - Danh sách chi tiết hàng trong container</li>
        <li><strong>Bill of Lading</strong> - Chứng thư vận tải</li>
        <li><strong>Certificate of Origin</strong> - Chứng chỉ xuất xứ</li>
        <li><strong>Export License</strong> - Giấy phép xuất khẩu (nếu cần)</li>
        <li><strong>Customs Declaration</strong> - Khai báo hải quan</li>
        <li><strong>Phytosanitary Certificate</strong> - Chứng chỉ an toàn thực vật (nếu hàng là nông sản)</li>
      </ul>

      <h2>Những lưu ý quan trọng</h2>
      <ol>
        <li>Đảm bảo tất cả chứng từ đúng tiêu chuẩn và không có lỗi</li>
        <li>Chuẩn bị chứng từ sớm trước khi hàng đóng gói</li>
        <li>Kiểm tra quy định nhập khẩu cụ thể của người mua</li>
        <li>Lưu giữ bản sao chứng từ cho kế toán</li>
      </ol>

      <h2>Hỗ trợ từ HACO Logistics</h2>
      <p>HACO Logistics có chuyên gia hải quan sẵn sàng giúp bạn chuẩn bị toàn bộ chứng từ cần thiết cho xuất khẩu sang Mỹ một cách đầy đủ và chính xác.</p>
    `
  }
};

export default function BlogPostPage({
  params
}: {
  params: { locale: string; id: string }
}) {
  const { locale, id } = params;
  const lp = (path: string) => `/${locale}${path}`;
  const post = blogPosts[id];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1B2A6B] mb-4">Bài viết không tìm thấy</h1>
            <p className="text-gray-600 mb-8">Xin lỗi, bài viết bạn tìm kiếm không tồn tại.</p>
            <Link href={lp('/bai-viet')} className="px-6 py-3 bg-[#1B2A6B] text-white rounded-lg font-semibold hover:bg-blue-800">
              Quay lại danh sách bài viết
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-56 md:h-64 bg-[#1B2A6B] flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
            <p className="text-blue-200">
              <Link href={lp(`/bai-viet/${post.catHref}`)} className="hover:underline">
                {post.cat}
              </Link>
              {' '} • {post.date}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Link href={lp('/bai-viet')} className="text-[#F5A623] font-semibold hover:underline mb-8 inline-block">
              ← Quay lại danh sách
            </Link>

            {/* Article content */}
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12 prose prose-sm md:prose max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed space-y-5"
              />
            </article>

            {/* Related posts section (optional) */}
            <section className="border-t pt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A6B] mb-8">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(blogPosts)
                  .filter((p: any) => p.id !== id && p.catHref === post.catHref)
                  .slice(0, 2)
                  .map((relatedPost: any) => (
                    <Link
                      key={relatedPost.id}
                      href={lp(`/bai-viet/${relatedPost.id}`)}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow group"
                    >
                      <div className="h-32 bg-gradient-to-br from-[#1B2A6B] to-blue-400 flex items-center justify-center text-white text-2xl rounded mb-4">
                        {relatedPost.catHref === 'tin-tuc' ? '📰' : relatedPost.catHref === 'kien-thuc' ? '📚' : '📋'}
                      </div>
                      <h3 className="font-semibold text-[#1B2A6B] group-hover:text-[#F5A623] transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-400">{relatedPost.date}</p>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
