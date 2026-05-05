import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[linear-gradient(135deg,#f2ca50,#d4af37)] text-[#2a2107] shadow-[0_14px_30px_rgba(212,175,55,0.18)] hover:brightness-110',
  secondary:
    'border border-white/10 bg-white/6 text-white hover:border-white/20 hover:bg-white/10',
  ghost:
    'text-white/72 hover:bg-white/6 hover:text-white',
  danger:
    'border border-[#ffb4ab]/25 bg-[#93000a]/15 text-[#ffb4ab] hover:bg-[#93000a]/25',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-sm',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </button>
  );
}
