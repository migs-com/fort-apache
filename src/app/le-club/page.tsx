import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Reportage } from '@/components/ui/Reportage';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Le Club — Histoire, équipe et cavalerie',
  description:
    "Découvrez Fort Apache : Pénélope, son équipe pédagogique, l'histoire du club, les équipements et notre cavalerie de chevaux et poneys.",
};

const equipements = [
  {
    name: 'Carrière extérieure',
    desc: '60 × 30 m en sable fibré, éclairée pour les cours en soirée.',
  },
  {
    name: 'Manège couvert',
    desc: "30 × 20 m, praticable toute l'année quel que soit le temps.",
  },
  {
    name: 'Paddocks & prairies',
    desc: '12 hectares de pâtures pour le bien-être de nos chevaux.',
  },
  {
    name: 'Club house',
    desc: "Espace convivial pour se retrouver avant et après les cours.",
  },
];

const cavalerie = [
  { name: 'Equinox', race: 'Selle Français', usage: 'Saut / Dressage', photo: ffeImages.album[0] },
  { name: 'Sahara', race: 'Arabe', usage: 'Randonnée', photo: ffeImages.album[1] },
  { name: 'Orion', race: 'Lusitanien', usage: 'Dressage', photo: ffeImages.album[2] },
  { name: 'Mistral', race: 'Poney Welsh', usage: 'École poney', photo: ffeImages.album[3] },
  { name: 'Nuage', race: 'Connemara', usage: 'Enfants / Débutants', photo: ffeImages.album[4] },
  { name: 'Romeo', race: 'Selle Français', usage: 'Saut confirmés', photo: ffeImages.album[5] },
];

export default function LeClubPage() {
  return (
    <>
      <PageHeader overline="Le Club" title="Une passion partagée depuis 20 ans">
        Fort Apache, c&apos;est avant tout une équipe, un lieu et une
        philosophie de l&apos;équitation tournée vers le respect du cheval.
      </PageHeader>

      {/* Pénélope */}
      <section className="section bg-creme">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ffeImages.top7}
              alt="Pénélope, fondatrice et monitrice de Fort Apache"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              L&apos;équipe
            </p>
            <h2 className="text-foret-dark mb-6">Pénélope, fondatrice</h2>
            <div className="space-y-4 text-charbon/85">
              <p>
                Cavalière depuis son plus jeune âge et titulaire du BPJEPS,
                Pénélope a fondé Fort Apache avec une conviction simple :
                l&apos;équitation doit rester un plaisir, une rencontre entre
                le cavalier et son cheval.
              </p>
              <p>
                Entourée d&apos;une équipe de moniteurs diplômés, elle
                accueille aujourd&apos;hui plus de 150 cavaliers toute
                l&apos;année, du baby poney aux cavaliers de compétition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Notre histoire
          </p>
          <h2 className="text-foret-dark mb-6">Un lieu construit avec le temps</h2>
          <p className="text-lg text-charbon/85 leading-relaxed">
            Niché à Coursegoules, au Quartier Col de Vence, Fort Apache a
            grandi au fil des années dans un cadre naturel exceptionnel des
            Alpes-Maritimes. Chaque installation a été pensée pour offrir le
            meilleur aux chevaux et à leurs cavaliers. Nous cultivons un
            esprit de famille où chaque cavalier, chaque cheval, trouve sa
            place.
          </p>
        </div>
      </section>

      {/* Reportage vidéo */}
      <section className="section bg-foret-dark text-creme">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
              Ils en parlent
            </p>
            <h2 className="text-white">Reportage sur Fort Apache</h2>
            <p className="mt-3 text-creme/80 max-w-2xl mx-auto">
              Découvrez le club, son cadre et son ambiance en images.
            </p>
          </div>
          <Reportage
            videoId="m_POi9XlYC8"
            startSeconds={35}
            title="Reportage Fort Apache — Club équestre à Coursegoules"
          />
        </div>
      </section>

      {/* Équipements */}
      <section className="section bg-creme">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Installations
            </p>
            <h2 className="text-foret-dark">Des équipements adaptés</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipements.map((e) => (
              <Card key={e.name} variant="bordered">
                <CardBody>
                  <svg
                    className="w-10 h-10 text-foret mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <CardTitle>{e.name}</CardTitle>
                  <p className="text-charbon/75 text-sm">{e.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cavalerie */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              La cavalerie
            </p>
            <h2 className="text-foret-dark">Nos compagnons à quatre sabots</h2>
            <p className="mt-3 text-charbon/75 max-w-2xl mx-auto">
              Une cavalerie variée et bien entretenue, pour chaque cavalier un
              cheval ou un poney adapté.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {cavalerie.map((c) => (
              <Card key={c.name} variant="elevated">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.photo}
                    alt={`Portrait de ${c.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardBody className="p-4">
                  <p className="font-serif text-xl text-foret-dark">{c.name}</p>
                  <p className="text-xs text-charbon/60 uppercase tracking-wide">
                    {c.race}
                  </p>
                  <p className="text-sm text-bordeaux mt-1">{c.usage}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foret text-white">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-white mb-4">
            Envie de rencontrer l&apos;équipe ?
          </h2>
          <p className="text-creme/85 max-w-xl mx-auto mb-6">
            Venez visiter le club et discuter de votre projet équestre.
          </p>
          <LinkButton href="/contact" variant="primary" size="lg">
            Prendre rendez-vous
          </LinkButton>
        </div>
      </section>
    </>
  );
}
