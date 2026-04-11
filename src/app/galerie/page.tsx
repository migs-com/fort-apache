import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import {
  GalleryClient,
  type GalleryImage,
} from '@/components/galerie/GalleryClient';

export const metadata: Metadata = {
  title: 'Galerie photos — Nos chevaux, nos cavaliers',
  description:
    "Découvrez en images la vie du club Fort Apache : cours, stages, compétitions, randonnées et portraits de notre cavalerie.",
};

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80',
    alt: 'Cheval au galop dans un pré',
    category: 'Chevaux',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=1200&q=80',
    alt: 'Cavalier en séance de saut',
    category: 'Compétitions',
    width: 1200,
    height: 1600,
  },
  {
    src: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=1200&q=80',
    alt: 'Cours d\'équitation dans la carrière',
    category: 'Cours',
    width: 1200,
    height: 900,
  },
  {
    src: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=1200&q=80',
    alt: 'Portrait de cheval alezan',
    category: 'Chevaux',
    width: 1200,
    height: 1500,
  },
  {
    src: 'https://images.unsplash.com/photo-1594768816441-1dd241ffaa57?w=1200&q=80',
    alt: 'Groupe de cavaliers en extérieur',
    category: 'Randonnées',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1518883631804-39c75990b040?w=1200&q=80',
    alt: 'Randonnée en forêt à cheval',
    category: 'Randonnées',
    width: 1200,
    height: 1600,
  },
  {
    src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=1200&q=80',
    alt: 'Enfant sur un poney',
    category: 'École poney',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80',
    alt: 'Stage en été',
    category: 'Stages',
    width: 1200,
    height: 900,
  },
  {
    src: 'https://images.unsplash.com/photo-1564329494258-3ef0f4c1a2bd?w=1200&q=80',
    alt: 'Cheval de dressage en tenue de concours',
    category: 'Compétitions',
    width: 1200,
    height: 1500,
  },
  {
    src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&q=80',
    alt: 'Cheval noir au coucher de soleil',
    category: 'Chevaux',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1611242320536-f12d3541249b?w=1200&q=80',
    alt: 'Pansage d\'un cheval',
    category: 'Cours',
    width: 1200,
    height: 1400,
  },
  {
    src: 'https://images.unsplash.com/photo-1445266838305-28f49ec96094?w=1200&q=80',
    alt: 'Poulain avec sa mère',
    category: 'Chevaux',
    width: 1200,
    height: 900,
  },
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
