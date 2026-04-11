import type { ReactNode } from 'react';

export function PageHeader({
  overline,
  title,
  children,
}: {
  overline?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-foret-dark text-creme pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="container-narrow text-center">
        {overline && (
          <p className="font-sans uppercase tracking-[0.3em] text-sable-light text-xs mb-4">
            {overline}
          </p>
        )}
        <h1 className="text-white mb-6">{title}</h1>
        {children && (
          <div className="text-lg text-creme/85 max-w-2xl mx-auto">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
