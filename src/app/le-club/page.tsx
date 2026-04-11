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
    name: 'Carrière 1 000 m²',
    desc: 'Notre grande carrière pour les cours, le travail sur le plat et l\'obstacle.',
  },
  {
    name: 'Carrière 500 m²',
    desc: 'Une seconde carrière pour les groupes plus petits et les débutants.',
  },
  {
    name: 'Cross & parcours de fond',
    desc: 'Cross de niveau galop 7 et parcours de fond de 450 m sur 3 hectares.',
  },
  {
    name: 'Carrière naturelle 3 000 m²',
    desc: 'Une grande carrière en herbe pour le travail en extérieur.',
  },
  {
    name: '11 boxes & 4 stabulations',
    desc: 'Des boxes spacieux (3,20 × 3,20 m) et de grandes stabulations pour la cavalerie.',
  },
  {
    name: '10 paddocks',
    desc: '2 grands paddocks de 5 000 m² + 8 paddocks de 500 à 800 m² pour les sorties.',
  },
];

const cavalerie = [
  { name: 'Criquet', tag: 'Le poney le plus gentil du monde', photo: ffeImages.album[0] },
  { name: 'Flamenco', tag: 'Tendre et patient', photo: ffeImages.album[1] },
  { name: 'Lounka', tag: 'Adoré des enfants', photo: ffeImages.album[2] },
  { name: 'Rasta', tag: 'Spécialiste de l\'obstacle', photo: ffeImages.album[3] },
  { name: 'Polux', tag: 'Maître de l\'attelage', photo: ffeImages.album[4] },
  { name: 'Paquerette', tag: 'Pour les petites filles', photo: ffeImages.album[5] },
  { name: 'Calypso', tag: 'Gentille avec du caractère', photo: ffeImages.album[6] },
  { name: 'Lolita', tag: 'Gentille avec du caractère', photo: ffeImages.album[7] },
  { name: 'Mouche', tag: 'Gentille avec du caractère', photo: ffeImages.album[8] },
  { name: 'Coccinelle', tag: 'Apprentie « M.P.M »', photo: ffeImages.album[9] },
  { name: 'Grillon', tag: 'Apprenti « M.P.M »', photo: ffeImages.album[10] },
  { name: 'Ulysse', tag: 'Champion de la sieste', photo: ffeImages.album[11] },
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
                Cavalière depuis l&apos;âge de 5 ans, Pénélope a passé
                plusieurs années aux côtés de{' '}
                <strong className="text-foret-dark">Bartabas</strong>, à
                s&apos;occuper des chevaux du célèbre{' '}
                <strong className="text-foret-dark">
                  Théâtre équestre Zingaro
                </strong>
                . De cette expérience exigeante, elle a tiré une rigueur
                profonde dans la sélection, l&apos;éducation et le soin de sa
                cavalerie.
              </p>
              <p>
                Aujourd&apos;hui, elle dirige Fort Apache et près de{' '}
                <strong>25 chevaux et poneys</strong>, entourée d&apos;une
                équipe de moniteurs diplômés. Sa philosophie : transmettre
                bien plus qu&apos;une technique équestre — apprendre la vie
                d&apos;écurie, le respect de l&apos;animal, et faire de chaque
                séance « une école de la vie ».
              </p>
              <p className="font-serif italic text-foret-dark text-lg pt-2 border-l-4 border-bordeaux pl-4">
                « Ce que j&apos;aimerais, c&apos;est leur transmettre ce que
                j&apos;ai reçu : l&apos;apprentissage total du cheval. »
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
              Du shetland au grand cheval, près de 25 montures soigneusement
              sélectionnées pour leur générosité. Chaque cavalier trouve son
              compagnon, quel que soit son âge, sa taille ou son ambition.
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
                  <p className="text-sm text-bordeaux italic mt-1">{c.tag}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-sm italic text-charbon/60 max-w-2xl mx-auto">
            Une pensée pour Dum-Dum, « le cheval le plus gentil du monde »,
            parti trop tôt mais toujours dans nos cœurs.
          </p>
        </div>
      </section>

      {/* Environnement / Parc Naturel */}
      <section className="section bg-foret-dark text-creme">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
              Notre cadre
            </p>
            <h2 className="text-white mb-6">
              Au cœur du Parc Naturel des Préalpes d&apos;Azur
            </h2>
            <div className="space-y-4 text-creme/90">
              <p>
                À 40 minutes de la mer, niché au Col de Vence, Fort Apache
                bénéficie d&apos;un cadre exceptionnel : vues sur la mer et
                les montagnes, géologie unique, faune et flore protégées.
              </p>
              <p>
                Au fil des balades, il est fréquent de croiser des biches,
                des chevreuils, parfois un sanglier. Nous organisons même des
                promenades nocturnes pour écouter le brame du cerf, ou pour
                aller voir les feux d&apos;artifice depuis les hauteurs.
              </p>
              <p className="text-sable-light italic">
                Un terrain de 3 hectares, point de départ vers les quatre
                points cardinaux pour la randonnée.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={ffeImages.album[12]}
              alt="Le Col de Vence depuis Fort Apache"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
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
            Ouvert 7 jours / 7 de 10h à 18h.
          </p>
          <LinkButton href="/contact" variant="primary" size="lg">
            Prendre rendez-vous
          </LinkButton>
        </div>
      </section>
    </>
  );
}
