'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
};

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<string>('Tout');

  const categories = [
    'Tout',
    ...Array.from(new Set(images.map((i) => i.category))),
  ];

  const visible =
    filter === 'Tout' ? images : images.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? 'bg-foret-dark text-white'
                : 'bg-white text-charbon border border-sable/50 hover:border-foret'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {visible.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            aria-label={`Agrandir ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              loading="lazy"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={visible.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
      />
    </>
  );
}
