'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const leftItems = items.slice(0, 4);
  const rightItems = items.slice(4);

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1B7DC4] rounded-md py-5 text-center mb-10 shadow">
          <h2 className="text-4xl font-bold text-white tracking-widest">
            {t('title')}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
            <div className="divide-y divide-gray-200">
              {leftItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full flex items-start justify-between py-5 text-left gap-4 px-5 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenLeft(openLeft === index ? null : index)}
                  >
                    <span
                      className={`text-sm font-medium leading-snug ${
                        openLeft === index ? 'text-[#1B7DC4]' : 'text-gray-800'
                      }`}
                    >
                      {index + 1}. {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform ${
                        openLeft === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openLeft === index && (
                    <div className="pb-5 px-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 bg-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="divide-y divide-gray-200">
              {rightItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full flex items-start justify-between py-5 text-left gap-4 px-5 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenRight(openRight === index ? null : index)}
                  >
                    <span
                      className={`text-sm font-medium leading-snug ${
                        openRight === index ? 'text-[#1B7DC4]' : 'text-gray-800'
                      }`}
                    >
                      {index + 5}. {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform ${
                        openRight === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openRight === index && (
                    <div className="pb-5 px-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 bg-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
