'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FormData {
  // Step 1
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  // Step 2
  serviceType: string;
  origin: string;
  destination: string;
  cargoType: string;
  // Step 3
  weight: string;
  volume: string;
  quantity: string;
  readyDate: string;
  notes: string;
}

const TOTAL_STEPS = 4;

export default function QuoteForm() {
  const t = useTranslations('quote');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'sea',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    volume: '',
    quantity: '',
    readyDate: '',
    notes: '',
  });

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError(t('step4.error'));
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B7DC4] focus:border-transparent transition';

  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  const serviceOptions = [
    { value: 'sea', label: t('step2.seaFreight') },
    { value: 'air', label: t('step2.airFreight') },
    { value: 'road', label: t('step2.roadFreight') },
    { value: 'customs', label: t('step2.customs') },
  ];

  return (
    <section id="nhan-bao-gia" className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A6B] mb-3">
            {t('title')}
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-700">{t('step4.success')}</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-10">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all ${
                      s === step
                        ? 'bg-[#1B7DC4] border-[#1B7DC4] text-white'
                        : s < step
                        ? 'bg-[#1B7DC4] border-[#1B7DC4] text-white'
                        : 'border-gray-300 text-gray-400'
                    }`}
                  >
                    {s < step ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s
                    )}
                  </div>
                  {s < 4 && (
                    <div className={`flex-1 h-0.5 mx-1 ${s < step ? 'bg-[#1B7DC4]' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Contact info */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>{t('step1.fullName')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step1.fullNamePlaceholder')}
                    value={formData.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step1.jobTitle')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step1.jobTitlePlaceholder')}
                    value={formData.jobTitle}
                    onChange={(e) => update('jobTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step1.company')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step1.companyPlaceholder')}
                    value={formData.company}
                    onChange={(e) => update('company', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step1.email')}</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder={t('step1.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step1.phone')}</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder={t('step1.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Cargo info */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>{t('step2.serviceType')}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('serviceType', opt.value)}
                        className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.serviceType === opt.value
                            ? 'border-[#1B7DC4] bg-blue-50 text-[#1B7DC4]'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('step2.origin')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step2.originPlaceholder')}
                    value={formData.origin}
                    onChange={(e) => update('origin', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step2.destination')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step2.destinationPlaceholder')}
                    value={formData.destination}
                    onChange={(e) => update('destination', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t('step2.cargoType')}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={t('step2.cargoPlaceholder')}
                    value={formData.cargoType}
                    onChange={(e) => update('cargoType', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Shipment details */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t('step3.weight')}</label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder={t('step3.weightPlaceholder')}
                      value={formData.weight}
                      onChange={(e) => update('weight', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t('step3.volume')}</label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder={t('step3.volumePlaceholder')}
                      value={formData.volume}
                      onChange={(e) => update('volume', e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t('step3.quantity')}</label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder={t('step3.quantityPlaceholder')}
                      value={formData.quantity}
                      onChange={(e) => update('quantity', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t('step3.readyDate')}</label>
                    <input
                      type="date"
                      className={inputClass}
                      value={formData.readyDate}
                      onChange={(e) => update('readyDate', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('step3.notes')}</label>
                  <textarea
                    rows={4}
                    className={inputClass}
                    placeholder={t('step3.notesPlaceholder')}
                    value={formData.notes}
                    onChange={(e) => update('notes', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="space-y-3 text-sm">
                <h3 className="font-semibold text-[#1B2A6B] text-base mb-4">{t('step4.title')}</h3>
                <div className="bg-gray-50 rounded-lg p-5 space-y-2">
                  {[
                    [t('step4.review.fullName'), formData.fullName],
                    [t('step4.review.jobTitle'), formData.jobTitle],
                    [t('step4.review.company'), formData.company],
                    [t('step4.review.email'), formData.email],
                    [t('step4.review.phone'), formData.phone],
                    [t('step4.review.serviceType'), serviceOptions.find((opt) => opt.value === formData.serviceType)?.label ?? '—'],
                    [t('step4.review.origin'), formData.origin],
                    [t('step4.review.destination'), formData.destination],
                    [t('step4.review.cargoType'), formData.cargoType],
                    [t('step4.review.weight'), formData.weight ? `${formData.weight} kg` : '—'],
                    [t('step4.review.volume'), formData.volume ? `${formData.volume} CBM` : '—'],
                    [t('step4.review.quantity'), formData.quantity || '—'],
                    [t('step4.review.readyDate'), formData.readyDate || '—'],
                    [t('step4.review.notes'), formData.notes || '—'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-2">
                      <span className="text-gray-500 min-w-[180px] shrink-0">{label}:</span>
                      <span className="text-gray-800 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-600 font-medium rounded-full hover:border-gray-400 transition-colors"
                >
                  {t('back')}
                </button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-[#1B7DC4] hover:bg-[#1567a8] text-white font-semibold rounded-full transition-colors shadow"
                >
                  {t('next')}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-8 py-3 bg-[#1B7DC4] hover:bg-[#1567a8] disabled:opacity-60 text-white font-semibold rounded-full transition-colors shadow"
                >
                  {loading ? '...' : t('submit')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
