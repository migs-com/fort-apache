import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bordeaux disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-bordeaux text-white hover:bg-bordeaux-dark shadow-sm hover:shadow-md',
  secondary: 'bg-foret text-white hover:bg-foret-dark shadow-sm hover:shadow-md',
  outline:
    'border-2 border-current text-foret hover:bg-foret hover:text-white',
  ghost: 'text-foret-dark hover:bg-creme',
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
