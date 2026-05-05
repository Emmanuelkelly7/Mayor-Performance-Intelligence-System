import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  gold: 'border border-primary/20 bg-primary/10 text-primary',
  neutral: 'border border-white/10 bg-white/6 text-white/68',
  success: 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  warning: 'border border-amber-400/20 bg-amber-400/10 text-amber-300',
  danger: 'border border-[#ffb4ab]/20 bg-[#93000a]/15 text-[#ffb4ab]',
};

export default function Badge({
  className,
  children,
  variant = 'neutral',
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants }) {

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
