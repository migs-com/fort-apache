import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import {
  GalleryClient,
  type GalleryImage,
} from '@/components/galerie/GalleryClient';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Galerie photos — Nos chevaux, nos cavaliers',
  description:
    "Découvrez en images la vie du club Fort Apache : cours, stages, compétitions, randonnées et portraits de notre cavalerie.",
};

// Largeurs/hauteurs génériques en attendant les dimensions exactes.
// next/image s'adapte automatiquement au ratio réel de chaque image au chargement.
const W = 1200;
const H = 900;

const images: GalleryImage[] = [
  { src: ffeImages.top3, alt: 'Fort Apache — vue d\'ensemble', category: 'Le club', width: W, height: H },
  { src: ffeImages.top7, alt: 'Fort Apache — cavalerie', category: 'Le club', width: W, height: H },
  { src: ffeImages.article1, alt: 'Moment de vie au club', category: 'Actualités', width: W, height: H },
  { src: ffeImages.article2, alt: 'Moment de vie au club', category: 'Actualités', width: W, height: H },
  { src: ffeImages.album[0], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[1], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[2], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[3], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[4], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[5], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[6], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[7], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[8], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[9], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[10], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[11], alt: 'Photo du club', category: 'Album', width: W, height: H },
  { src: ffeImages.album[12], alt: 'Photo du club', category: 'Album', width: W, height: H },
];

export default function GaleriePage() {
  return (
    <>
      <PageHeader overline="Galerie" title="La vie du club en images">
        Parcours en carrière, stages ensoleillés, instants complices avec nos
        chevaux — un aperçu de ce que vous vivrez à Fort Apache.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto">
          <GalleryClient images={images} />
        </div>
      </section>
    </>
  );
}
