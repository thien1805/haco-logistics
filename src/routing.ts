import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en', 'ko'] as const,
  defaultLocale: 'vi',
  localePrefix: 'always',
});
