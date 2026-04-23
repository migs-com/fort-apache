import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';
import { socialWallPosts } from '@/lib/social-wall';
import { siteConfig } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Home.Metadata');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/en`,
      languages: {
        fr: `${siteConfig.url}/`,
        en: `${siteConfig.url}/en`,
        'x-default': `${siteConfig.url}/`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${siteConfig.url}/en`,
      siteName: siteConfig.fullName,
      title: t('title'),
      description: t('description'),
    },
  };
}

const iconCls = 'w-12 h-12 text-bordeaux';
const activityIconCls = 'w-10 h-10 text-foret group-hover:text-bordeaux transition';

async function HeroEN() {
  const t = await getTranslations('Home.Hero');
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ffeImages.top3}
          alt="Fort Apache — Equestrian Club"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charbon/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charbon/70 via-charbon/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center text-white px-4 py-24">
        <p className="font-sans uppercase tracking-[0.3em] text-sable-light text-xs md:text-sm mb-6 animate-fade-in">
          {t('eyebrow')}
        </p>
        <h1 className="font-serif text-white mb-6 animate-slide-up max-w-4xl mx-auto">
          {t('h1Line1')} <br className="hidden md:block" />
          {t('h1Line2')}
        </h1>
        <p className="text-lg md:text-xl text-creme/90 max-w-2xl mx-auto mb-10 font-light animate-slide-up">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <LinkButton
            href="/en/contact?objet=Renseignements"
            variant="primary"
            size="lg"
          >
            {t('primaryCta')}
          </LinkButton>
          <Link
            href="/en/activities"
            className="text-white underline underline-offset-4 decoration-sable hover:decoration-white transition"
          >
            {t('secondaryCta')}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

async function IntroEN() {
  const t = await getTranslations('Home.Intro');
  return (
    <section className="section bg-white">
      <div className="container-narrow text-center">
        <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="text-foret-dark mb-6">{t('heading')}</h2>
        <div className="space-y-5 text-charbon/85 text-lg leading-relaxed">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>
      </div>
    </section>
  );
}

async function WhyUsEN() {
  const t = await getTranslations('Home.WhyUs');
  const items = [
    {
      title: t('item1Title'),
      description: t('item1Desc'),
      icon: (
        <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="24" cy="24" r="20" />
          <path d="M24 12v12l8 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t('item2Title'),
      description: t('item2Desc'),
      icon: (
        <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M24 4l4 12h12l-10 8 4 14-10-8-10 8 4-14-10-8h12z" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t('item3Title'),
      description: t('item3Desc'),
      icon: (
        <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 40l12-20 8 12 6-8 14 16H4z" strokeLinejoin="round" />
          <circle cx="32" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: t('item4Title'),
      description: t('item4Desc'),
      icon: (
        <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="6" y="10" width="36" height="32" rx="2" />
          <path d="M6 18h36M16 4v8M32 4v8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-foret-dark mb-4">{t('heading')}</h2>
          <p className="max-w-2xl mx-auto text-charbon/75">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((r) => (
            <div
              key={r.title}
              className="text-center bg-white rounded-lg p-6 md:p-8 border border-sable/40 hover:border-bordeaux/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bordeaux/5 mb-5">
                {r.icon}
              </div>
              <h3 className="font-serif text-xl text-foret-dark mb-3">
                {r.title}
              </h3>
              <p className="text-sm text-charbon/75 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function BaladePoneyEN() {
  const t = await getTranslations('Home.BaladePoney');
  return (
    <section className="section bg-white" id="pony-rides">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
          <Image
            src={ffeImages.album[10]}
            alt={t('imageAlt')}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-bordeaux text-white text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
            {t('badge')}
          </span>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-foret-dark mb-6">{t('heading')}</h2>
          <p className="text-charbon/85 text-lg leading-relaxed mb-4">
            {t('paragraph1Before')}
            <strong>{t('paragraph1Strong1')}</strong>
            {t('paragraph1Middle')}
            <strong>{t('paragraph1Strong2')}</strong>
            {t('paragraph1After')}
          </p>
          <p className="text-charbon/75 mb-8">{t('paragraph2')}</p>
          <ul className="space-y-2 mb-8 text-charbon/85">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-foret font-bold" aria-hidden>
                  ✓
                </span>
                {t(`bullet${i}` as 'bullet1' | 'bullet2' | 'bullet3' | 'bullet4' | 'bullet5')}
              </li>
            ))}
          </ul>
          <LinkButton
            href="/en/contact?objet=Renseignements"
            variant="primary"
            size="lg"
          >
            {t('cta')}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

async function FounderJourneyEN() {
  const t = await getTranslations('Home.FounderJourney');
  return (
    <section className="section bg-foret-dark text-creme">
      <div className="container-narrow text-center">
        <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="text-white mb-6">{t('heading')}</h2>
        <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-white/95 mb-6">
          « {t('quote')} »
        </blockquote>
        <p className="text-creme/85 leading-relaxed mb-8 max-w-3xl mx-auto">
          {t('paragraph')}
        </p>
        <Link
          href="/en/activities"
          className="text-sable-light underline underline-offset-4 hover:text-white transition"
        >
          {t('link')}
        </Link>
      </div>
    </section>
  );
}

async function ActivitiesGridEN() {
  const t = await getTranslations('Home.Activities');
  const cards = [
    {
      href: '/en/activities#pony-rides',
      name: t('card1'),
      icon: (
        <svg className={activityIconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 48c0-10 8-18 18-18h4c10 0 18 8 18 18" />
          <circle cx="22" cy="38" r="3" />
          <circle cx="42" cy="38" r="3" />
          <path d="M30 22c-2-2-4-6-2-10M34 22c2-2 4-6 2-10" />
        </svg>
      ),
    },
    {
      href: '/en/activities#pony-school',
      name: t('card2'),
      icon: (
        <svg className={activityIconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="32" cy="18" r="6" />
          <path d="M20 52v-8c0-6 5-10 12-10s12 4 12 10v8" />
        </svg>
      ),
    },
    {
      href: '/en/activities#group-lessons',
      name: t('card3'),
      icon: (
        <svg className={activityIconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="20" cy="24" r="4" />
          <circle cx="32" cy="20" r="4" />
          <circle cx="44" cy="24" r="4" />
          <path d="M14 52c0-6 4-12 10-12 3 0 5 2 8 2s5-2 8-2c6 0 10 6 10 12" />
        </svg>
      ),
    },
    {
      href: '/en/activities#trail-rides',
      name: t('card4'),
      icon: (
        <svg className={activityIconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M8 52l12-20 10 14 8-10 18 16" />
          <circle cx="44" cy="14" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-foret-dark mb-4">{t('heading')}</h2>
          <p className="max-w-2xl mx-auto text-charbon/75">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cards.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col items-center text-center p-6 md:p-8 rounded-lg bg-white border border-sable/40 hover:border-foret hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{d.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl text-foret-dark">
                {d.name}
              </h3>
              <span className="mt-3 text-xs uppercase tracking-wide text-bordeaux opacity-0 group-hover:opacity-100 transition">
                {t('hover')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

async function SocialWallEN() {
  const t = await getTranslations('Home.SocialWall');
  const { facebook, instagram } = siteConfig.socials;

  return (
    <section className="section bg-creme" id="social-wall">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-foret-dark mb-4">{t('heading')}</h2>
          <p className="max-w-2xl mx-auto text-charbon/75 mb-6">
            {t('subtitle')}
          </p>
          <div className="flex justify-center gap-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foret-dark text-white rounded-full hover:bg-foret transition text-sm font-medium"
              >
                @fortapache06
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foret-dark text-white rounded-full hover:bg-foret transition text-sm font-medium"
              >
                Fort Apache
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {socialWallPosts.map((post) => (
            <a
              key={post.id}
              href={post.link ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-foret-dark"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charbon/0 group-hover:bg-charbon/75 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-xs md:text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-4">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

async function TestimonialsEN() {
  const t = await getTranslations('Home.Testimonials');
  const items = [
    { quote: t('quote1'), name: t('name1'), role: t('role1') },
    { quote: t('quote2'), name: t('name2'), role: t('role2') },
    { quote: t('quote3'), name: t('name3'), role: t('role3') },
  ];

  return (
    <section className="section bg-foret-dark text-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-white">{t('heading')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it) => (
            <figure
              key={it.name + it.role}
              className="bg-foret rounded-lg p-6 md:p-8 border border-white/10"
            >
              <svg
                className="w-8 h-8 text-sable mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8c-4 0-8 3-8 10v6h8v-8H6c0-3 2-5 4-5V8zm14 0c-4 0-8 3-8 10v6h8v-8h-4c0-3 2-5 4-5V8z" />
              </svg>
              <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-white/95 mb-6">
                « {it.quote} »
              </blockquote>
              <figcaption className="pt-4 border-t border-white/10">
                <p className="font-medium text-white">{it.name}</p>
                <p className="text-sm text-sable-light">{it.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

async function CTABannerEN() {
  const t = await getTranslations('Home.CTABanner');
  return (
    <section className="bg-charbon text-white">
      <div className="container mx-auto py-16 md:py-20 text-center">
        <h2 className="text-white mb-6">{t('heading')}</h2>
        <p className="text-creme/80 max-w-xl mx-auto mb-8">{t('paragraph')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/en/contact" variant="primary" size="lg">
            {t('cta1')}
          </LinkButton>
          <a
            href="tel:+33493589143"
            className="inline-flex items-center justify-center px-8 py-4 text-lg text-white border-2 border-white/40 hover:bg-white/10 rounded-md transition"
          >
            {t('phone')}
          </a>
        </div>
      </div>
    </section>
  );
}

async function MapEmbedEN() {
  const t = await getTranslations('Home.MapEmbed');
  const query = encodeURIComponent(
    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.locality}`
  );

  return (
    <section className="bg-creme" aria-label={t('ariaLabel')}>
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-10">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-foret-dark">{t('heading')}</h2>
          <p className="mt-3 text-charbon/75">{t('address')}</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-sable/40">
          <iframe
            title={t('iframeTitle')}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default async function HomeENPage() {
  const [
    hero,
    intro,
    whyUs,
    balade,
    founder,
    activities,
    social,
    testimonials,
    cta,
    map,
  ] = await Promise.all([
    HeroEN(),
    IntroEN(),
    WhyUsEN(),
    BaladePoneyEN(),
    FounderJourneyEN(),
    ActivitiesGridEN(),
    SocialWallEN(),
    TestimonialsEN(),
    CTABannerEN(),
    MapEmbedEN(),
  ]);

  return (
    <>
      {hero}
      {intro}
      {whyUs}
      {balade}
      {founder}
      {activities}
      {social}
      {testimonials}
      {cta}
      {map}
    </>
  );
}
