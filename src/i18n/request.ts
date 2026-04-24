import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export function detectLocaleFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'fr';
}

export default getRequestConfig(async () => {
  const pathname = headers().get('x-pathname') ?? '';
  const locale = detectLocaleFromPathname(pathname);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    // FR is rendered from hardcoded text in components, so missing FR keys are
    // expected. Swallow MISSING_MESSAGE errors so the app never crashes on FR.
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') return;
      console.error(error);
    },
    getMessageFallback({ key }) {
      return key;
    },
  };
});
