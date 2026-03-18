import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = process.env.QUOTE_TO_EMAIL ?? 'info@haco-logistics.com';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Basic input validation
    const { fullName, email, phone } = data;
    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const serviceLabels: Record<string, string> = {
      sea: 'Vận tải đường biển / Sea Freight',
      air: 'Vận tải đường hàng không / Air Freight',
      road: 'Vận tải đường bộ / Road Transport',
      customs: 'Khai báo hải quan / Customs Declaration',
    };

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1B2A6B; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #F5A623; margin: 0; font-size: 22px;">Yêu Cầu Báo Giá Mới / New Quote Request</h1>
          <p style="color: #aac4f5; margin: 5px 0 0;">HACO International Logistics</p>
        </div>
        <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <h2 style="color: #1B2A6B; font-size: 16px; margin-bottom: 16px;">Thông tin liên hệ / Contact Info</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 180px;">Họ tên / Full Name:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Chức danh / Job Title:</td><td style="padding: 6px 0;">${escapeHtml(data.jobTitle ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Công ty / Company:</td><td style="padding: 6px 0;">${escapeHtml(data.company ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #1B7DC4;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Điện thoại / Phone:</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
          </table>
          <h2 style="color: #1B2A6B; font-size: 16px; margin-bottom: 16px;">Thông tin vận chuyển / Shipment Info</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 180px;">Dịch vụ / Service:</td><td style="padding: 6px 0; font-weight: 600;">${serviceLabels[data.serviceType] ?? escapeHtml(data.serviceType ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Xuất phát / Origin:</td><td style="padding: 6px 0;">${escapeHtml(data.origin ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Điểm đến / Destination:</td><td style="padding: 6px 0;">${escapeHtml(data.destination ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Loại hàng / Cargo:</td><td style="padding: 6px 0;">${escapeHtml(data.cargoType ?? '')}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Trọng lượng / Weight:</td><td style="padding: 6px 0;">${data.weight ? `${escapeHtml(String(data.weight))} kg` : '—'}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Thể tích / Volume:</td><td style="padding: 6px 0;">${data.volume ? `${escapeHtml(String(data.volume))} CBM` : '—'}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Số kiện / Packages:</td><td style="padding: 6px 0;">${escapeHtml(String(data.quantity ?? '—'))}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Ngày sẵn hàng / Ready:</td><td style="padding: 6px 0;">${escapeHtml(data.readyDate ?? '—')}</td></tr>
          </table>
          ${data.notes ? `<div style="background: #f9fafb; border-left: 4px solid #1B7DC4; padding: 12px 16px; border-radius: 4px;"><strong>Ghi chú / Notes:</strong><br/>${escapeHtml(data.notes)}</div>` : ''}
        </div>
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">© 2026 HACO International Logistics Co., Ltd</p>
      </div>
    `;

    // Only send email if API key is available
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'HACO Logistics <noreply@haco-logistics.com>',
        to: [TO_EMAIL],
        replyTo: email,
        subject: `[Báo Giá] ${fullName} - ${serviceLabels[data.serviceType] ?? data.serviceType}`,
        html: htmlBody,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[quote API error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
