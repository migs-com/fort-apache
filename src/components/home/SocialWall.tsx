'use client';

import Script from 'next/script';

interface SocialWallProps {
  locale: 'fr' | 'en';
}

const dictionary = {
  fr: {
    title: 'Suivez-nous sur Instagram',
    subtitle:
      'Les coulisses du club, les nouvelles du jour, nos rencontres avec les chevaux et les poneys.',
    cta: 'Voir le profil Instagram',
  },
  en: {
    title: 'Follow us on Instagram',
    subtitle:
      'Behind the scenes at the club, daily news, meeting our horses and ponies.',
    cta: 'View Instagram profile',
  },
} as const;

export function SocialWall({ locale }: SocialWallProps) {
  const t = dictionary[locale];

  return (
    <section id="social-wall" className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-midnight text-4xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-midnight/80 text-lg md:text-xl max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div
          className="elfsight-app-9646e2be-a8ac-45ce-8d96-c482c82a881c"
          data-elfsight-app-lazy
        ></div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/fort.apache.equitation.vence/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-6 py-3 rounded-md transition-colors"
          >
            {t.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
