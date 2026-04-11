type ReportageProps = {
  videoId: string;
  startSeconds?: number;
  title: string;
  caption?: string;
};

/**
 * Embed YouTube léger : iframe natif en lazy loading.
 * On évite d'embarquer la lib `react-youtube` pour garder le bundle minimal.
 */
export function Reportage({
  videoId,
  startSeconds,
  title,
  caption,
}: ReportageProps) {
  const params = new URLSearchParams({ rel: '0' });
  if (startSeconds) params.set('start', String(startSeconds));
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <figure className="max-w-4xl mx-auto">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-charbon">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-charbon/70 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
