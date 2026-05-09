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
    default:
      'bg-cream border border-sage/30 shadow-sm hover:shadow-md transition-shadow duration-200',
    elevated:
      'bg-cream border border-sage/30 shadow-md hover:shadow-lg transition-shadow duration-200',
    bordered: 'bg-cream border border-sage/30',
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
    <h3 className={`font-display text-midnight font-bold text-xl mb-2 ${className}`}>
      {children}
    </h3>
  );
}
