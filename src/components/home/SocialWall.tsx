import Image from 'next/image';
import { socialWallPosts } from '@/lib/social-wall';
import { siteConfig } from '@/lib/site-config';

const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export function SocialWall() {
  const { facebook, instagram } = siteConfig.socials;

  return (
    <section className="section bg-creme" id="social-wall">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            #FortApache · #ColDeVence
          </p>
          <h2 className="text-foret-dark mb-4">Suivez la vie du club</h2>
          <p className="max-w-2xl mx-auto text-charbon/75 mb-6">
            Photos, instants partagés, coulisses et nouveautés — retrouvez-nous
            au quotidien sur nos réseaux.
          </p>
          <div className="flex justify-center gap-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foret-dark text-white rounded-full hover:bg-foret transition text-sm font-medium"
              >
                <InstagramIcon className="w-4 h-4" />
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
                <FacebookIcon className="w-4 h-4" />
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

              {/* Overlay sombre au survol avec caption */}
              <div className="absolute inset-0 bg-charbon/0 group-hover:bg-charbon/75 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-xs md:text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-4">
                  {post.caption}
                </p>
              </div>

              {/* Badge source */}
              <div className="absolute top-3 right-3 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-foret-dark">
                {post.source === 'instagram' ? (
                  <InstagramIcon className="w-3.5 h-3.5" />
                ) : (
                  <FacebookIcon className="w-3.5 h-3.5" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
