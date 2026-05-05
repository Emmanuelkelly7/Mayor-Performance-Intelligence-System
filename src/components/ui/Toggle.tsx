import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export default function Toggle({
  checked,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { checked: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={cn(
        'relative inline-flex h-7 w-12 items-center rounded-full border transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary/25',
        checked
          ? 'border-primary/30 bg-primary/90'
          : 'border-white/10 bg-white/10',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-block h-5 w-5 rounded-full bg-[#0b0b0b] transition duration-200',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
