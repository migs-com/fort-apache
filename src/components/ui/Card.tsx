import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
};

export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
    bordered: 'bg-white border border-sable/40',
  };

  return (
    <div
      className={`rounded-lg overflow-hidden ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`font-serif text-2xl text-foret-dark mb-2 ${className}`}>
      {children}
    </h3>
  );
}
