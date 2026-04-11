import { siteConfig } from '@/lib/site-config';

export function MapEmbed() {
  const query = encodeURIComponent(
    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.locality}`
  );

  return (
    <section className="bg-creme" aria-label="Carte et accès">
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-10">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Nous rejoindre
          </p>
          <h2 className="text-foret-dark">Où nous trouver</h2>
          <p className="mt-3 text-charbon/75">
            {siteConfig.contact.address.street},{' '}
            {siteConfig.contact.address.postalCode}{' '}
            {siteConfig.contact.address.locality}
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-sable/40">
          <iframe
            title="Carte — Fort Apache Club Équestre"
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
