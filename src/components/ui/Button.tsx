import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-display font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-terracotta text-cream hover:bg-terracotta-dark shadow-sm hover:shadow-md focus-visible:ring-terracotta/50',
  secondary:
    'bg-midnight text-cream hover:bg-midnight/90 shadow-sm hover:shadow-md focus-visible:ring-midnight/50',
  outline:
    'border-2 border-sage text-midnight hover:bg-sage/10 focus-visible:ring-sage/50',
  ghost:
    'border-2 border-sage text-midnight hover:bg-sage/10 focus-visible:ring-sage/50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-md',
  lg: 'px-8 py-4 text-lg rounded-md',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className = '', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

type LinkButtonProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
